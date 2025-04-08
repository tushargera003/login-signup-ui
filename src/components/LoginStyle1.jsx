import React from "react";

const LoginStyle1 = ({
  title = "Welcome Back",
  description = "Please sign in to your account",
  onSubmit,
  fields = [
    { label: "Email", name: "email", type: "email", placeholder: "Email" },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ],
  showForgotPassword = true,
  showLogo = true,
  logoUrl = "",
  logoAlt = "Logo",
  showSocialLogin = false,
  socialLoginOptions = [],
  customFooter = null,
  theme = "light",
  backgroundImage = "",
  imagePosition = "center",
}) => {
  const isDark = theme === "dark";

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    onSubmit && onSubmit(data);
  };

  return (
    <div
      className={`min-h-screen flex ${
        isDark ? "bg-[#0f172a] text-white" : "bg-gray-100 text-gray-900"
      } transition-all duration-300`}
    >
      {/* Image Section */}
      <div
        className="hidden md:flex w-1/2 transition-all duration-300"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: imagePosition,
        }}
      />

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 sm:p-10 lg:p-20 transition-all duration-300">
        {showLogo && (
          <img
            src={logoUrl || "https://via.placeholder.com/100"}
            alt={logoAlt}
            className="mb-6 w-20 h-20 object-contain drop-shadow-md"
          />
        )}
        <h2 className="text-4xl font-extrabold tracking-tight mb-2">{title}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-center max-w-sm">
          {description}
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6 bg-white dark:bg-[#1e293b] shadow-lg rounded-xl p-8"
        >
          {fields.map((field, idx) => (
            <div key={idx}>
              {field.label && (
                <label
                  htmlFor={field.name}
                  className="block mb-1 font-medium text-sm"
                >
                  {field.label}
                </label>
              )}
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required ?? true}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#334155] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Login
          </button>

          {showForgotPassword && (
            <p className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
              Forgot Password?
            </p>
          )}
        </form>

        {/* Social Login Buttons */}
        {showSocialLogin && socialLoginOptions.length > 0 && (
          <div className="mt-8 w-full max-w-md">
            <p className="mb-3 text-center text-sm text-gray-500 dark:text-gray-400">
              Or continue with
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLoginOptions.map((option, idx) => (
                <button
                  key={idx}
                  onClick={option.onClick}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {option.icon && (
                    <span className="text-lg">{option.icon}</span>
                  )}
                  {option.provider}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Custom Footer */}
        {customFooter && (
          <div className="mt-6 w-full max-w-md text-center">{customFooter}</div>
        )}
      </div>
    </div>
  );
};

export default LoginStyle1;
