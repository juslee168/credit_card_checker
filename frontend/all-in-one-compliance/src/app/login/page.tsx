import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="flex justify-center items-center text-white">
      <div className="text-center max-w-md p-8 bg-white text-black rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <p className="text-lg mb-6">Our login feature is coming soon! Stay tuned for updates.</p>
        <button
          className="bg-cyan-500 text-white py-2 px-6 rounded-md mb-4"
        >
            <div>
          <Link href="/" className="text-white">
            Go Back to Home
          </Link>
        </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
