import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ProjectGallery } from "./components/ProjectGallery";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutSection />
      <ProjectGallery />
      <ContactSection />
      <Footer />
    </div>
  );
}
