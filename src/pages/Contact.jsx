import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Create WhatsApp message
    let message = `*New Inquiry from Website*%0A%0A`;
    message += `*Name:* ${formData.name}%0A`;
    message += `*Phone:* ${formData.phone}%0A`;
    if (formData.email) message += `*Email:* ${formData.email}%0A`;
    if (formData.address) message += `*Address:* ${formData.address}%0A`;
    if (formData.service) message += `*Service:* ${formData.service}%0A`;
    if (formData.message) message += `*Message:* ${formData.message}%0A`;
    
    // WhatsApp number
    const whatsappNumber = "919026644917";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", address: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 500);
  };

  const services = [
    "Residential NP Bird Netting", "Balcony NP Bird Netting", "Society NP Bird Netting",
    "Industrial NP Bird Netting", "Bird Spikes", "Anti NP Bird Nets",
    "Invisible Grill", "Pet Safety Nets", "Mosquito Nets", "Other"
  ];

  const serviceAreas = ["Surat", "Ahmedabad", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Navsari"];

  return (
    <div className="bg-gray-50">
      {/* Map Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 sm:mb-4">Find Us</h2>
            <p className="text-slate-600 text-sm sm:text-base">Visit our office for a personal consultation</p>
          </div>
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl h-64 sm:h-80 lg:h-96 overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=21.132971,72.874458&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NP Bird Net India Location"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 border border-gray-100 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-8 sm:py-12">
                  <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-emerald-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Thank You!</h3>
                  <p className="text-slate-600 text-sm sm:text-base">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 text-sm sm:text-base" placeholder="Your name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 text-sm sm:text-base" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 text-sm sm:text-base" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 text-sm sm:text-base" placeholder="Your complete address" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">Service Required</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 text-sm sm:text-base">
                      <option value="">Select a service</option>
                      {services.map((service) => (<option key={service} value={service}>{service}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-slate-800 text-sm sm:text-base" placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-[#25D366] text-white py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-[#1da851] transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl">
                    {loading ? (
                      <span className="flex items-center"><svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Opening WhatsApp...</span>
                    ) : (
                      <><svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>Send via WhatsApp</>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Contact Information</h2>
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">Head Office</h3>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=21.132971,72.874458" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base leading-relaxed no-underline">
                        21.132971, 72.874458 (Surat, Gujarat)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">Phone</h3>
                      <a href="tel:+919026644917" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">+91 9026644917</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">Email</h3>
                      <a href="mailto:neerajpatel902664@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base break-all">neerajpatel902664@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">Office Hours</h3>
                      <p className="text-slate-600 text-sm sm:text-base">Monday - Saturday: 9AM - 6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-blue-600 to-blue-500 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-white shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Need Immediate Assistance?</h3>
                <p className="text-white/95 mb-4 sm:mb-6 text-sm sm:text-base">Call us now for a free consultation and site survey.</p>
                <a href="tel:+919026644917" className="inline-block bg-white text-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
                  Call: +91 9026644917
                </a>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span key={area} className="bg-blue-50 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-blue-100">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
