import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

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
    { name: "Aluminium Sliding Window Nets", id: "aluminium-sliding-window" },
    { name: "Sports & Turf Nets", id: "sports-turf-nets" },
    { name: "Safety & Construction Nets", id: "safety-construction-nets" },
  ];

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "OUR SERVICES", path: "/service/residential-bird-netting", dropdown: true },
    { name: "GALLERY", path: "/gallery" },
    { name: "VIDEOS", path: "/videos" },
    { name: "BLOGS", path: "/blogs" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar - Hidden on mobile, visible on md+ */}
      <div className="bg-blue-900 py-2 text-xs sm:text-sm hidden md:block">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="font-semibold text-white">Welcome To NP Bird Net India</span>
          <div className="flex items-center gap-4 lg:gap-6 flex-wrap justify-center">
            <a href="tel:+919026644917" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors font-medium text-white">
              <Phone className="h-3.5 w-3.5 text-white" />
              <span className="hidden sm:inline">+91 9026644917</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a href="mailto:neerajpatel902664@gmail.com" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors font-medium text-white">
              <Mail className="h-3.5 w-3.5 text-white" />
              <span className="hidden lg:inline">neerajpatel902664@gmail.com</span>
              <span className="lg:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-md"}`}>
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-linear-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <span className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 block leading-tight">NP BIRD NET</span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold">India | Since 2012</span>
              </div>
            </Link>

            {/* Desktop Navigation - Hidden below lg */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center gap-1 px-2.5 xl:px-4 py-2 font-semibold text-xs xl:text-sm transition-colors rounded-lg ${isActive(link.path) || location.pathname.startsWith('/service/') ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:text-blue-600 hover:bg-gray-50"}`}
                      >
                        {link.name}
                        <ChevronDown className={`h-3.5 w-3.5 xl:h-4 xl:w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </Link>
                      {servicesOpen && (
                        <div className="absolute left-0 top-full pt-2 w-56 xl:w-64 z-50">
                          <div className="bg-white shadow-xl rounded-lg py-2 border border-gray-100 max-h-80 xl:max-h-96 overflow-y-auto">
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                to={`/service/${service.id}`}
                                className="block px-4 py-2 xl:py-2.5 text-xs xl:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-2.5 xl:px-4 py-2 font-semibold text-xs xl:text-sm transition-colors rounded-lg whitespace-nowrap ${isActive(link.path) ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:text-blue-600 hover:bg-gray-50"}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="tel:+919026644917"
                className="ml-2 xl:ml-4 bg-emerald-600 px-3 xl:px-5 py-2 xl:py-2.5 rounded-lg font-bold text-xs xl:text-sm hover:bg-emerald-700 transition-all flex items-center gap-1.5 xl:gap-2 shadow-md hover:shadow-lg"
              >
                <Phone className="h-3.5 w-3.5 xl:h-4 xl:w-4 text-white" />
                <span className="text-white">Call Now</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Navigation - Full screen overlay */}
          {isOpen && (
            <div className="lg:hidden fixed inset-0 top-16 sm:top-18 bg-white z-40 overflow-y-auto animate-fade-in">
              <div className="py-2 pb-24">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <div>
                        <div className="flex items-center border-b border-gray-100">
                          <Link
                            to={link.path}
                            className="flex-1 px-4 py-3.5 text-slate-700 font-semibold text-sm"
                          >
                            {link.name}
                          </Link>
                          <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="px-4 py-3.5 text-slate-700"
                            aria-label="Toggle services menu"
                          >
                            <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                          </button>
                        </div>
                        {servicesOpen && (
                          <div className="bg-gray-50 py-2 max-h-64 overflow-y-auto">
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                to={`/service/${service.id}`}
                                className="block px-6 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-3.5 font-semibold text-sm border-b border-gray-100 ${isActive(link.path) ? "text-blue-600 bg-blue-50" : "text-slate-700 active:bg-gray-50"}`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                {/* Mobile CTA */}
                <div className="px-4 pt-6 space-y-3">
                  <a
                    href="tel:+919026644917"
                    className="block w-full bg-linear-to-r from-emerald-500 to-emerald-600 text-center py-3.5 rounded-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-md"
                    style={{ color: 'white' }}
                  >
                    📞 Call: +91 9026644917
                  </a>
                  <a
                    href="https://wa.me/919026644917"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-linear-to-r from-green-500 to-green-600 text-center py-3.5 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-md"
                    style={{ color: 'white' }}
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
