import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image.jpg')" }}>
      <form
        className="flex flex-col justify-center items-center gap-6 w-[90%] max-w-lg shadow-2xl bg-white/30 p-10 rounded-2xl animate-fadeIn backdrop-blur-md"
      >
        <h3 className="text-3xl font-bold text-gray-800">Welcome Back!</h3>

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

        {/* Sign Up Link */}
        <div className="w-full text-left">
          <span className="text-sm text-gray-700">
            Don't have an account?
            <Link href="/signup" className="text-blue-700 font-bold ml-1 hover:underline">
              Sign Up
            </Link>
          </span>
        </div>

        {/* Log In Button */}
        <button
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 mt-4"
          type="submit"
        >
          Log In
        </button>



      </form>
    </main>
  );
}