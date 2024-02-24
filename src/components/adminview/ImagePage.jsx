// ImagePage.js
"use client"
import React from 'react';

const ImagePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://via.placeholder.com/300"
              alt="Placeholder"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Image Description</div>
            <p className="mt-2 text-gray-500">This is a placeholder image with some explanation about it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
