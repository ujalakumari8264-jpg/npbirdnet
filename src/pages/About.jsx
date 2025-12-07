import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const About = () => {
  const benefits = [
    "Best solution in high level infestations.",
    "Versatile as it can be used vertically, horizontally or diagonally.",
    "All fixings used in our Netting Systems are of the highest standard.",
    "All Netting Systems designed and installed by expert teams.",
    "Effectively deters pigeons and seagulls."
  ];

  const nettingBenefits = [
    "The nets we install are virtually invisible.",
    "UV stabilised so they will not rot.",
    "Netting made from polyethene is appropriate for most applications.",
    "Fire retardant netting can be installed.",
    "Access zips allow easy access for maintenance work.",
    "Birds are unharmed - humane solution."
  ];

  const stats = [
    { value: "12+", label: "Services" },
    { value: "6500+", label: "Happy Customers" },
    { value: "15L+", label: "Sqft Area Covered" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Main Content */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 xl:p-12 border border-gray-100">
            <div className="mb-6 sm:mb-8">
              <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mt-2">NP Bird Net India</h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Bird Net India is an established company that serves Surat, Gujarat and surrounding areas for all bird, bird waste or fouling problems. Our team are specialist surveyors and technicians with years of industry experience.
              </p>
              <p>
                Incorporated in the year of 2011, We have many years of experience in working with homeowners, commercial businesses, local authorities and housing associations to deliver bird control and bird netting services that solve bird problems.
              </p>
              <p>
                Apart from this we are also providing Installation and Residential Bird Netting Service for our customers. Our offered arrays of these products are strictly manufactured with the six sigma compliance. These products are highly appreciated and acclaimed for their optimum quality, sturdy construction and easy installation features.
              </p>
            </div>

            {/* Stats Section */}
            <div className="mt-8 sm:mt-10 lg:mt-12 bg-linear-to-br from-blue-600 to-blue-500 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
                {stats.map((stat, index) => (
                  <div key={index} className="p-5 sm:p-6 lg:p-8 text-center text-white">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 drop-shadow-lg">{stat.value}</div>
                    <div className="text-white/90 font-medium text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6">Immediate, Effective & Discreet Benefits:</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6">Benefits of Bird Netting:</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {nettingBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 mr-2 sm:mr-3 mt-0.5 shrink-0" />
                      <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-14 lg:py-16 bg-linear-to-br from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 drop-shadow-lg">Ready to Work With Us?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-white/95 max-w-2xl mx-auto">Call today for a free consultation and site survey</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
