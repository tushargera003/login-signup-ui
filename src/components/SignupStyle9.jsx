import React from "react";

const SignupStyle9 = ({
  title = "Create Your Account",
  description = "Sign up quickly",
  onSubmit,
  showLogo = true,
  logoUrl,
  showSocialLogin = true,
  socialLoginOptions = [],
  customFooter,
  theme = "light",
  backgroundImage,
  imagePosition = "right",
}) => {
  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className="w-full md:w-1/2"
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: imagePosition,
              }
            : {}
        }
      ></div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
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
            className="w-full p-2 bg-indigo-600 text-white rounded"
          >
            Sign Up
          </button>
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

export default SignupStyle9;
