// src/pages/NotFound.tsx
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-50 px-6 text-center">

      {/* Broken car icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        className="w-48 h-48 text-gray-500 mb-8"
        fill="currentColor"
      >
        <path d="M528 128h-48l-26.78-53.56A32 32 0 0 0 425.6 64H214.4a32 32 0 0 0-27.62 10.44L160 128h-48C50.14 128 0 178.14 0 240v48a48 48 0 0 0 48 48h16a80 80 0 0 0 160 0h192a80 80 0 0 0 160 0h16a48 48 0 0 0 48-48v-48c0-61.86-50.14-112-112-112zM128 368a48 48 0 1 1 48-48 48 48 0 0 1-48 48zm384 0a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM128 256h-32v-16a16 16 0 0 1 16-16h16zm384 0h-32v-32h16a16 16 0 0 1 16 16z" />
      </svg>
      {/* Title */}
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">
        Oops! Page not found
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you’re looking for might be broken, under repair, or doesn’t
        exist. Let’s get you back on the road.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-6 rounded-3xl transition"
      >
        Go Home
      </Link>
    </div>
  );
}
