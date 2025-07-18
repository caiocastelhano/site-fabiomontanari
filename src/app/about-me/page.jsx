export const metadata = {
  title: "About Me | Fabio Montanari",
  description: "Explore the multicultural journey of screenwriter and director Fabio Montanari—from Brazil to Canada, across genres, borders, and platforms.",
};

import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutContent from './AboutContent';

export default function AboutMePage() {
  return (
    <>
      <Header />
      <AboutContent />
      <Footer />
    </>
  );
}
