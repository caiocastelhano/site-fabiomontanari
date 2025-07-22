'use client';

import { useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './page.module.css';
import HeroSection from './components/HeroSection';
import HeroText from './components/HeroText';
import { dictionary } from '../lib/dictionary';
import ProjectsSection from './components/ProjectsSection';
import TeachingSection from './components/TeachingSection';
import ConsultingSection from './components/ConsultingSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const { language } = useLanguage();

  const { paragraph } = dictionary.hero[language] || dictionary.hero.en;

  return (
    <div className={styles.page}>
      <Header />
      <HeroSection language={language} />
      <HeroText paragraph={paragraph} />
      <ProjectsSection language={language} />
      <TeachingSection language={language} />
      <ConsultingSection language={language} />
      <AboutSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
}
