import { LandingContent } from "@/types/Landing";

export const landingContent: LandingContent = {
  site: {
    name: "Victory Motors",
    tagline: "Drive Your Career Forward",
    email: "info@victorymotors.com",
    phone: "+8801XXX-XXXXXX",
    hours: "Saturday – Thursday: 9 AM to 9 PM",
    address: "House 12, Road 5, Dhanmondi, Dhaka-1209, Bangladesh",
    logo: "/images/victory-motors-logo.jpeg",
    socials: {
      facebook: "https://facebook.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
      youtube: "https://youtube.com/",
      whatsapp: "https://wa.me/8801000000000",
    },
  },
  hero: [
    {
      id: "slide-1",
      title: "Welcome to",
      highlight: "Victory Motors",
      subtitle: "Bangladesh's Premier Automotive Training Institute",
      description:
        "Build your career in the automobile industry with hands-on training, industry-grade workshops and certified mentors.",
      ctaLabel: "Explore Courses",
      ctaHref: "#courses",
      image: "/images/banner.png",
    },
  ],
  courses: [
    {
      id: "course-1",
      slug: "hybrid-and-electric-vehicle-engineering",
      title: "Hybrid & Electric Vehicle Engineering",
      duration: "3 Months",
      level: "Advanced",
      category: "Industrial Training",
      price: "Tk 25,000",
      totalDays: "Total 60 Days",
      mode: "Offline Course",
      image: "/images/course1.png",
      description:
        "Master the fundamentals and diagnostics of EV and hybrid powertrains used in modern vehicles. This course covers the complete EV ecosystem — battery management, motor controllers, regenerative braking, charging systems and the modern diagnostic tools that the industry depends on.",
      outline: [
        "Introduction to Hybrid & Electric Vehicles",
        "Battery Technology & BMS (Battery Management System)",
        "Electric Motors and Motor Controllers",
        "Power Electronics & Inverters",
        "Regenerative Braking System",
        "EV Charging Stations & Standards",
        "Hybrid Powertrain Architecture",
        "High-Voltage Safety & PPE",
        "EV Diagnostic Tools & Live Data Analysis",
        "Fault Code Reading & Live Calibration",
      ],
      eligibility:
        "We are offering this advanced programme to candidates with a Diploma in Power, Automobile or Mechanical Engineering, or those who have completed our Advanced Automobile Engineering course.",
      href: "/courses/hybrid-and-electric-vehicle-engineering",
    },
    {
      id: "course-2",
      slug: "advanced-automobile-engineering",
      title: "Advanced Automobile Engineering",
      duration: "3 Months",
      level: "Advanced",
      category: "Industrial Training",
      price: "Tk 22,000",
      totalDays: "Total 60 Days",
      mode: "Offline Course",
      image: "/images/course2.png",
      description:
        "A deep-dive into engine management, ECU diagnostics, and modern car electronics. This is the course every workshop owner and dealership service engineer needs — it bridges the gap between the conventional automobile and today's computer-controlled vehicles.",
      outline: [
        "History & Classification of Automobiles",
        "Vehicle Chassis, Body & Engine Technology",
        "Basic Electricity & Starting/Cooling/Lubricating Systems",
        "Ignition System & Fuel System (EFI / CRDI)",
        "Emission Control (PCV, EGR, Catalytic Converter, DPF, SCR)",
        "Brake Systems (ABS, EBD, ESP, HHC, HDC, FCS)",
        "Suspension, Steering & Transmission (MT, AMT, AT, DCT, CVT)",
        "Body Control Module, CAN Bus & Fault Code Analysis",
        "Live Data Analysis, Calibration & Coding",
        "ECU Programming and Injector Coding",
      ],
      eligibility:
        "Open to candidates with SSC/HSC and a strong passion for the automobile industry. Diploma holders in Automobile / Mechanical / Power Engineering are preferred.",
      href: "/courses/advanced-automobile-engineering",
    },
    {
      id: "course-3",
      slug: "basic-automobile-engineering",
      title: "Basic Automobile Engineering",
      duration: "3 Months",
      level: "Beginner",
      category: "Foundation Training",
      price: "Tk 15,000",
      totalDays: "Total 48 Days",
      mode: "Offline Course",
      image: "/images/course3.png",
      description:
        "Start from the basics — engine, transmission, suspension and electrical systems. The perfect foundation for anyone wanting a career in the automobile industry, with no prior experience required.",
      outline: [
        "Introduction to Automobile Engineering",
        "Engine Fundamentals (2-stroke & 4-stroke)",
        "Cooling, Lubrication & Fuel Systems",
        "Transmission & Drive Line",
        "Suspension & Steering Systems",
        "Brake Systems (Conventional & ABS)",
        "Automotive Electrical Basics",
        "Battery, Starter & Charging Systems",
        "Workshop Safety & Tool Handling",
        "Vehicle Inspection & Basic Servicing",
      ],
      eligibility:
        "Open to all candidates with SSC pass and above. No prior automotive experience required.",
      href: "/courses/basic-automobile-engineering",
    },
    {
      id: "course-4",
      slug: "service-advisor-and-inventory-management",
      title: "Service Advisor & Inventory Management",
      duration: "2 Months",
      level: "Professional",
      category: "Industrial Training",
      price: "Tk 18,000",
      totalDays: "Total 40 Days",
      mode: "Offline Course",
      image: "/images/course4.png",
      description:
        "Learn international service process standards, spare-parts handling and inventory control. This course prepares you for service advisor roles at dealerships and large workshops at home and abroad.",
      outline: [
        "Service Advisor Role & Responsibilities",
        "Customer Interaction & Communication Skills",
        "International Service Process Standards",
        "Job Card Writing & Workshop Workflow",
        "Spare Parts Identification & Sourcing",
        "Inventory Management & Stock Control",
        "Service Costing & Estimation",
        "Warranty & Customer Complaint Handling",
        "DMS (Dealer Management System) Basics",
        "Final Quality Check & Vehicle Delivery",
      ],
      eligibility:
        "Open to candidates with HSC/Diploma. Strong communication skills and basic computer literacy required.",
      href: "/courses/service-advisor-and-inventory-management",
    },
  ],
  featuredShowcase: {
    title: "Upcoming Batch",
    subtitle: "Admission Open",
    description:
      "Join our next batch of Advanced Automobile Engineering and learn from veterans with 15+ years in the industry. Limited seats available.",
    image: "/images/banner.png",
    ctaLabel: "Apply Now",
    ctaHref: "#contact",
  },
  about: {
    heading: "About Victory Motors",
    body: "Victory Motors is a leading professional automotive training institute in Bangladesh, dedicated to building skilled manpower for the automobile industry. We combine modern classroom learning with hands-on workshop training, taught by industry veterans and certified engineers — so every graduate is ready for a real-world career on day one.",
    story:
      "Founded in 2026 by a group of engineers who had spent years watching skilled mechanics learn the trade the slow, frustrating way — on the workshop floor, by trial and error. Victory Motors was built to change that. We bring together the best of structured engineering education and the practical, hands-on culture of the workshop, so our graduates start their careers years ahead of where their peers begin.",
    mission:
      "To produce certified, job-ready automotive professionals who can deliver world-class service to vehicle owners across Bangladesh and beyond — using modern diagnostic tools, structured procedures and ethical workmanship.",
    vision:
      "To be the most trusted automotive training institute in South Asia, recognised by manufacturers, dealerships and workshops as the source of the next generation of skilled engineers and technicians.",
    chairman: {
      name: "Engr. Nurul Islam",
      role: "Founder & Chairman",
      message:
        "When I started this institute, my goal was simple — make sure no young person who wants a career in the automobile industry gets stuck because they couldn't find proper training. Today, I am proud that thousands of our graduates are working in workshops, dealerships and service centres across Bangladesh, the Middle East and beyond. To every student joining us — work hard, stay curious, and the workshop floor is yours.",
      avatar: "https://placehold.co/320x320/002A5C/FFFFFF?text=Chairman",
    },
    stats: [
      { id: "stat-1", value: "2500+", label: "Graduates", icon: "graduate" },
      { id: "stat-2", value: "8", label: "Expert Instructors", icon: "instructor" },
      { id: "stat-3", value: "10+", label: "Years in the Market", icon: "clock" },
      { id: "stat-4", value: "150+", label: "Active Students", icon: "students" },
    ],
  },
  whyChooseUs: {
    heading: "Why Choose Victory Motors",
    subheading:
      "We don't just teach — we prepare you for a long, rewarding career in the automotive industry.",
    features: [
      {
        id: "f1",
        title: "Expert Instructors",
        description:
          "Learn from engineers with decades of experience in OEM service centres and workshops.",
        icon: "expert",
      },
      {
        id: "f2",
        title: "Modern Workshop",
        description:
          "Industry-grade diagnostic tools, scanners and live vehicles — practise on the real thing.",
        icon: "system",
      },
      {
        id: "f3",
        title: "Practical Diagnostics",
        description:
          "Every lesson is built around real-world problems you'll face on the workshop floor.",
        icon: "logic",
      },
      {
        id: "f4",
        title: "Recognised Certification",
        description:
          "Earn a certificate trusted by employers across the country and abroad.",
        icon: "physical",
      },
      {
        id: "f5",
        title: "Job Placement Support",
        description:
          "Our placement cell connects top performers with leading automotive companies.",
        icon: "job",
      },
      {
        id: "f6",
        title: "Continuous Learning",
        description:
          "Alumni get lifetime access to new modules, refresher classes and industry updates.",
        icon: "road",
      },
    ],
  },
  testimonials: [
    {
      id: "t1",
      name: "Md. Arif Hossain",
      role: "Service Engineer, Rangs Motors",
      avatar: "https://placehold.co/120x120/002A5C/FFFFFF?text=AH",
      message:
        "Victory Motors gave me the practical edge I needed. Within a month of graduating I was working on real customer vehicles at a top dealership.",
    },
    {
      id: "t2",
      name: "Sanjida Akter",
      role: "Diagnostic Technician",
      avatar: "https://placehold.co/120x120/DC2626/FFFFFF?text=SA",
      message:
        "The instructors here go beyond the syllabus — they teach you how to think like an engineer. Best decision I made for my career.",
    },
    {
      id: "t3",
      name: "Rakib Khan",
      role: "Workshop Owner",
      avatar: "https://placehold.co/120x120/F59E0B/FFFFFF?text=RK",
      message:
        "I send every new hire to Victory Motors. The quality and attitude of their graduates is unmatched in Bangladesh.",
    },
  ],
  instructors: [
    {
      id: "i1",
      name: "Engr. Nurul Islam",
      designation: "Founder & Chief Instructor",
      avatar: "https://placehold.co/240x240/002A5C/FFFFFF?text=NI",
      bio: "20+ years in automotive engineering across OEM and aftermarket. Specialist in engine diagnostics.",
    },
    {
      id: "i2",
      name: "Engr. Tahmid Rahman",
      designation: "Lead — EV & Hybrid",
      avatar: "https://placehold.co/240x240/0F4C81/FFFFFF?text=TR",
      bio: "Hybrid powertrain expert with international training from Toyota Technical Centre.",
    },
    {
      id: "i3",
      name: "Engr. Sakib Ahmed",
      designation: "Senior Instructor",
      avatar: "https://placehold.co/240x240/DC2626/FFFFFF?text=SA",
      bio: "ECU programming and modern electronics specialist. Former lead at a major Korean dealership.",
    },
    {
      id: "i4",
      name: "Engr. Mahmuda Khan",
      designation: "Service Advisor Trainer",
      avatar: "https://placehold.co/240x240/F59E0B/FFFFFF?text=MK",
      bio: "International service process specialist with 12+ years in customer-facing automotive roles.",
    },
  ],
  faqs: [
    {
      id: "q1",
      question: "What is the minimum qualification to enroll?",
      answer:
        "Candidates with SSC/HSC and a passion for the automobile industry can apply for our basic and professional courses. Advanced programmes prefer a diploma in Automobile, Mechanical or Power Engineering.",
    },
    {
      id: "q2",
      question: "Do you offer hands-on training?",
      answer:
        "Yes. Every course is approximately 60% practical — you'll work on live vehicles, real diagnostic scanners and industry-standard tools throughout your training.",
    },
    {
      id: "q3",
      question: "Will I receive a certificate?",
      answer:
        "Absolutely. On successful completion you'll receive a Victory Motors certificate recognised by leading automotive companies in Bangladesh and the Middle East.",
    },
    {
      id: "q4",
      question: "Do you assist with job placement?",
      answer:
        "Yes. Our placement cell actively connects top performers with workshops, dealerships and service centres across Bangladesh and overseas.",
    },
    {
      id: "q5",
      question: "Do you offer offline classes?",
      answer:
        "All our practical sessions are in-person at our Dhaka campus. Selected theory modules are available online for flexibility.",
    },
    {
      id: "q6",
      question: "What documents are required for admission?",
      answer:
        "Passport-size photo, NID/Birth Certificate copy, last academic certificate and the admission form — that's it. Visit our campus or apply online.",
    },
  ],
};
