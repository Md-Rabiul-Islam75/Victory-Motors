import TopBar from "@/components/landing/TopBar";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FloatingActions from "@/components/landing/FloatingActions";
import { landingContent } from "@/data/landing";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const c = landingContent;
  return (
    <div className="relative">
      <div className="absolute top-0 inset-x-0 z-50">
        <TopBar site={c.site} />
      </div>
      <Navbar site={c.site} courses={c.courses} />
      {children}
      <Footer site={c.site} courses={c.courses} />
      <FloatingActions site={c.site} />
    </div>
  );
}
