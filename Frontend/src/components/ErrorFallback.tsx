import React from "react";

const ErrorFallback = () => {
  return (
    <div className="w-full text-center">
      <p className="text-xl font-semibold text-slate-900 mt-10">
        Oops! Failed to load url!
      </p>
      <p className="text-[0.9rem] font-medium text-slate-700 mt-1 mb-10">
        Try again later or paste new one!
      </p>
    </div>
  );
};

export default ErrorFallback;
