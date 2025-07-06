import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutContent from './AboutContent';

export default function AboutMePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <h1 className={styles.visuallyHidden}>About Fabio Montanari</h1>
        <AboutContent />
      </main>

      <Footer />
    </>
  );
}
