import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./page.module.css";
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import TeachingSection from './components/TeachingSection';
import ConsultingSection from './components/ConsultingSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TeachingSection />
      <ConsultingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
