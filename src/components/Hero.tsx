import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/st copy.jpeg"
        alt="ST George's Auto Fit Garage"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Quality Car Washing &<br />Auto Repair Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          At ST George's Auto Fit, we deliver top-tier automotive care — where performance meets perfection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/254791168742?text=Hello%20ST%20George's%20Auto%20Fit,%20I'd%20like%20to%20book%20a%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d4af37] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#c4a037] transition-all transform hover:scale-105 shadow-lg"
          >
            Book Service
          </a>
          <button
            onClick={scrollToAbout}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all"
          >
            Learn More
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-[#d4af37]" />
        </div>
      </div>
    </section>
  );
}
