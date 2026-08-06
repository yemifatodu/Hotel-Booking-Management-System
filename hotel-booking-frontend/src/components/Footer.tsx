import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-700 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold tracking-tight text-white">
              HolidayHotel
            </span>
            <p className="mt-3 text-sm text-teal-100">
              Book stays you'll actually want to leave a review about.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-200">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-teal-50 hover:text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/my-bookings"
                  className="text-teal-50 hover:text-white hover:underline"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="/my-hotels"
                  className="text-teal-50 hover:text-white hover:underline"
                >
                  My Hotels
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-200">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-teal-50">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:support@holidayhotel.com"
                  className="hover:text-white hover:underline"
                >
                  support@holidayhotel.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-teal-50">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href="tel:+442079460001"
                  className="hover:text-white hover:underline"
                >
                  +44 20 7946 0001
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-200">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <p className="text-teal-50 hover:text-white hover:underline cursor-pointer">
                  Privacy Policy
                </p>
              </li>
              <li>
                <p className="text-teal-50 hover:text-white hover:underline cursor-pointer">
                  Terms of Service
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-teal-600 pt-6 text-center text-sm text-teal-200">
          © {year} HolidayHotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
