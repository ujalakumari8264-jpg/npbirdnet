import { Link } from "react-router-dom";
import { Phone, Mail, Clock, ChevronRight, MapPin } from "lucide-react";

// Custom SVG icons for social media (real brand icons)
const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const Footer = () => {
  const services = [
    { name: "Residential NP Bird Netting", id: "residential-bird-netting" },
    { name: "Balcony NP Bird Netting", id: "balcony-bird-netting" },
    { name: "Society NP Bird Netting", id: "society-bird-netting" },
    { name: "Industrial NP Bird Netting", id: "industrial-bird-netting" },
    { name: "Bird Spikes", id: "bird-spikes" },
    { name: "Anti NP Bird Nets", id: "anti-bird-nets" },
    { name: "Invisible Grill", id: "invisible-grill" },
    { name: "Pet Safety Nets", id: "pet-safety-nets" },
    { name: "Mosquito Nets", id: "mosquito-nets" },
    { name: "Aluminium Sliding Window", id: "aluminium-sliding-window" },
    { name: "Sports & Turf Nets", id: "sports-turf-nets" },
    { name: "Safety & Construction Nets", id: "safety-construction-nets" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Videos", path: "/videos" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <footer className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 sm:py-14 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 transform hover:scale-105 transition-transform">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold block leading-tight bg-linear-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">NP BIRD NET</span>
                  <span className="text-xs text-slate-400 font-semibold">India | Since 2012</span>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">
                NP Bird Net India is a leading provider of bird netting and safety solutions in Surat. We specialize in residential, commercial, and industrial bird control services with 10+ years of experience.
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/neeraj.patel.996137?rdid=WQElMR3xhE2Qb9Sy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17qAAECMcF%2F" className="w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-blue-500/50 hover:scale-110 transform" aria-label="Facebook">
                  <FacebookIcon className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-pink-500/50 hover:scale-110 transform" aria-label="Instagram">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.youtube.com/@funnyeditor69/shorts" className="w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center hover:from-red-500 hover:to-red-600 transition-all shadow-lg hover:shadow-red-500/50 hover:scale-110 transform" aria-label="YouTube">
                  <YoutubeIcon className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-transparent rounded-full"></span>
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 list-none p-0 m-0">
                {quickLinks.map((link) => (
                  <li key={link.name} className="list-none">
                    <Link to={link.path} className="flex items-center text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all text-sm sm:text-base font-medium no-underline group">
                      <ChevronRight className="h-4 w-4 mr-2 text-blue-400 group-hover:text-blue-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 relative inline-block">
                Our Services
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-transparent rounded-full"></span>
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 list-none p-0 m-0">
                {services.slice(0, 12).map((service) => (
                  <li key={service.id} className="list-none">
                    <Link to={`/service/${service.id}`} className="flex items-center text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all text-sm sm:text-base font-medium no-underline group">
                      <ChevronRight className="h-4 w-4 mr-2 text-blue-400 shrink-0 group-hover:text-blue-300" />
                      <span className="line-clamp-1">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 relative inline-block">
                Contact
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-transparent rounded-full"></span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Sai Palace, Gate No. 2, Shop No. 31, Chorasi, Karadva, Surat, Gujarat 394210
                  </p>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <a href="tel:+919026644917" className="text-slate-300 hover:text-blue-400 transition-colors text-sm sm:text-base font-medium">
                    +91 9026644917
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <a href="mailto:neerajpatel902664@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors text-sm sm:text-base font-medium break-all">
                    neerajpatel902664@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-sm sm:text-base">Mon - Sat: 9AM - 6PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left font-medium">
                © {new Date().getFullYear()} Bird Net India. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs sm:text-sm">
                <Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">Privacy Policy</Link>
                <Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">Terms of Service</Link>
              </div>
            </div>
            <div className="text-center mt-4 pt-4 border-t border-slate-700/50">
              <p className="text-slate-500 text-xs italic">* All images displayed on this website are for reference purposes only</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
