import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-3 sm:mt-4 mb-2">Page Not Found</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto px-4">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-5 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors shadow-md"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center bg-gray-200 text-gray-700 px-5 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
