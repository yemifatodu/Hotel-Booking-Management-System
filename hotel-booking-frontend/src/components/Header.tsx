import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <header className="bg-slate-900 border-b border-teal-500/20 py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
          <span className="text-teal-400">HolidayHotel</span>
        </Link>

        <div className="flex items-center space-x-6">
          <a 
            href="mailto:info@yemifatodu.online" 
            className="text-xs sm:text-sm text-gray-300 hover:text-teal-400 transition-colors hidden md:inline-block"
          >
            info@yemifatodu.online
          </a>

          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link to="/my-bookings" className="text-gray-200 hover:text-teal-400 font-medium transition-colors">
                My Bookings
              </Link>
              <Link to="/my-hotels" className="text-gray-200 hover:text-teal-400 font-medium transition-colors">
                My Hotels
              </Link>
              <SignOutButton />
            </div>
          ) : (
            <Link
              to="/sign-in"
              className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-teal-500/20"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
