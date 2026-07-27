import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = true }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Sticky or static Header */}
      <Header />

      {/* Optional Hero Banner */}
      {showHero && <Hero />}

      {/* Main Content Area */}
      <div className="container mx-auto px-4 flex-1 py-10">
        {children}
      </div>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
