import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });

  const services = [
    { id: "residential-bird-netting", title: "Residential Bird Netting" },
    { id: "balcony-bird-netting", title: "Balcony Bird Netting" },
    { id: "society-bird-netting", title: "Society Bird Netting" },
    { id: "industrial-bird-netting", title: "Industrial Bird Netting" },
    { id: "bird-spikes", title: "Bird Spikes" },
    { id: "anti-bird-nets", title: "Anti Bird Nets" },
    { id: "invisible-grill", title: "Invisible Grill" },
    { id: "pet-safety-nets", title: "Pet Safety Nets" },
    { id: "mosquito-nets", title: "Mosquito Nets" },
    { id: "sports-turf-nets", title: "Sports & Turf Nets" },
    { id: "aluminium-sliding-window", title: "Aluminium Sliding Window Nets" },
    { id: "safety-construction-nets", title: "Safety & Construction Nets" },
  ];

  const serviceData = {
    "residential-bird-netting": {
      title: "Residential Bird Netting",
      images: [
        { id: 1, src: "https://5.imimg.com/data5/ANDROID/Default/2023/5/311322178/LP/DU/YW/121009216/product-jpeg-500x500.jpg" },
        { id: 2, src: "https://5.imimg.com/data5/ANDROID/Default/2021/12/LJ/XV/OQ/93521948/prod-20211224-1938567618781872831265921-jpg-500x500.jpg" },
        { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2JpBnZ5Ql4_7lb8gjpmLOnqBrSEKe7bpCQ&s" },
        { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfp1erLdp-Wga61Mgq0l7FAcQVhpcgk8ZGkA&s" },
      ],
      specifications: [
        "Manufactured from high-quality polyethylene for maximum strength and long-term durability.",
        "Resistant to insects, bacteria, and fungi, ensuring a clean and hygienic environment.",
        "UV-stabilized (500 Kly) to withstand harsh sunlight without degrading.",
        "Heat-treated to prevent knot loosening or spillage.",
        "Softening point: 120°C | Melting point: >130°C",
        "Available mesh sizes: 25 mm / 35 mm / 50 mm (square type).",
        "Supported with SS 304 wire rope to create strong, stable borders along walls and perimeters.",
      ],
      applications: ["Balconies", "Windows", "Ducts", "Shafts", "Open Ventilation Areas"],
      whatIsTitle: "What Is Residential Bird Netting?",
      whatIsContent: "Residential bird netting is a protective barrier designed to prevent birds—especially pigeons—from entering balconies, windows, and building shafts. These nets are customized for residential use and are installed without disturbing the building's aesthetics or view. Our residential bird nets typically last 8–9 years, even under heavy exposure to sunlight and rain. We provide professional installation services in Mumbai, delivering custom-fit bird nets that ensure long-term safety while maintaining the elegance of your home.",
      additionalSections: [
        {
          title: "Best Ways to Keep Birds Away From Your Residence",
          content: [
            { subtitle: "1) Prevent Window Collisions", text: "Birds often collide with glass because they don't see it. Make windows noticeable by using decals or patterned films, keeping curtains slightly drawn, and avoiding bright indoor lighting at night. These simple adjustments reduce bird accidents significantly." },
            { subtitle: "2) Eliminate Food Sources", text: "Birds visit homes mainly due to food availability. If you have fruit plants, open food, or grains exposed: Cover plants with balcony bird netting, keep food sealed, and clean up food spills outdoors. Removing food sources reduces daily bird activity near your home." },
            { subtitle: "3) Close All Entry Points", text: "Birds often enter through open gaps in roofs, staircases, or ventilation shafts. Inspect for holes or cracks, seal unnecessary openings, and ensure there are no eggs or chicks before removing nests. This prevents nests from being built inside your premises." },
            { subtitle: "4) Prevent Nesting", text: "Bird nests create dirt, smell, and insect issues. To stop nesting: Install bird netting over eaves, awnings, and shafts. Block ledges where birds frequently settle. Netting ensures birds cannot access suitable nesting spots." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) Professional Service", content: "We offer comprehensive residential bird protection solutions in Mumbai, including pigeon netting, bird spikes, and pest control support. Our trained team visits your location, inspects the area, and recommends the exact level of protection needed. Whether it's for a home, garden, or residential building, we deliver reliable and long-lasting solutions." },
        { title: "2) Safe & Humane Protection", content: "We use premium-grade materials that protect your residence without harming the birds. Our installations follow strict safety standards to ensure no injury to birds, strong and secure fittings, and long-term durability. We help you choose the most effective, humane method for keeping birds away—without damaging your property." },
      ],
    },
    "balcony-bird-netting": {
      title: "Balcony Bird Netting",
      images: [
        { id: 13, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstZVvJGlHu5rMKsrvb0YUIR0PM6pyJsNobA&s" },
        { id: 14, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnp7WRS4Oh2gk88Ld_3LFU4aC5xiL6wHn3g&s" },
        { id: 15, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBj7eB-yq1Q5rmr5WZDuxwYVwxdAC2sn5LA&s" },
        { id: 16, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuliJKkX7P2xBGdLTlyeopB9f_AW1OKPc91w&s" },
      ],
      specifications: [
        "The net is made of polyethylene, which is durable, strong and weather resistant.",
        "The net is resistant to attack by insects, bacteria and fungi.",
        "The net is UV light stabilized (500 Kly) for better durability. Also it is heat treated to prevent knot spillage.",
        "Softening point of the net = 120°C | Melting point > 130°C",
        "Sizes available - 25mm / 35mm / 50mm square shapes",
        "Supported SS 304 Wire Rope. (To create a strong border to wall periphery)",
      ],
      applications: ["Balconies", "Ducts", "Windows", "Shafts"],
      whatIsTitle: "What Is Balcony Bird Netting?",
      whatIsContent: "Whereas the sounds of birds singing and flapping outside the window are soothing and relaxing, the acidic bird droppings and nests that they leave behind when they rest on windows and cracks on walls are not only bothersome but also unclean. Things grow much more problematic when birds get inside your apartments, balcony, or kitchen. Balcony Bird Netting in Mumbai satisfies everyone's goal of living in high-rise residences, while also ensuring safety in this circumstance. All of our products are created with high-quality basic materials.",
      additionalSections: [
        {
          title: "Providing Best Services for Bird Netting",
          content: [
            { subtitle: "", text: "Once it pertains to balconies, balcony netting is the only efficient way to keep the pigeons out. Pigeon nets for balconies in Mumbai is in great demand in residential areas, and we offer a variety of anti-bird solutions to help. Such residential bird netting products do not affect the birds in any manner." },
            { subtitle: "", text: "Birds are prevented from entering populous areas and settings, keeping them from being stuck or injuring themselves. This simply keeps birds from entering residential areas and settings, preventing them from becoming trapped or harming themselves. When used to keep birds out of certain regions, our bird netting is most helpful." },
            { subtitle: "", text: "This bird netting is so durable that it can withstand larger creatures such as house pets as well. We employ a unique pigeon net to eliminate the pigeon problem without harming or killing them." },
          ],
        },
        {
          title: "How We Help You?",
          content: [
            { subtitle: "", text: "Our nets are corrosion and rust resistant, and they may be simply cleaned with soap and water. They don't obstruct your sights or prevent air from freely flowing through the residence. We provide tailored bird net services and fix nets as per the size of window panes, railings, and other factors after a preliminary assessment of the premises." },
            { subtitle: "", text: "Our highly experienced bird control professionals have the knowledge and technology to keep these birds away from loved ones and premises. Our pigeon nets for balconies in Mumbai involve a thorough assessment to determine how the birds are getting into your house and what control measures may be necessary to keep them out." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) Professional Installation", content: "Our expert team provides comprehensive balcony bird netting solutions with quality materials and professional installation." },
        { title: "2) Quality Assurance", content: "We use only the best quality materials and provide warranty on all our installations." },
      ],
    },
    "society-bird-netting": {
      title: "Society Bird Netting",
      images: [
        { id: 21, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3TFG75RZMS4AfWbDFGHajDFWr0PxRP_5NoA&s" },
        { id: 22, src: "https://5.imimg.com/data5/SELLER/Default/2022/12/VS/PD/ZF/52549249/society-bird-netting-500x500.jpeg" },
        { id: 23, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF9pqczE-u0MVSAcy9mP7tqekdSqdXxwh4Q&s" },
        { id: 24, src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A3QlG6w5OpiZoMPz/duct-area-nets-YBgjGOMnn8UVEZeB.jpg" },
      ],
      specifications: [
        "The net is made of polyethylene, which is durable, strong and weather resistant.",
        "The net is resistant to attack by insects, bacteria and fungi.",
        "The net is UV light stabilized (500 Kly) for better durability. Also it is heat treated to prevent knot spillage.",
        "Softening point of the net = 120°C | Melting point > 130°C",
        "Sizes available - 25mm / 35mm / 50mm square shapes",
        "Supported SS 304 Wire Rope. (To create a strong border to wall periphery)",
      ],
      applications: ["Ducts", "Common Areas", "Balconies", "Windows"],
      whatIsTitle: "What is Bird Netting?",
      whatIsContent: "Birds are another wonderful creature created by the Almighty. Their presence makes an environment worth living in but at the right places or else these beautiful creatures can be the cause of many diseases for humans. We are there to help people to take appropriate precautions as a leading provider for society bird netting in Mumbai to avoid mishappenings for tension-free living. Bird netting is a form of bird pest control that prevents birds from entering the residential areas or places that need to be prevented from birds pecking, nesting, and rooting.",
      additionalSections: [
        {
          title: "Who Are We?",
          content: [
            { subtitle: "", text: "We at Bird Net India make sure our customers are given the best solutions for securing their infrastructures without harming the birds by providing Bird Netting services in the societies and industries across Mumbai." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) Customized Solutions", content: "We have experts who will give you simple and long-lasting solutions as per your requirements." },
        { title: "2) Comprehensive Quality Policy", content: "We believe quality comes first in our every work. The materials used are of high quality to give you the best experience of our service." },
        { title: "3) Belief in Customer Satisfaction", content: "We get immense pleasure when we receive satisfactory feedback from our customers. We promise to deliver with full honesty and sincerity our service to our customers to build long-term relationships." },
        { title: "4) Experienced People in the Industry", content: "We take pride in saying that we provide the best quality service and this trust comes from our expert team who comprehend the problems, research, make strategies and give the best solutions to deliver our services." },
      ],
    },
    "industrial-bird-netting": {
      title: "Industrial Bird Netting",
      images: [
        { id: 9, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjxlOy1GEloNpOlzvutyGm2pipzTAD9TNiZGjHC5c9IF64sWSC8Txv88V7sPLfmT_9ImvmYHY" },
        { id: 10, src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUbcFicKmIIAE0uPWg8mOx8k4OJGmXcz_tfFfwctArtuSvgi1UBD-m73BWr3IzmWj_qPZmZJzc" },
        { id: 11, src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNN0uat4ruOWeCVDgVQt1UwuEAY_Wtkp5t6uA3FIwgno4Sah3dwOR2rw_hMUbkzdOE7cPrYvHK" },
        { id: 12, src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCOC3_8CEeM36_YxdcXrFe-DInxvuUFxMbmVoNHNhZmYkImf8tEmSMzKJ5G_axjxuUBdYMfVlp" },
      ],
      specifications: [
        "The net is made of polyethylene, which is durable, strong and weather resistant.",
        "The net is resistant to attack by insects, bacteria and fungi.",
        "The net is UV light stabilized (500 Kly) for better durability. Also it is heat treated to prevent knot spillage.",
        "Softening point of the net = 120°C | Melting point > 130°C",
        "Sizes available - 25mm / 35mm / 50mm square shapes",
        "Supported SS 304 Wire Rope. (To create a strong border to wall periphery)",
      ],
      applications: ["Ducts", "Louvers", "Shades", "Canopies", "Shutters", "Exhausts"],
      whatIsTitle: "What Is Industrial Bird Netting?",
      whatIsContent: "Birds are often regarded as among the most destructive pests for companies, warehouses, and factories. Bird droppings and illnesses produced by these are one of the primary causes of the finished result infection as well as the destruction of storage facilities and expensive equipment. Industrial Bird Netting in Mumbai is among our highly praised projects that benefit mostly the manufacturing sector of our economy. Bird droppings in your premises serve as a breeding ground for pathogenic germs and fungus.",
      additionalSections: [
        {
          title: "The Types of Bird Netting",
          content: [
            { subtitle: "Several Kinds of Mesh", text: "There are various types of bird netting mesh. Each kind is intended to protect from different types and sizes of birds. For pigeon or bat troubles, use a smaller, finer mesh. Stronger, more aggressive birds require heavier-duty, thicker mesh nets." },
            { subtitle: "Throw Nets or Hanging Nets", text: "If you wish to use bird netting for farming, or a vineyard, use lighter nets that can be tossed or hung over your fields. You'll require hanging nets which may be fixed with cables, hooks, and connections if you want to protect an exterior facade." },
          ],
        },
        {
          title: "Key Benefits of Installing Bird Netting",
          content: [
            { subtitle: "Low Maintenance", text: "It is not difficult to understand how to employ a bird net. Bird netting is a wonderful option if you want a remedy that you can place up and forget about. Only single maintenance it will ever require is a re-adjustment following severe weather." },
            { subtitle: "Flexible", text: "Industrial bird netting in Mumbai works just how you expect it to. There are no significant drawbacks with the option to adjust the size, height, function, and implementation." },
            { subtitle: "Affordable", text: "A netting method is a low-cost solution to keep birds away from your premises. It is inexpensive, simple to install, simple to maintain, efficient, and long-lasting." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) Industrial Expertise", content: "We specialize in large-scale industrial bird netting installations for warehouses, factories, and commercial buildings." },
        { title: "2) Durable Solutions", content: "Our industrial-grade nets are designed to withstand harsh conditions and provide long-term protection." },
      ],
    },
    "bird-spikes": {
      title: "Bird Spikes",
      images: [
        { id: 25, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKwxA5TByuWAUroCM3l2ULF36FaXoBGHtng&s" },
        { id: 26, src: "https://m.media-amazon.com/images/I/61uC0bFtzoL._AC_UF1000,1000_QL80_.jpg" },
        { id: 27, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5cGnDJF-VLQ_GAwY_Uw8HexGxrribAiovQ&s" },
        { id: 28, src: "https://birdspikes.in/media/media/1w_1bqsJ9I.jpg" },
      ],
      specifications: [
        "Spike is made of SS 304 with electroplated polycarbonate base.",
        "Spike height 5 inches.",
        "Width coverage 5 inches.",
        "Stick with Adhesive or screws.",
        "4 years of warranty.",
        "Get installed on wall ledges, AC units, etc.",
        "Can be fixed with adhesive or screw.",
        "Available in SS 304 or fully Polycarbonate material.",
      ],
      applications: ["Building Ledges", "ACs", "Wall Parapets", "Fire Pipes", "Ducts", "Balconies"],
      whatIsTitle: "Why Are Bird Spikes Effective?",
      whatIsContent: "Have you had noisy birds roosting on or near your primary residence? Are you exhausted from washing your vehicle from bird droppings day after day? Is the exterior of your lovely home covered by bird feathers and excrement? When considering bird control alternatives, many people wonder, 'Can bird spikes be helpful in bird control?' The answer is an absolute yes. Bird spikes in Mumbai are efficient bird control measures for a wide range of regions and numerous types of birds.",
      additionalSections: [
        {
          title: "What are the Functions of Bird Spikes?",
          content: [
            { subtitle: "", text: "Bird spikes are used to keep birds away from good roosting places. They feature a slender, flexible bottom having stainless steel spikes emerging from them. Bird spikes are not meant to cause harm to birds. The spikes are blunt, preventing damage to birds and employees who are placing them. However, the spikes are near together, making it difficult for huge birds to land." },
          ],
        },
        {
          title: "The Advantages of Bird Spikes",
          content: [
            { subtitle: "", text: "Adaptable and Flexible • Bird management in a humane way • In moderate bird weight regions, effective against huge birds • Easy Installation • Long-lasting and durable • Deterrents with a low visibility • Spikes that are closely spaced to avoid dirt collection • With curved surfaces, the base is adjustable • For a range of surfaces, it comes in a variety of sizes • When paired with other products, it's a potent combination" },
          ],
        },
        {
          title: "Best Places to Use Bird Spikes",
          content: [
            { subtitle: "", text: "Bird spikes can be used in a range of different medium-pressure places where large birds gather. They work well as a barrier on several high surfaces where birds assemble including: Window sills, Rooflines, Wall parapets, Pipelines, and Chimneys." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) Humane Solution", content: "Bird spikes are one of the most compassionate techniques to keep exotic or vagrant birds from nestling. They may be uncomfortable for the birds, but they are never damaged or hazardous." },
        { title: "2) Professional Installation", content: "Our team ensures proper installation for maximum effectiveness and durability." },
      ],
    },
    "anti-bird-nets": {
      title: "Anti Bird Nets",
      images: [
        { id: 17, src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT0bAQ8U63CQ7BOUCrLRtC-swkoBt72Ixvk4UoiKRtEgrmh1EmD4gnbc4rcMtBH6PYNVxV_kx16" },
        { id: 18, src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5QfStKwUN4HfSCuWa81rMyc6337irrdXUgIoKeZS8fPi28YblMHK_O9mtC4gIs3geJ4YdGIhT" },
        { id: 19, src: "https://masteradmin.kushaldeveloper.com/Media/ProductImages/anti-bird-net-installation-for-balconies-and-halls-durable-nets-for-bird-free-spacesoxz6.jpeg" },
        { id: 20, src: "https://images.jdmagicbox.com/quickquotes/images_main/6mm-black-balcony-anti-bird-net-2211542442-8e7iji9v.jpg" },
      ],
      specifications: [
        "High-quality polyethylene material for maximum durability.",
        "Resistant to insects, bacteria, and fungi.",
        "UV light stabilized (500 Kly) for better durability.",
        "Heat treated to prevent knot spillage.",
        "Softening point = 120°C | Melting point > 130°C",
        "Available in various mesh sizes for different bird types.",
        "Anti-corrosion and anti-rust capabilities.",
      ],
      applications: ["Residential Complexes", "Horticultural Plants", "Businesses", "Institutions", "Gardens"],
      whatIsTitle: "What Are Anti-Bird Nets?",
      whatIsContent: "Flying birds and pigeons cause several issues in our environments, including residential complexes, horticultural plants, businesses, and institutions. We can discover flying species arriving from blowers and a wonderful spot to build up channels along the pipeline. We work hard to develop incredibly effective anti-bird nets in Mumbai that are a continual response to the threat that these flying creatures or pigeons bring without damaging or punishing them.",
      additionalSections: [
        {
          title: "Anti-Bird Safety Net Features",
          content: [
            { subtitle: "", text: "Birds such as crows and pigeons have become a serious concern in most cities and towns around the globe, causing problems for residences, industrial estates, and other structures. They get instant access from open piping vents and find better habitat zones on the pipelines and ramparts within the duct." },
            { subtitle: "", text: "We provide a diverse range of Bird Protection Nets in a variety of aesthetic appearances, forms, patterns, and colors, all of which are carefully designed to eliminate the threat posed by birds without harming or killing them." },
          ],
        },
        {
          title: "Characteristics of Our Bird Protection Nets",
          content: [
            { subtitle: "", text: "• Have a prolonged lifespan and are incredibly sturdy and tough • Install, repair, and remove them with ease • They are incredibly transparent and do not obstruct the passage of air or light • Are dust-free and corrosive-free • Energy absorption and UV stabilization are making easier • Anti-corrosion and anti-rust capabilities • Protects against fire and water in a sturdy and sound manner" },
          ],
        },
        {
          title: "How Anti-Bird Netting Reduces Health Risks",
          content: [
            { subtitle: "", text: "Birds play an important part in the food chain, but they may also pose a major health danger. Pests, nests, and bird droppings can cause harm to your garden, and possessions, as well as carry disease. Just a small bite of the fruit can leave it susceptible, causing it to transmit the disease to other fruits. The easiest way to avoid this health hazard is to install bird netting." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) How We Make a Difference", content: "We provide safety nets that are both robust and efficient. Safety netting and fall prevention devices are also custom-engineered. We manufacture trustworthy, long-lasting safety polyester netting in any size or form for any sort of construction project." },
        { title: "2) Our Specialization", content: "Large buildings with nice balconies may be found everywhere in urban centers. Anti-bird nets in Mumbai are available, so we may cover the balcony and airflow areas with nets. These bird nets are available at a reasonable price, and we have a team of experts that can fix them." },
      ],
    },
    "invisible-grill": {
      title: "Invisible Grill in Mumbai",
      images: [
        { id: 5, src: "https://5.imimg.com/data5/SELLER/Default/2022/5/CU/QZ/MA/9376581/stainless-steel-invisible-grill.jpg" },
        { id: 6, src: "https://jindalhanger.com/wp-content/uploads/2024/12/Garden-Invisible-Grills.png" },
        { id: 7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2lScoyzQkTcva0aXOjltQ47O7J-kz01J3A&s" },
        { id: 8, src: "https://mspace.in/wp-content/uploads/2025/04/invisible-grill-500x500-1.webp" },
      ],
      specifications: [
        "Anti-rust construction",
        "Unblocked view",
        "Complete safety",
        "Anti-bird net functionality",
        "No maintenance required",
        "Allowed in all building premises",
        "Aluminium channel: white or grey color",
        "SS rope Wire: 3mm or 2.5mm",
        "Dimensions: Any size",
        "Gaps: 4, 3, 2 inch options",
      ],
      applications: ["Balconies", "Terraces", "Rooftop Patios", "Stairwells", "Office Partitioning", "Large Gardens"],
      whatIsTitle: "What Is Invisible Grill?",
      whatIsContent: "The invisible grill is a cutting-edge Stainless steel wire rope system that protects your family, especially youngsters, while still maintaining the aesthetics of your home. Invisible grills are the finest and most cost-effective option to keep your balcony safe and protected from falling objects. Invisible grills are the ideal way to prevent young children or pets from falling and keep them safe while they access the balcony.",
      additionalSections: [
        {
          title: "Compelling Reasons to Use Invisible Grill",
          content: [
            { subtitle: "Stunning and Trendy", text: "An invisible grill allows you to safely admire the scenery; the grill is so thin and robust that it is nearly undetectable and has no effect on the general aesthetic of your apartment." },
            { subtitle: "Durability or Life Span", text: "The stainless steel wire used to make the invisible grill is of marine quality. It is resistant to all types of weather. The channels are composed of aluminum, which is naturally rust-free, allowing for long-term use." },
            { subtitle: "A Bird Repellent", text: "The distance amongst wires is set to a minimum of 2 inches, preventing birds from taking over the entire premises and nesting. As a result, your home will be safe and clean." },
            { subtitle: "Easy Installation", text: "The invisible grill is made up of two major components: an aluminum track and marine-grade filaments. Whatever the type of surface, the invisible grill blends in seamlessly. Once installed, there is no further maintenance required." },
            { subtitle: "Elegant, Safe, and Reliable", text: "The invisible grill is safe and comfortable for family members, allowing them to enjoy the balcony environment without anxiety. This is highly recommended for residents of top of buildings. In the event of its use in schools, it is also child-friendly due to its soft texture." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) Premium Quality", content: "We use marine-grade stainless steel wire and high-quality aluminum channels for maximum durability and safety." },
        { title: "2) Professional Installation", content: "Our expert team ensures seamless installation that blends perfectly with your home's aesthetics." },
      ],
    },
    "pet-safety-nets": {
      title: "Pet Safety Nets",
      images: [
        { id: 29, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rLQ1OOqwOjCQ5HCB5qDTNs3KA6NL3gu2UA&s" },
        { id: 30, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIBDLI7-qSLdtOv2QaZtwFVEfAKF9S_jJsQ&s" },
        { id: 31, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2v30HgHl-kEY-wAeGHxcm3omf6yII9kKEQ&s" },
        { id: 32, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTt8XIGYHI3CUmgjRegHyKcMz-h88LdJkjA&s" },
      ],
      specifications: [
        "HDPE weight bearable material",
        "Fixed with all types of heavy duty anchors and wire rope",
        "Available in HDPE and Stainless steel 304 or 316 grade wire rope",
        "Invisible grill with 1 inch gap between wires for pets",
        "Provides safety for both humans and pets",
        "Durable and long-lasting construction",
      ],
      applications: ["Windows", "Balconies", "Ledges", "Open Areas", "Terraces"],
      whatIsTitle: "What Are Pet Safety Nets?",
      whatIsContent: "We at Bird Net India provide all types of bird netting and bird spike products along with safety nets for your loved pets. Our pet safety nets are HDPE weight bearable and fixed with all types of heavy duty anchors and wire rope. Pets often have the habit of sitting on window edges or ledges - it is risky for them if they fall from such heights.",
      additionalSections: [
        {
          title: "Protection for All Pets",
          content: [
            { subtitle: "", text: "Pets like dogs, cats and birds too can be protected under this product. It is our aim to provide safety to all living beings from humans to animals." },
            { subtitle: "", text: "Safety nets solutions come in different varieties of material. Some come in HDPE and some are Stainless steel 304 or 316 grade wire rope." },
            { subtitle: "", text: "Invisible grill with 1 inch gap between the wires can be used for pets like dogs and cats. It provides safety for both humans and pets too." },
          ],
        },
        {
          title: "Our Leading Services",
          content: [
            { subtitle: "", text: "Pet safety net in Thane is our leading service. We have already carried out installation in many residential flats in Thane and Mumbai suburb area." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) Comprehensive Protection", content: "Our pet safety nets protect dogs, cats, and birds from falling while allowing them to enjoy fresh air and views." },
        { title: "2) Quality Materials", content: "We use heavy-duty HDPE and stainless steel materials that can withstand the weight and activity of pets." },
      ],
    },
    "mosquito-nets": {
      title: "Mosquito Nets",
      images: [
        { id: 33, src: "https://5.imimg.com/data5/ANDROID/Default/2022/7/ZK/HN/SL/16720773/product-jpeg.jpg" },
        { id: 34, src: "https://cpimg.tistatic.com/6306065/b/1/balcony-mosquito-net.jpg" },
        { id: 35, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo7nZUg39SzOb9Xuw9aul4Slegsev5Rifx7g&s" },
        { id: 36, src: "https://i5.walmartimages.com/seo/DONGPAI-Mosquito-Net-for-Patio-Garden-Mesh-Screen-Barrier-Super-Dense-Patio-Netting-for-Balcony-Porch-Protecting-DIY-Size-Adjustable-1-Panel_b8fc32a3-811f-4991-95ce-eb334a444525.dd3472e95ab81126c1006c0538567d62.jpeg" },
      ],
      specifications: [
        "Sleek design that blends with home décor",
        "Ensures air circulation and natural light entry",
        "Easy to operate",
        "Low-maintenance",
        "Made of special polyester mesh",
        "Provides maximum safety and durability",
        "Anti-dust and weatherproof",
        "Strong aluminum frame",
        "Safe for children",
      ],
      applications: ["Sliding Windows", "Doors", "Balconies", "Ventilation Areas"],
      whatIsTitle: "What Are Mosquito Nets?",
      whatIsContent: "The beautiful view of the greenery and the hues of nature outside your window is a visual feast. However, if the windows are kept open for a long time there are chances that bugs like mosquitos, flies, bees, and other insects can enter your house and create havoc. Mosquitos and other insects are carriers of many diseases like Chikungunya, Dengue, Zika virus, Malaria, Yellow Fever, Encephalitis, Filariasis, etc. In such a scenario, installing a protective shield is necessary.",
      additionalSections: [
        {
          title: "Sliding Mosquito Nets",
          content: [
            { subtitle: "", text: "A sliding mosquito net for sliding windows is a smart solution to ward off mosquitoes and other bugs. Unlike the regular net that hangs over the doorway, a sliding mosquito net for the sliding window is customized as per the size of your window." },
            { subtitle: "", text: "Our mosquito mesh is made from durable and strong wire. A sliding mosquito net is very easy to put up and down. We customize them as per the color of your home and the size of your windows." },
            { subtitle: "", text: "We design very sleek-looking mosquito nets and merge them with the décor of your home. Our mosquito nets allow a constant flow of air and create a pleasant atmosphere in your home." },
          ],
        },
        {
          title: "Quality Standards",
          content: [
            { subtitle: "", text: "We follow strict quality standards. While designing the mosquito net for windows Mumbai we ensure the durability and quality of our mesh. We do thorough research and development while designing our mosquito nets and keep in mind the requirement and expectations of our customers." },
            { subtitle: "", text: "Our sliding mosquito nets are sleek and unobtrusive and made with cutting-edge design. They are made up of anti-dust and rust-free wire. The sliding mosquito nets are aesthetically pleasing. They are rust-resistant and have high tensile strength." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) Innovative Design", content: "We provide the most innovative and smart mosquito netting solutions with sleek designs that complement your home." },
        { title: "2) Effective Protection", content: "Our mosquito nets act like a protective shield to ward off all mosquitos and other bugs, keeping you safe from infestations and diseases." },
      ],
    },
    "sports-turf-nets": {
      title: "Sports and Turf Nets",
      images: [
        { id: 37, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8E0tAfpwo37pnWTFqoKEZqCU3bzxoyFlX4w&s" },
        { id: 38, src: "https://5.imimg.com/data5/SELLER/Default/2024/9/452824232/MR/WZ/EH/231456969/35mm-garware-sports-turf-net.jpeg" },
        { id: 39, src: "https://m.media-amazon.com/images/I/519gxF3vjyL.jpg" },
        { id: 40, src: "https://5.imimg.com/data5/SELLER/Default/2020/10/WK/QP/CY/26941351/images-500x500.jpeg" },
      ],
      specifications: [
        "Made from strong, weather-resistant materials such as polyethylene or nylon",
        "Built to endure harsh outdoor conditions",
        "Resistant to wear and tear, UV damage, and extreme weather",
        "Customizable to suit various sports needs",
        "Available in different sizes and styles",
        "Quick installation and simple upkeep",
        "Low-maintenance construction",
      ],
      applications: ["Football Fields", "Tennis Courts", "Baseball Fields", "Cricket Grounds", "Local Parks", "Professional Arenas"],
      whatIsTitle: "What Are Sports and Turf Nets?",
      whatIsContent: "Sports and turf nets are essential for ensuring safety and enhancing performance in a variety of athletic environments. From football fields to tennis courts, these nets provide reliable barriers to contain balls and protect spectators, players, and equipment. Designed for durability and performance, they offer long-lasting solutions for both professional and recreational settings. We have customized range in Sports Nets in Mumbai.",
      additionalSections: [],
      whyChooseReasons: [
        { title: "1) Safety First", content: "Sports nets serve as protective barriers, keeping balls contained within the playing field and preventing them from injuring players, coaches, or spectators. They are an essential safety feature in any active sports setting." },
        { title: "2) Durability & Weather Resistance", content: "Made from strong, weather-resistant materials such as polyethylene or nylon, sports and turf nets are built to endure harsh outdoor conditions. They resist wear and tear, UV damage, and extreme weather, ensuring they stand the test of time season after season." },
        { title: "3) Versatility", content: "Whether it's for football, baseball, tennis, or any other sport, these nets are customizable to suit various needs. They come in different sizes and styles, making them perfect for any sports facility, from local parks to professional arenas." },
        { title: "4) Easy Installation & Maintenance", content: "Turf nets are designed for quick installation and simple upkeep. With their low-maintenance construction, these nets can be easily cleaned and repaired, offering a cost-effective solution for ongoing use." },
        { title: "5) Improved Game Play", content: "With the right netting in place, players can focus on the game without worrying about balls going out of bounds, ensuring smooth and uninterrupted play." },
      ],
    },
    "aluminium-sliding-window": {
      title: "Aluminium Sliding Mosquito Nets",
      images: [
        { id: 41, src: "https://images.jdmagicbox.com/quickquotes/images_main/sliding-pleated-mosquito-net-window-2189748571-lzchdrek.jpg" },
        { id: 42, src: "https://5.imimg.com/data5/SELLER/Default/2024/7/432027244/UV/BO/VR/224574122/mosquito-net-sliding-window.png" },
        { id: 43, src: "https://clearshield.in/wp-content/uploads/2024/10/pleated-mosquito-net-door-768x768.png" },
        { id: 44, src: "https://m.media-amazon.com/images/I/410knn5KoaL._AC_UF1000,1000_QL80_.jpg" },
      ],
      specifications: [
        "High-quality aluminium frames for durability",
        "Corrosion-resistant construction",
        "Smooth-gliding sliding mechanism",
        "Available in various sizes, colors, and designs",
        "Fully customizable to fit any opening",
        "Sleek, modern design",
        "Easy to remove and wash",
        "Enhanced air circulation while keeping pests out",
      ],
      applications: ["Windows", "Doors", "Balcony Openings", "Patio Doors", "Large Openings"],
      whatIsTitle: "Why Choose Aluminium Sliding Mosquito Nets?",
      whatIsContent: "Mosquitoes are not only a nuisance but also a health hazard, as they can transmit diseases like malaria, dengue, and Zika virus. To ensure a safe, comfortable living environment, installing Aluminium Sliding Mosquito Nets is a smart and effective solution. These nets provide an invisible barrier against mosquitoes, insects, and other pests, allowing fresh air and natural light into your home without compromising your protection.",
      additionalSections: [
        {
          title: "Why Invest in Aluminium Sliding Mosquito Nets?",
          content: [
            { subtitle: "", text: "Protecting your family and pets from mosquitoes has never been more important. Aluminium Sliding Mosquito Nets offer a practical, long-lasting, and eco-friendly solution that enhances both your home's safety and comfort. With easy installation, durability, and effective pest control, these nets are an excellent investment for any home. Say goodbye to mosquitoes and enjoy a peaceful, pest-free environment with our high-quality aluminium sliding mosquito nets." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) Durability and Strength", content: "Aluminium is renowned for its strength and longevity. Our sliding mosquito nets are crafted from high-quality aluminium frames, making them highly durable, corrosion-resistant, and able to withstand the wear and tear of daily use." },
        { title: "2) Space-Saving Design", content: "Unlike traditional fixed mosquito nets, our sliding design is perfect for homes with limited space. The smooth-gliding mechanism allows the net to open and close effortlessly, providing a flexible solution for doors, windows, and even large balcony openings." },
        { title: "3) Customizable and Versatile", content: "Our Aluminium Sliding Mosquito Nets are available in various sizes, colors, and designs to suit your specific needs and aesthetic preferences. The sleek, modern design complements the architecture of your home, blending seamlessly with existing décor." },
        { title: "4) Easy Maintenance", content: "Cleaning and maintaining aluminium mosquito nets is a breeze. The nets can be easily removed and washed, and the aluminium frames can be wiped down with a damp cloth to keep them looking fresh." },
        { title: "5) Enhanced Air Circulation", content: "One of the key benefits of aluminium sliding mosquito nets is the ability to let in natural ventilation while keeping pests out. This ensures your home remains well-ventilated and cool, even during warmer months." },
      ],
    },
    "safety-construction-nets": {
      title: "Safety & Construction Nets",
      images: [
        { id: 45, src: "https://5.imimg.com/data5/QS/TW/ZQ/SELLER-3606276/scaffolding-net-for-construction-sites-500x500.jpg" },
        { id: 46, src: "https://5.imimg.com/data5/OT/XT/MY-3006425/construction-safety-nets-500x500.jpg" },
        { id: 47, src: "https://5.imimg.com/data5/SELLER/Default/2021/12/CI/ZJ/WJ/2077768/fall-protection-construction-safety-net.JPG" },
        { id: 48, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxrYkxdRIJ6_sYDoRC3wwoNlnXxshkrgXjA&s" },
      ],
      specifications: [
        "Made from high-quality, weather-resistant materials such as polypropylene or nylon",
        "Designed to withstand heavy loads and harsh environmental conditions",
        "Available in customized sizes and quality",
        "All types of PP nets, PP ropes can be customized with its thickness",
        "Simple to install and adjustable to fit different structures",
        "Minimal maintenance required",
      ],
      applications: ["Scaffolding", "Building Facades", "Temporary Structures", "Construction Sites", "High-Rise Buildings"],
      whatIsTitle: "What Are Safety & Construction Nets?",
      whatIsContent: "Safety and construction nets are essential for ensuring the safety of workers, the public, and the overall integrity of construction sites. Designed to provide reliable protection against falling debris, tools, and materials, these nets are a must-have for any construction project. With their robust construction and versatile applications, they help minimize risks and enhance the security of your worksite. We have customized range in Safety nets in Mumbai.",
      additionalSections: [
        {
          title: "Customization Options",
          content: [
            { subtitle: "", text: "We provide safety nets in customized sizes and customized quality too. All types of PP nets, PP ropes can be customized with its thickness." },
          ],
        },
      ],
      whyChooseReasons: [
        { title: "1) Worker Protection", content: "Safety nets act as a protective barrier, preventing workers from falling from heights and reducing the risk of serious injuries. They catch falling objects, providing an added layer of safety for everyone on-site." },
        { title: "2) Compliance with Safety Regulations", content: "Construction sites must adhere to strict safety standards to ensure the well-being of workers. Using safety nets helps meet these regulations and keeps your site compliant with occupational health and safety guidelines." },
        { title: "3) Durable & Reliable", content: "Made from high-quality, weather-resistant materials such as polypropylene or nylon, safety nets are designed to withstand heavy loads and harsh environmental conditions. Whether it's high winds or rain, these nets continue to perform consistently." },
        { title: "4) Versatility", content: "Safety nets can be used in a variety of construction settings, including scaffolding, building facades, and temporary structures. They can be customized to fit any project requirement, providing tailored protection for every job." },
        { title: "5) Easy Installation & Maintenance", content: "These nets are simple to install and can be adjusted to fit different structures. They require minimal maintenance, making them a practical solution for long-term use on construction sites." },
      ],
    },
  };

  const currentService = services.find((s) => s.id === serviceId);
  const serviceTitle = currentService?.title || "Service";
  const data = serviceData[serviceId] || {
    title: serviceTitle,
    specifications: ["High-quality materials used", "Weather resistant construction", "UV stabilized for durability", "Custom sizes available", "Professional installation", "4-5 years warranty"],
    applications: ["Residential", "Commercial", "Industrial"],
    whatIsTitle: `What is ${serviceTitle}?`,
    whatIsContent: "We provide high-quality netting and safety solutions customized to your specific needs. Our professional team ensures proper installation and long-lasting protection for your property.",
    additionalSections: [],
    whyChooseReasons: [
      { title: "1) Professional Services", content: "Our expert team provides comprehensive solutions with quality materials and professional installation." },
      { title: "2) Quality Assurance", content: "We use only the best quality materials and provide warranty on all our installations." },
    ],
  };

  const relatedSearches = ["Andheri", "Dadar", "Ghatkopar", "Jogeshwari", "Mulund", "Vashi"];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will contact you soon.");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-60 xl:w-64 shrink-0">
              {/* Services Menu */}
              <div className="bg-blue-700 rounded-lg overflow-hidden mb-4 sm:mb-6">
                <div className="bg-blue-800 px-3 sm:px-4 py-2.5 sm:py-3">
                  <h2 className="text-base sm:text-lg font-bold text-white">Our Services</h2>
                </div>
                <nav className="py-1 max-h-48 sm:max-h-64 lg:max-h-none overflow-y-auto lg:overflow-visible">
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      to={`/service/${s.id}`}
                      className={`flex items-center px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm hover:bg-blue-600 transition-colors border-b border-blue-600 text-white ${serviceId === s.id ? "bg-blue-900 font-semibold" : ""}`}
                    >
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 shrink-0 text-white" />
                      <span className="text-white line-clamp-1">{s.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Enquiry Form */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Enquire Now</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <input type="text" placeholder="Enter Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" required />
                  <input type="email" placeholder="Enter Email ID" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" required />
                  <input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base" required />
                  <textarea placeholder="Message" rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none" />
                  <button type="submit" className="w-full bg-blue-600 text-white py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors">Submit</button>
                </form>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* Service Header */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{data.title}</h2>
                {data.images && data.images.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {data.images.map((image) => (
                        <div key={image.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                          <img src={image.src} alt={`${data.title} ${image.id}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                        </div>
                      ))}
                    </div>
                )}
                {(!data.images || data.images.length === 0) && (
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400" alt={data.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" alt={data.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-orange-500 mb-3 sm:mb-4">Specification</h3>
                    <ol className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
                      {data.specifications.map((spec, index) => (
                        <li key={index} className="flex">
                          <span className="font-semibold mr-2">{index + 1}.</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-orange-500 mb-3 sm:mb-4">Application</h3>
                    <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                      {data.applications.map((app, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* What Is Section */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">{data.whatIsTitle}</h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{data.whatIsContent}</p>
              </div>

              {/* Additional Sections */}
              {data.additionalSections && data.additionalSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-4 sm:mb-6">{section.title}</h2>
                  <div className="space-y-4 sm:space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {item.subtitle && <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{item.subtitle}</h3>}
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Why Choose Us */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-4 sm:mb-6">Why Choose Us?</h2>
                <div className="space-y-4 sm:space-y-6">
                  {data.whyChooseReasons.map((reason, index) => (
                    <div key={index}>
                      <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{reason.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{reason.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Section */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/j7k5dJgpBsQ" title="Installation Process" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <p className="text-center text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm">Pigeon Net Installation process - Stainless Steel 304 Wiring</p>
              </div>

              {/* Related Search */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 lg:p-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-6">Related Search</h2>
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                  {relatedSearches.map((search, index) => (
                    <span key={index} className="whitespace-nowrap">
                      <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline text-xs sm:text-sm">Bird Nettings in {search}</a>
                      {index < relatedSearches.length - 1 && <span className="text-gray-400 mx-1">|</span>}
                    </span>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;