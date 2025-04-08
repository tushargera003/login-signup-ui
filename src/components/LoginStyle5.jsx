import React from "react";

const LoginStyle5 = ({
  title = "Login",
  description = "Enter your details to sign in",
  onSubmit,
  showForgotPassword = true,
  showLogo = false,
  logoUrl,
  showSocialLogin = true,
  socialLoginOptions = [],
  customFooter,
  theme = "light",
  backgroundImage,
  imagePosition = "top",
}) => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: imagePosition,
            }
          : {}
      }
    >
      <div className="bg-white bg-opacity-90 dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
        {showLogo && logoUrl && (
          <img src={logoUrl} alt="Logo" className="mb-4 w-16 h-16 mx-auto" />
        )}
        <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
        <p className="text-center mb-6">{description}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit && onSubmit({});
          }}
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded"
          >
            Login
          </button>
        </form>
        {showForgotPassword && (
          <p className="mt-2 text-sm text-blue-600 text-center cursor-pointer">
            Forgot Password?
          </p>
        )}
        {showSocialLogin && socialLoginOptions.length > 0 && (
          <div className="mt-4 flex justify-center">
            {socialLoginOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={option.onClick}
                className="mr-2 p-2 bg-gray-300 rounded"
              >
                {option.provider}
              </button>
            ))}
          </div>
        )}
        {customFooter && <div className="mt-4">{customFooter}</div>}
      </div>
    </div>
  );
};

export default LoginStyle5;
