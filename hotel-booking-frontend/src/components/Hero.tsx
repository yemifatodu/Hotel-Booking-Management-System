import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")`
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Perfect
            <span className="block text-teal-400">Dream Stay</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover amazing hotels, resorts, and accommodations worldwide.
            <br />
            Book with confidence and enjoy unforgettable experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-teal-500/20">
              <span>🔍</span> Smart Search
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-teal-500/20">
              <span>🌍</span> Global Destinations
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-teal-500/20">
              <span>📅</span> Flexible Booking
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-teal-500/20">
              <span>🛡️</span> 24/7 Support
            </div>
          </div>

          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
