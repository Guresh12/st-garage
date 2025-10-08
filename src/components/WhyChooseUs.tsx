import { Users, Wrench, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Our certified professionals have years of experience and undergo continuous training to stay updated with the latest automotive technologies.',
  },
  {
    icon: Wrench,
    title: 'Modern Equipment',
    description: 'We invest in state-of-the-art diagnostic and repair equipment to ensure accurate service and superior results for your vehicle.',
  },
  {
    icon: Shield,
    title: 'Reliable Service',
    description: 'We stand behind our work with quality guarantees and transparent pricing. Your satisfaction and vehicle safety are our top priorities.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We combine expertise, technology, and dedication to deliver exceptional automotive care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37] transition-all transform hover:-translate-y-2"
              >
                <div className="bg-[#d4af37] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
