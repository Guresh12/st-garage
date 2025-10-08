import { Droplets, Sparkles, Wrench, Wind, Car, Disc, Stethoscope, Settings, Target, CircleDot, Zap, Snowflake, Armchair, Truck } from 'lucide-react';

const services = [
  { name: 'Executive Car Wash', icon: Droplets, tagline: 'Premium exterior shine' },
  { name: 'Interior & Exterior Detailing', icon: Sparkles, tagline: 'Complete deep cleaning' },
  { name: 'Engine Wash', icon: Settings, tagline: 'Engine bay cleaning' },
  { name: 'Carpet Wash', icon: Armchair, tagline: 'Fresh & clean interiors' },
  { name: 'Minor & Major Services', icon: Wrench, tagline: 'Full maintenance packages' },
  { name: 'Brakes & Suspension', icon: Disc, tagline: 'Safe & smooth rides' },
  { name: 'Diagnosis Services', icon: Stethoscope, tagline: 'Advanced diagnostics' },
  { name: 'Mechanical Repairs', icon: Settings, tagline: 'Expert mechanical work' },
  { name: 'Tracking & Alignment', icon: Target, tagline: 'Precision alignment' },
  { name: 'Tyre Change', icon: CircleDot, tagline: 'Quick tyre replacement' },
  { name: 'Battery Change', icon: Zap, tagline: 'Reliable power solutions' },
  { name: 'AC Installation', icon: Snowflake, tagline: 'Cool & comfortable' },
  { name: 'Interior Upholstery', icon: Armchair, tagline: 'Luxury seat restoration' },
  { name: 'Vehicle Towing', icon: Truck, tagline: '24/7 roadside assistance' },
  { name: 'Wheel Balancing', icon: CircleDot, tagline: 'Smooth driving experience' },
  { name: 'Body Fabrication', icon: Car, tagline: 'Custom bodywork' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From premium car washing to expert mechanical repairs, we offer comprehensive automotive care services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-b-4 border-[#d4af37]"
              >
                <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={32} className="text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.tagline}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
