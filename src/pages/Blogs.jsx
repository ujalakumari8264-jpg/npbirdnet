import { Link } from "react-router-dom";

const Blogs = () => {

  const blogs = [
    {
      id: "complete-guide-bird-net-installation",
      title: "Complete Guide to Bird Net Installation: Process, Cost & Benefits 2024",
      excerpt: "Expert guide to bird net installation covering types, installation process, costs, and benefits. Learn how professional bird netting protects your property from bird damage and provides long-lasting, humane solutions.",
      image: "https://hicare.in/blog/wp-content/uploads/2022/12/benefits-of-installing-bird-netting-in-your-home.jpg"
    },
    {
      id: "balcony-safety-nets-installation-guide",
      title: "Balcony Safety Nets: Installation Guide, Cost & Benefits for 2024",
      excerpt: "Complete guide to balcony safety nets covering installation, types, costs, and benefits. Protect your family and property with professional balcony netting solutions for child safety, pet protection, and bird control.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/12/474818876/YC/ZN/FO/226132598/balcony-safety-nets-installation-service.jpg"
    },
    {
      id: "pigeon-control-solutions-guide",
      title: "Pigeon Control Solutions: Complete Guide to Methods, Costs & Prevention 2024",
      excerpt: "Expert guide to pigeon control covering humane removal methods, prevention strategies, costs, and long-term solutions. Protect your property from pigeon damage with proven control techniques and professional services.",
      image: "https://hicare.in/blog/wp-content/uploads/2023/01/How-to-keep-pigeons-away.jpg"
    },
    {
      id: "industrial-bird-netting-solutions",
      title: "Industrial Bird Netting: Complete Guide for Warehouses & Factories 2024",
      excerpt: "Comprehensive guide to industrial bird netting for warehouses, factories, and commercial facilities. Learn about installation, costs, compliance requirements, and ROI for large-scale bird control solutions.",
      image: "https://avglobalbirdnetting.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-01-23-at-3.05.29-PM-768x346.jpg"
    },
    {
      id: "bird-spikes-installation-guide",
      title: "Bird Spikes Installation: Complete Guide to Types, Costs & Effectiveness 2024",
      excerpt: "Expert guide to bird spikes covering types, installation methods, costs, and effectiveness. Learn how bird spikes prevent roosting and protect your property with this proven, humane deterrent solution.",
      image: "https://pigeonnetshyderabad.com/images/bird-spikes/bird-deterrent-spikes-fixing-hyderabad-near-me.webp"
    },
    {
      id: "anti-bird-solutions-deterrent-methods",
      title: "Anti-Bird Solutions: Complete Guide to Deterrents, Methods & Prevention 2024",
      excerpt: "Comprehensive guide to anti-bird solutions covering all deterrent methods, prevention strategies, and effectiveness. Find the right bird control solution for your property with expert recommendations and comparisons.",
      image: "https://blog.birdbarrier.com/hubfs/Large%20group%20of%20birds%20perching%20in%20a%20neighborhood%20with%20no%20bird%20deterrents-1.jpeg"
    },
    {
      id: "apartment-bird-protection-solutions",
      title: "Apartment Bird Protection: Complete Guide for Multi-Unit Buildings 2024",
      excerpt: "Comprehensive guide to bird protection for apartments covering HOA approval, balcony solutions, building-wide strategies, and tenant rights. Protect your apartment with professional bird control solutions.",
      image: "https://www.jeevansafetynets.com/wp-content/uploads/2025/10/6-600x403.jpg"
    },
    {
      id: "bird-netting-benefits-roi-analysis",
      title: "Bird Netting Benefits & ROI: Complete Value Analysis & Cost Savings 2024",
      excerpt: "Comprehensive analysis of bird netting benefits and ROI covering health, financial, and property value advantages. Discover why bird netting pays for itself quickly with detailed cost-benefit calculations.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/12/470425191/BQ/YD/UL/98481646/bird-netting-is-cost-effective-way-to-prevent-bird-damage-2048-1365.jpg"
    },
    {
      id: "bird-netting-maintenance-care-guide",
      title: "Bird Netting Maintenance: Complete Care Guide for Longevity 2024",
      excerpt: "Expert guide to bird netting maintenance covering inspection schedules, cleaning procedures, repairs, and tips to extend lifespan. Keep your bird netting effective for years with proper care and maintenance.",
      image: "https://insightfulwords.com.au/wp-content/uploads/2024/06/bird_netting-repairs.jpg"
    },
    {
      id: "bird-control-pricing-cost-guide",
      title: "Bird Control Pricing Guide: Complete Cost Breakdown & Factors 2024",
      excerpt: "Comprehensive bird control pricing guide covering all cost factors, solution comparisons, budgeting tips, and how to get accurate quotes. Plan your bird control investment wisely with expert pricing insights.",
      image: "https://a-z-animals.com/media/2018/09/Parrot-lovebirds.jpg"
    }
  ];



  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Blog Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 lg:mb-12 text-center">
            Latest Blogs & Articles
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                <Link to={`/blogs/${blog.id}`} className="block">
                  <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h2 className="text-sm sm:text-base lg:text-lg font-bold text-slate-800 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {blog.title}
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 lg:mb-5 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                    <div className="inline-block bg-blue-600 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                      Read More
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">
            Need Professional Bird Control Solutions?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Explore our comprehensive range of bird netting, safety nets, and bird control services tailored to your needs.
          </p>
          <Link
            to="/service/residential-bird-netting"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            View All Our Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blogs;