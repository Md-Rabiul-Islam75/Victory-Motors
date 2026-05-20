export type SiteInfo = {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  hours: string;
  address: string;
  logo: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    whatsapp?: string;
  };
};

export type HeroSlide = {
  id: string;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  duration: string;
  level: string;
  category: string;
  price: string;
  totalDays: string;
  mode: string;
  image: string;
  description: string;
  outline: string[];
  eligibility: string;
  href: string;
};

export type Stat = {
  id: string;
  value: string;
  label: string;
  icon: "graduate" | "instructor" | "clock" | "students";
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: "expert" | "system" | "logic" | "physical" | "road" | "job";
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  message: string;
};

export type Instructor = {
  id: string;
  name: string;
  designation: string;
  avatar: string;
  bio: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type LandingContent = {
  site: SiteInfo;
  hero: HeroSlide[];
  courses: Course[];
  featuredShowcase: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    ctaLabel: string;
    ctaHref: string;
  };
  about: {
    heading: string;
    body: string;
    story: string;
    mission: string;
    vision: string;
    chairman: {
      name: string;
      role: string;
      message: string;
      avatar: string;
    };
    stats: Stat[];
  };
  whyChooseUs: {
    heading: string;
    subheading: string;
    features: Feature[];
  };
  testimonials: Testimonial[];
  instructors: Instructor[];
  faqs: FaqItem[];
};
