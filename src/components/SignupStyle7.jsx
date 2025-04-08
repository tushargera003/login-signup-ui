import React from "react";

const SignupStyle7 = ({
  title = "Join Us",
  description = "Create your new account",
  onSubmit,
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
      <div className="bg-white dark:bg-gray-700 bg-opacity-90 p-8 rounded shadow-md w-full max-w-md">
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
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-3 border rounded"
          />
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
            className="w-full p-2 bg-teal-600 text-white rounded"
          >
            Sign Up
          </button>
        </form>
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

export default SignupStyle7;
