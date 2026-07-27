import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-10 border-t border-teal-500/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-bold tracking-tight text-teal-400">
            Huuboi
          </span>
          <p className="text-xs text-gray-400 mt-1">
            Global travel booking platform & AI itinerary planning.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-300">
          <a href="mailto:info@yemifatodu.online" className="hover:text-teal-400 transition-colors">
            info@yemifatodu.online
          </a>
          <span className="hidden sm:inline text-gray-600">•</span>
          <Link to="/privacy-policy" className="hover:text-teal-400 transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline text-gray-600">•</span>
          <Link to="/terms" className="hover:text-teal-400 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
