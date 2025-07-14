import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutContent from './AboutContent';

export default function AboutMePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <AboutContent />
      </main>

      <Footer />
    </>
  );
}
