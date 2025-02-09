'use client';

import Link from 'next/link';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      return toast.error('Password did not match, try again!');
    }

    // Add signup logic here (e.g., API request)
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image.jpg')" }}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6 w-[90%] max-w-lg shadow-2xl bg-white/30 p-10 rounded-2xl animate-fadeIn backdrop-blur-md"
      >
        <h3 className="text-3xl font-bold text-gray-800">Create New Account!</h3>

        {/* Name Input */}
        <label className="w-full">
          <span className="block text-sm font-semibold text-gray-600">
            Name
          </span>
          <input
            required
            type="text"
            name="name"
            className="mt-2 w-full px-4 py-3 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            placeholder="Enter your name"
          />
        </label>

        {/* Age Input */}
        <label className="w-full">
          <span className="block text-sm font-semibold text-gray-600">
            Age
          </span>
          <input
            required
            type="number"
            name="age"
            min="1"
            className="mt-2 w-full px-4 py-3 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            placeholder="Enter your age"
          />
        </label>

        {/* Email Input */}
        <label className="w-full">
          <span className="block text-sm font-semibold text-gray-600">
            Email
          </span>
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full px-4 py-3 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            placeholder="Enter your email address"
          />
        </label>

        {/* Password Input */}
        <label className="w-full">
          <span className="block text-sm font-semibold text-gray-600">
            Password
          </span>
          <input
            required
            type="password"
            name="password"
            className="mt-2 w-full px-4 py-3 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            placeholder="Enter your password"
          />
        </label>

        {/* Confirm Password Input */}
        <label className="w-full">
          <span className="block text-sm font-semibold text-gray-600">
            Confirm Password
          </span>
          <input
            required
            type="password"
            name="confirmPassword"
            className="mt-2 w-full px-4 py-3 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            placeholder="Confirm your password"
          />
        </label>

        {/* Already Have an Account */}
        <div className="w-full text-left">
          <span className="text-sm text-gray-700">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-700 font-bold hover:underline">
              Log In
            </Link>
          </span>
        </div>

        {/* Sign Up Button */}
        <button
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 mt-4"
          type="submit"
        >
          Sign Up
        </button>


      </form>
    </main>
  );
};

export default Signup;