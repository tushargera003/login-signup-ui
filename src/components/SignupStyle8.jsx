import React from "react";

const SignupStyle8 = ({
  title = "Register",
  description = "Fill in your details",
  onSubmit,
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
      className={`min-h-screen flex items-center justify-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
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
            placeholder="Full Name"
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
            className="w-full p-2 bg-orange-600 text-white rounded"
          >
            Register
          </button>
        </form>
        {customFooter && <div className="mt-4">{customFooter}</div>}
      </div>
    </div>
  );
};

export default SignupStyle8;
