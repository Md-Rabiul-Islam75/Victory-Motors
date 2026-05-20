import HeroBanner from "@/components/landing/HeroBanner";
import CourseFeatures from "@/components/landing/CourseFeatures";
import FeaturedShowcase from "@/components/landing/FeaturedShowcase";
import AboutUs from "@/components/landing/AboutUs";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Testimonials from "@/components/landing/Testimonials";
import Instructors from "@/components/landing/Instructors";
import Faq from "@/components/landing/Faq";
import { landingContent } from "@/data/landing";

export default function HomePage() {
  const c = landingContent;

  return (
    <main className="bg-white">
      <HeroBanner slides={c.hero} />
      <CourseFeatures courses={c.courses} />
      <FeaturedShowcase showcase={c.featuredShowcase} />
      <AboutUs about={c.about} />
      <WhyChooseUs data={c.whyChooseUs} />
      <Testimonials items={c.testimonials} />
      <Instructors items={c.instructors} />
      <Faq items={c.faqs} />
    </main>
  );
}
