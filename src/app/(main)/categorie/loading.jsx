import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-6">
      
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      <h2 className="text-xl font-semibold text-gray-700">
        Loading News...
      </h2>

      <div className="w-full max-w-3xl space-y-4 mt-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="p-4 border rounded-lg shadow-sm space-y-3 animate-pulse"
          >
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-5 bg-gray-300 rounded w-3/4"></div>
            <div className="h-40 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Loading;