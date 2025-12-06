import { useState } from "react";
import { X, Plus } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery sections with real images from YouTube thumbnails
  const gallerySections = [
    {
      title: "Residential Nettings",
      images: [
        { id: 1, src: "https://5.imimg.com/data5/ANDROID/Default/2023/5/311322178/LP/DU/YW/121009216/product-jpeg-500x500.jpg" },
        { id: 2, src: "https://5.imimg.com/data5/ANDROID/Default/2021/12/LJ/XV/OQ/93521948/prod-20211224-1938567618781872831265921-jpg-500x500.jpg" },
        { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2JpBnZ5Ql4_7lb8gjpmLOnqBrSEKe7bpCQ&s" },
        { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfp1erLdp-Wga61Mgq0l7FAcQVhpcgk8ZGkA&s" },
      ]
    },
    {
      title: "Invisible Grills",
      images: [
        { id: 5, src: "https://5.imimg.com/data5/SELLER/Default/2022/5/CU/QZ/MA/9376581/stainless-steel-invisible-grill.jpg" },
        { id: 6, src: "https://jindalhanger.com/wp-content/uploads/2024/12/Garden-Invisible-Grills.png" },
        { id: 7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2lScoyzQkTcva0aXOjltQ47O7J-kz01J3A&s" },
        { id: 8, src: "https://mspace.in/wp-content/uploads/2025/04/invisible-grill-500x500-1.webp" },
      ]
    },
    {
      title: "Commercial Nettings",
      images: [
        { id: 9, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjxlOy1GEloNpOlzvutyGm2pipzTAD9TNiZGjHC5c9IF64sWSC8Txv88V7sPLfmT_9ImvmYHY" },
        { id: 10, src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUbcFicKmIIAE0uPWg8mOx8k4OJGmXcz_tfFfwctArtuSvgi1UBD-m73BWr3IzmWj_qPZmZJzc" },
        { id: 11, src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNN0uat4ruOWeCVDgVQt1UwuEAY_Wtkp5t6uA3FIwgno4Sah3dwOR2rw_hMUbkzdOE7cPrYvHK" },
        { id: 12, src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCOC3_8CEeM36_YxdcXrFe-DInxvuUFxMbmVoNHNhZmYkImf8tEmSMzKJ5G_axjxuUBdYMfVlp" },
      ]
    },
    {
      title: "Balcony Bird Netting",
      images: [
        { id: 13, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstZVvJGlHu5rMKsrvb0YUIR0PM6pyJsNobA&s" },
        { id: 14, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnp7WRS4Oh2gk88Ld_3LFU4aC5xiL6wHn3g&s" },
        { id: 15, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBj7eB-yq1Q5rmr5WZDuxwYVwxdAC2sn5LA&s" },
        { id: 16, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuliJKkX7P2xBGdLTlyeopB9f_AW1OKPc91w&s" },
      ]
    },
    {
      title: "Anti Bird Nets",
      images: [
        { id: 17, src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT0bAQ8U63CQ7BOUCrLRtC-swkoBt72Ixvk4UoiKRtEgrmh1EmD4gnbc4rcMtBH6PYNVxV_kx16" },
        { id: 18, src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5QfStKwUN4HfSCuWa81rMyc6337irrdXUgIoKeZS8fPi28YblMHK_O9mtC4gIs3geJ4YdGIhT" },
        { id: 19, src: "https://masteradmin.kushaldeveloper.com/Media/ProductImages/anti-bird-net-installation-for-balconies-and-halls-durable-nets-for-bird-free-spacesoxz6.jpeg" },
        { id: 20, src: "https://images.jdmagicbox.com/quickquotes/images_main/6mm-black-balcony-anti-bird-net-2211542442-8e7iji9v.jpg" },
      ]
    },
    {
      title: "Society Nettings",
      images: [
        { id: 21, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3TFG75RZMS4AfWbDFGHajDFWr0PxRP_5NoA&s" },
        { id: 22, src: "https://5.imimg.com/data5/SELLER/Default/2022/12/VS/PD/ZF/52549249/society-bird-netting-500x500.jpeg" },
        { id: 23, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF9pqczE-u0MVSAcy9mP7tqekdSqdXxwh4Q&s" },
        { id: 24, src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A3QlG6w5OpiZoMPz/duct-area-nets-YBgjGOMnn8UVEZeB.jpg" },
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Gallery Sections */}
      {gallerySections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 text-center mb-6 sm:mb-8 lg:mb-10">
              {section.title}
            </h2>

            {/* Image Grid - 4 columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2 lg:gap-2.5">
              {section.images.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer group aspect-square"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={`${section.title} ${image.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <Plus className="h-8 w-8 sm:h-10 sm:w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="h-8 w-8 text-white" />
            </button>
            <img
              src={selectedImage.src}
              alt="Gallery"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-14 lg:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Want Similar Results?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and site survey
          </p>
          <a
            href="tel:+919082074661"
            className="inline-block bg-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-green-600 transition-colors"
            style={{ color: 'white' }}
          >
            Call Now: +91 9082074661
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
