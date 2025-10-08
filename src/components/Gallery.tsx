const galleryImages = [
  { src: '/services/wash.jpg', alt: 'Executive Car Wash' },
  { src: '/services/repair.jpg', alt: 'Mechanical Repairs' },
  { src: '/services/diagnostic.jpg', alt: 'Diagnostic Services' },
  { src: '/services/towing.jpg', alt: 'Vehicle Towing' },
  { src: '/services/alignment.jpg', alt: 'Wheel Alignment' },
  { src: '/services/detailing.jpg', alt: 'Interior Detailing' },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our state-of-the-art facility and the quality work we deliver
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group h-64"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-bold text-center px-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
