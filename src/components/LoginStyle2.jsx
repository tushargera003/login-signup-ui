import React from "react";

const LoginStyle2 = ({
  title = "Sign In",
  description = "Enter your credentials",
  onSubmit,
  showForgotPassword = false,
  showLogo = false,
  logoUrl,
  showSocialLogin = false,
  socialLoginOptions = [],
  customFooter,
  theme = "light",
  backgroundImage,
  imagePosition = "top",
}) => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
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
      {showLogo && logoUrl && (
        <img src={logoUrl} alt="Logo" className="mb-4 w-16 h-16" />
      )}
      <div className="bg-opacity-90 p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit && onSubmit({});
          }}
        >
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-green-600 text-white rounded"
          >
            Sign In
          </button>
        </form>
        {showForgotPassword && (
          <p className="mt-2 text-sm text-green-600 cursor-pointer">
            Forgot password?
          </p>
        )}
        {showSocialLogin && socialLoginOptions.length > 0 && (
          <div className="mt-4">
            {socialLoginOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={option.onClick}
                className="mr-2 p-2 bg-gray-400 rounded"
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

export default LoginStyle2;
