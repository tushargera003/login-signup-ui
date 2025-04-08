import React from "react";

const LoginStyle1 = ({
  title = "Welcome Back",
  description = "Please sign in to your account",
  onSubmit,
  showForgotPassword = true,
  showLogo = true,
  logoUrl,
  showSocialLogin = false,
  socialLoginOptions = [],
  customFooter,
  theme = "light",
  backgroundImage,
  imagePosition = "left",
}) => {
  return (
    <div
      className={`min-h-screen flex ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Split screen layout */}
      <div
        className="hidden md:flex w-1/2"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: imagePosition,
        }}
      ></div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        {showLogo && logoUrl && (
          <img src={logoUrl} alt="Logo" className="mb-4 w-20 h-20" />
        )}
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="mb-6">{description}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit && onSubmit({});
          }}
          className="w-full max-w-sm"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded"
          >
            Login
          </button>
          {showForgotPassword && (
            <p className="mt-2 text-sm text-blue-600 cursor-pointer">
              Forgot Password?
            </p>
          )}
        </form>
        {showSocialLogin && socialLoginOptions.length > 0 && (
          <div className="mt-4">
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

export default LoginStyle1;
