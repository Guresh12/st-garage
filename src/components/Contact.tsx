import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello ST George's Auto Fit,%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/254791168742?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for bookings, inquiries, or any automotive service needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-black text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="text-[#d4af37] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">0791 168 742</p>
                    <p className="text-gray-300">0108 078 301</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-[#d4af37] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">info@stgeorgesautofit.co.ke</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#d4af37] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Next to Two Rivers Mall</p>
                    <p className="text-gray-300">Opposite Mamlaka Hill Chapel</p>
                    <p className="text-gray-300">Northern Bypass, Nairobi</p>
                    <p className="text-gray-300 mt-2">P.O. Box 8456 – 00100 Nairobi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-[#d4af37] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-gray-300">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Sun: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7631234567!2d36.8571!3d-1.2234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTMnMjQuMiJTIDM2wrA1MScyNS42IkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ST George's Auto Fit Location"
              ></iframe>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    placeholder="0700 000 000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent resize-none"
                    placeholder="Tell us about your vehicle service needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d4af37] text-black px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#c4a037] transition-all flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
