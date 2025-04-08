import React from "react";

const LoginStyle4 = ({
  title = "Welcome",
  description = "Login with your credentials",
  onSubmit,
  showForgotPassword = false,
  showLogo = true,
  logoUrl,
  showSocialLogin = false,
  socialLoginOptions = [],
  customFooter,
  theme = "light",
  backgroundImage,
  imagePosition = "bottom",
}) => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {showLogo && logoUrl && (
        <img src={logoUrl} alt="Logo" className="mb-4 w-16 h-16" />
      )}
      <div className="w-full max-w-md bg-white dark:bg-gray-700 p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-6">{description}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit && onSubmit({});
          }}
        >
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-purple-600 text-white rounded"
          >
            Sign In
          </button>
        </form>
        {showForgotPassword && (
          <p className="mt-2 text-sm text-purple-600 cursor-pointer">
            Forgot Password?
          </p>
        )}
        {customFooter && <div className="mt-4">{customFooter}</div>}
      </div>
    </div>
  );
};

export default LoginStyle4;
