import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronLeft, ChevronRight, Star, Plus, Minus, Play, X } from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const heroSlides = [
    {
      title: "Professional Bird Netting Services",
      subtitle: "HDPE Residential Humane Bird Nettings",
      description: "Protecting your property from bird infestations with effective, humane, and aesthetic solutions since 2012.",
      bgImage: "https://netsnscreens.com/wp-content/uploads/2023/09/Bird-Netting.jpg",
    },
    {
      title: "Complete Bird Control Solutions",
      subtitle: "For Homes, Societies & Industries",
      description: "We have wide varieties of Humane nets specifically designed for residential, commercial, and industrial areas.",
      bgImage: "https://www.birdnetsodisha.com/wp-content/uploads/2025/06/services-7.jpg",
    },
    {
      title: "Expert Installation Team",
      subtitle: "10+ Years of Experience",
      description: "Professional trained technicians with years of industry experience ensuring quality installation.",
      bgImage: "https://birdfree.in/wp-content/uploads/2020/12/wel-img.jpg",
    }
  ];

  const services = [
    { title: "Residential NP Bird Netting", description: "We have wide varieties of nets specifically designed for residential areas. These nets can be used at windows, balconies, shafts etc.", link: "/service/residential-bird-netting", bgImage: "https://m.media-amazon.com/images/I/91P6LjfpWwL.jpg" },
    { title: "Balcony NP Bird Netting", description: "Keep your balcony clean and hygienic with our invisible bird nets. Enjoy your outdoor space without worrying about bird droppings.", link: "/service/balcony-bird-netting", bgImage: "https://m.media-amazon.com/images/I/A1DSbYO0vgL.jpg" },
    { title: "Society NP Bird Netting", description: "Complete bird control solutions for apartment complexes and housing societies. Protect common areas and building exteriors.", link: "/service/society-bird-netting", bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSvfm2eTlSvL8ykYUSjg1sV65n6itz7fvsA&s" },
    { title: "Industrial Netting", description: "Heavy-duty bird control solutions for factories, warehouses, and industrial facilities. Protect machinery and maintain hygiene standards.", link: "/service/industrial-bird-netting", bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYJv6rdvz8RdYxSfliKRWLzYsK2ZBQQv9fw&s" },
    { title: "Bird Spikes", description: "Durable stainless steel bird spikes that prevent birds from landing on ledges, roofs, and other surfaces without causing harm.", link: "/service/bird-spikes", bgImage: "https://static01.nyt.com/images/2011/03/20/us/20BCINTEL2/20BCINTEL2-jumbo.jpg?quality=75&auto=webp&disable=upscale" },
    { title: "Anti NP Bird Nets", description: "High-quality UV-stabilized anti-bird nets for comprehensive protection against all types of birds. Suitable for all property types.", link: "/service/anti-bird-nets", bgImage: "https://images.jdmagicbox.com/quickquotes/images_main/hdpe-skipper-anti-bird-net-blue-10x6-feet-2223680634-x7r7ht21.jpg" },
    { title: "Invisible Grill Nets", description: "Modern safety solution with transparent stainless steel cables. Provides security without obstructing views from windows and balconies.", link: "/service/invisible-grill", bgImage: "https://5.imimg.com/data5/SELLER/Default/2022/5/CU/QZ/MA/9376581/stainless-steel-invisible-grill.jpg" },
    { title: "Pet Safety Nets", description: "Strong and reliable safety nets designed to protect your pets from falls. Perfect for balconies and windows in high-rise buildings.", link: "/service/pet-safety-nets", bgImage: "https://kalikasafetynets.com/img/pe.jpeg" },
    { title: "Mosquito Nets", description: "Fine mesh mosquito nets for doors and windows. Keep insects out while allowing fresh air circulation. Available in various sizes.", link: "/service/mosquito-nets", bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aaES5_orh5gi3eYS_FLbddrqE1r3ZNYhxQ&s" },
    { title: "Sports & Turf Nets", description: "Professional sports netting for cricket practice, football fields, and turf protection. Durable nets designed for outdoor sports facilities.", link: "/service/sports-turf-nets", bgImage: "https://i.pinimg.com/474x/ff/d7/4c/ffd74c817b7c8cfdeab41c00f29d126c.jpg" },
    { title: "Aluminium Sliding Window Nets", description: "Premium quality aluminium sliding windows with smooth operation. Energy-efficient, durable, and modern designs for residential and commercial spaces.", link: "/service/aluminium-sliding-window", bgImage: "https://5.imimg.com/data5/SELLER/Default/2025/1/484847753/FN/NZ/TM/10738377/sliding-mosquito-net.jpg" },
    { title: "Safety & Construction Nets", description: "Heavy-duty safety nets for construction sites and building projects. Ensures worker safety and prevents falling debris. Meets all safety standards.", link: "/service/safety-construction-nets", bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AlcQsRKu37WU0LWqfs3LgVm2Z1h0zKi9Jg&sg" },
  ];

  const moreServices = [

  ];

  const benefits = [
    { icon: "🛡️", title: "Quality Products", description: "UV stabilized nets" },
    { icon: "👷", title: "Expert Team", description: "Trained technicians" },
    { icon: "⏰", title: "Timely Service", description: "On-time completion" },
    { icon: "💰", title: "Best Pricing", description: "Competitive rates" },
    { icon: "📞", title: "24/7 Support", description: "Always available" },
    { icon: "✅", title: "Warranty", description: "4-5 years coverage" }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", location: "Surat", rating: 5, text: "Excellent service! The team installed NP bird netting on my balcony within a day. Very professional and the quality is outstanding." },
    { name: "Priya Sharma", location: "Ahmedabad", rating: 5, text: "NP Bird Net India provided the best solution for our society. All residents are happy with the installation. Highly recommended!" },
    { name: "Amit Patel", location: "Vadodara", rating: 5, text: "Great work! The invisible grill installation was perfect. Now my kids are safe and we have an unobstructed view." }
  ];

  const faqs = [
    { question: "What is bird netting?", answer: "Bird netting is a physical barrier made from durable polyethylene material that prevents birds from accessing specific areas while remaining virtually invisible from a distance." },
    { question: "How long does bird netting last?", answer: "Our bird nets are UV stabilized and come with a 4-5 years warranty. With proper installation and maintenance, they can last even longer." },
    { question: "Is bird netting safe for birds?", answer: "Yes, bird netting is a humane solution. It simply creates a barrier that prevents birds from entering certain areas without harming them." },
    { question: "How much does bird netting cost?", answer: "The cost varies based on area size, type of netting, and installation complexity. Call for a free site survey and accurate quotation." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Slider */}
      <section className="relative overflow-hidden">
        <div
          className="bg-linear-to-br from-blue-600 via-blue-500 to-blue-600 text-white min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex items-center py-16 sm:py-20 transition-all duration-700 relative"
          style={heroSlides[currentSlide].bgImage ? {
            backgroundImage: `url(${heroSlides[currentSlide].bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } : {}}
        >
          {heroSlides[currentSlide].bgImage && (
            <div className="absolute inset-0 bg-blue-900/40" />
          )}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <span className="inline-block bg-white/90 text-blue-600 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg">
                {heroSlides[currentSlide].subtitle}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/95 max-w-2xl leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/service/residential-bird-netting" className="inline-flex items-center justify-center bg-white text-blue-600 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                  Our Services
                </Link>
                <a href="tel:+919026644917" className="inline-flex items-center justify-center bg-emerald-600 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-emerald-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" />
                  <span className="text-white">Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Slider Controls */}
        <button onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full transition-colors" aria-label="Previous slide">
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </button>
        <button onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full transition-colors" aria-label="Next slide">
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </button>
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              onClick={() => setShowVideo(true)}
              className="bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden aspect-video relative group cursor-pointer order-2 lg:order-1"
            >
              <img
                src="https://img.youtube.com/vi/j7k5dJgpBsQ/hqdefault.jpg"
                alt="Installation Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 text-white" fill="white" />
                </div>
                <p className="text-sm sm:text-lg font-medium mt-4">Watch Our Installation Process</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mt-2 mb-4 sm:mb-6">
                Welcome to <span className="text-blue-600">NP Bird Net India</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>Established in 2012, NP Bird Net India is a leading provider of bird netting services in Surat, Gujarat and surrounding areas. We have specialist and skilled employees providing customized solutions.</p>
                <p>Our range of services includes NP Bird Nets, Invisible Grills, Mosquito Nets, Sport safety nets and more. We provide customized and easy installation products with service warranty of 4 to 5 years.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">6500+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">15L+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Sqft Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mt-2">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div
                  className="h-36 sm:h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed line-clamp-3">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors text-sm sm:text-base">
                    Learn More <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* More Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8 sm:mt-12">
            {moreServices.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white p-3 sm:p-5 rounded-lg sm:rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <span className="text-2xl sm:text-3xl block mb-1 sm:mb-2">{service.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-br from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold drop-shadow-lg">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-1 text-sm sm:text-base lg:text-lg">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-white/90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mt-2">Customer Reviews</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-3 sm:pt-4">
                  <p className="font-bold text-slate-800 text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mt-2">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-slate-800 text-sm sm:text-base pr-4">{faq.question}</span>
                    {openFaq === index ? <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0" /> : <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0" />}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-br from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 drop-shadow-lg">Ready to Protect Your Property?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-white/95 max-w-2xl mx-auto">Get in touch with our experts for a free site survey and consultation</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
              Contact Now
            </Link>
            <a href="tel:+919026644917" className="inline-flex items-center justify-center bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-emerald-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              +91 9026644917
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative bg-black rounded-xl overflow-hidden max-h-[80vh]"
            style={{ width: 'min(320px, 85vw)', aspectRatio: '9/16' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors z-10"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/j7k5dJgpBsQ?autoplay=1"
              title="Bird Net Installation Process"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
