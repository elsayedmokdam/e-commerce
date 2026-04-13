'use client';

import { Atom } from 'react-loading-indicators';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Loading Indicator */}
      <div className="mb-8">
        <Atom color="#32cd32" size="medium" text="" textColor="" />
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-800">
          Loading
        </h2>
        <p className="text-gray-600 text-sm">
          Please wait while we prepare your experience...
        </p>
      </div>

      {/* Dots Animation */}
      <div className="mt-6 flex gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
}
