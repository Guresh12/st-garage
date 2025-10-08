export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About ST George's Auto Fit Limited
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are a professional auto service and detailing center offering precision car wash, repairs,
              and maintenance services in Nairobi. Our team combines modern tools, skilled technicians,
              and a passion for perfection to keep your car performing at its best.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Located conveniently next to Two Rivers Mall, we've become Nairobi's trusted choice for
              comprehensive automotive care. Whether it's a quick wash or major repair, we treat every
              vehicle with the same level of attention and expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#d4af37] rounded-full"></div>
                <span className="text-gray-700 font-semibold">10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#d4af37] rounded-full"></div>
                <span className="text-gray-700 font-semibold">Certified Technicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#d4af37] rounded-full"></div>
                <span className="text-gray-700 font-semibold">Quality Guarantee</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="/about.jpg"
                alt="ST George's Auto Fit Team"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#d4af37] text-black p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm font-semibold">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
