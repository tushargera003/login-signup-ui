import React, { useState } from "react";
import PropTypes from "prop-types";

const LoginStyle2 = ({
  // Basic props
  title = "Welcome Back",
  subtitle = "Please enter your details",
  onSubmit,
  showLogo = true,
  logoUrl = "https://via.placeholder.com/80",
  logoAlt = "Logo",
  logoStyle = {},

  // Form fields
  fields = [
    { name: "email", type: "email", placeholder: "Email", required: true },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
  ],
  initialValues = {},
  validationSchema,

  // Buttons
  submitButtonText = "Sign In",
  showForgotPassword = true,
  forgotPasswordText = "Forgot password?",
  showSignUpLink = true,
  signUpText = "Don't have an account? Sign Up",
  onForgotPassword,
  onSignUp,

  // Social login
  showSocialLogin = false,
  socialLoginOptions = [
    { provider: "Google", icon: "G", color: "#DB4437" },
    { provider: "Facebook", icon: "F", color: "#4267B2" },
  ],
  socialLoginSpacing = "10px",

  // Custom content
  customHeader,
  customFooter,

  // Styling
  theme = "light",
  primaryColor = "#4F46E5",
  secondaryColor = "#10B981",
  cardBg = "bg-opacity-90",
  cardShadow = "shadow-lg",
  rounded = "rounded-xl",
  inputStyle = {},
  buttonStyle = {},

  // Layout
  width = "400px",
  padding = "2rem",
  backgroundImage,
  backgroundBlur = "0px",
  backgroundOverlay = "rgba(0,0,0,0.2)",
  animation = "fade-in",

  // Advanced
  enableAnimations = true,
  onFieldChange,
  customValidation,
  loading = false,
  loadingComponent,
  error,
  successMessage,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (onFieldChange) {
      onFieldChange(name, value);
    }

    // Basic validation
    if (validationSchema && validationSchema[name]) {
      const isValid = validationSchema[name].validate(value);
      if (!isValid) {
        setErrors((prev) => ({
          ...prev,
          [name]: validationSchema[name].message,
        }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Run custom validation if provided
    if (customValidation) {
      const customErrors = customValidation(formData);
      if (Object.keys(customErrors).length > 0) {
        setErrors(customErrors);
        return;
      }
    }

    // Submit if no errors
    if (Object.keys(errors).length === 0) {
      onSubmit(formData);
    }
  };

  // Animation classes
  const getAnimationClass = () => {
    if (!enableAnimations) return "";
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "slide-up":
        return "animate-slide-up";
      case "zoom-in":
        return "animate-zoom-in";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backdropFilter: `blur(${backgroundBlur})`,
              position: "relative",
            }
          : {}
      }
    >
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: backgroundOverlay }}
        />
      )}

      <div
        className={`relative ${cardBg} ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } ${cardShadow} ${rounded} ${getAnimationClass()}`}
        style={{
          width,
          padding,
          border:
            theme === "dark"
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        {showLogo && (
          <div className="flex justify-center mb-6">
            <img
              src={logoUrl}
              alt={logoAlt}
              className="w-20 h-20 object-contain"
              style={logoStyle}
            />
          </div>
        )}

        {/* Custom Header */}
        {customHeader && <div className="mb-6">{customHeader}</div>}

        {/* Title */}
        <h1
          className={`text-3xl font-bold text-center mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={`text-center mb-8 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
            {successMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field, index) => (
            <div key={index}>
              <label
                htmlFor={field.name}
                className={`block text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {field.label || field.placeholder}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className={`w-full p-3 border ${rounded} focus:ring-2 focus:outline-none transition-all ${
                  errors[field.name]
                    ? "border-red-500 focus:ring-red-200"
                    : `border-gray-300 focus:ring-${primaryColor.replace(
                        "#",
                        ""
                      )} focus:border-${primaryColor.replace("#", "")}`
                } ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"}`}
                style={{
                  ...inputStyle,
                  ...(field.style || {}),
                }}
              />
              {errors[field.name] && (
                <p className="mt-1 text-sm text-red-500">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          {/* Forgot Password */}
          {showForgotPassword && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-sm hover:underline"
                style={{ color: secondaryColor }}
              >
                {forgotPasswordText}
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 ${rounded} font-medium text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2`}
            style={{
              backgroundColor: primaryColor,
              ...buttonStyle,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading
              ? loadingComponent || (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                )
              : submitButtonText}
          </button>

          {/* Social Login */}
          {showSocialLogin && socialLoginOptions.length > 0 && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div
                    className={`w-full border-t ${
                      theme === "dark" ? "border-gray-600" : "border-gray-300"
                    }`}
                  ></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span
                    className={`px-2 ${
                      theme === "dark"
                        ? "bg-gray-800 text-gray-400"
                        : "bg-white text-gray-500"
                    }`}
                  >
                    Or continue with
                  </span>
                </div>
              </div>

              <div
                className="mt-6 grid grid-cols-2 gap-3"
                style={{ gap: socialLoginSpacing }}
              >
                {socialLoginOptions.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => option.onClick && option.onClick()}
                    className={`w-full inline-flex justify-center py-2 px-4 border ${rounded} text-sm font-medium transition-all hover:opacity-90`}
                    style={{
                      backgroundColor: option.color || "#f3f4f6",
                      color: option.textColor || "#374151",
                      borderColor:
                        theme === "dark"
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(0,0,0,0.1)",
                    }}
                  >
                    {option.icon ? (
                      typeof option.icon === "string" ? (
                        <span className="mr-2">{option.icon}</span>
                      ) : (
                        <img
                          src={option.icon}
                          alt={option.provider}
                          className="w-5 h-5 mr-2"
                        />
                      )
                    ) : null}
                    {option.provider}
                  </button>
                ))}
              </div>
            </div>
          )}
        </form>

        {/* Sign Up Link */}
        {showSignUpLink && (
          <div
            className={`mt-6 text-center text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span>{signUpText.split("?")[0]}?</span>{" "}
            <button
              type="button"
              onClick={onSignUp}
              className="font-medium hover:underline"
              style={{ color: secondaryColor }}
            >
              {signUpText.split("?")[1]?.trim() || "Sign Up"}
            </button>
          </div>
        )}

        {/* Custom Footer */}
        {customFooter && <div className="mt-6">{customFooter}</div>}
      </div>
    </div>
  );
};

// PropTypes for better development experience
LoginStyle2.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  showLogo: PropTypes.bool,
  logoUrl: PropTypes.string,
  logoAlt: PropTypes.string,
  logoStyle: PropTypes.object,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      placeholder: PropTypes.string,
      required: PropTypes.bool,
      label: PropTypes.string,
      style: PropTypes.object,
    })
  ),
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  submitButtonText: PropTypes.string,
  showForgotPassword: PropTypes.bool,
  forgotPasswordText: PropTypes.string,
  showSignUpLink: PropTypes.bool,
  signUpText: PropTypes.string,
  onForgotPassword: PropTypes.func,
  onSignUp: PropTypes.func,
  showSocialLogin: PropTypes.bool,
  socialLoginOptions: PropTypes.arrayOf(
    PropTypes.shape({
      provider: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      color: PropTypes.string,
      textColor: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  socialLoginSpacing: PropTypes.string,
  customHeader: PropTypes.node,
  customFooter: PropTypes.node,
  theme: PropTypes.oneOf(["light", "dark"]),
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  cardBg: PropTypes.string,
  cardShadow: PropTypes.string,
  rounded: PropTypes.string,
  inputStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  width: PropTypes.string,
  padding: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundBlur: PropTypes.string,
  backgroundOverlay: PropTypes.string,
  animation: PropTypes.oneOf(["fade-in", "slide-up", "zoom-in"]),
  enableAnimations: PropTypes.bool,
  onFieldChange: PropTypes.func,
  customValidation: PropTypes.func,
  loading: PropTypes.bool,
  loadingComponent: PropTypes.node,
  error: PropTypes.string,
  successMessage: PropTypes.string,
};

export default LoginStyle2;
