import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-teal-700 py-6 shadow-md border-b border-teal-800/40">
      <div className="container mx-auto flex justify-between items-center px-4">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="transition-opacity hover:opacity-90">
            HolidayHotel
          </Link>
        </span>
        <span className="flex items-center space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 py-2 font-bold rounded transition-colors hover:bg-teal-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 py-2 font-bold rounded transition-colors hover:bg-teal-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <span className="ml-2">
                <SignOutButton />
              </span>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-teal-700 px-4 py-2 font-bold rounded transition-colors hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;