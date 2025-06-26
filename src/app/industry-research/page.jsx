import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function IndustryResearchPage() {
    return (
    <>
      <Header />

      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Industry Engagement & Research</h1>
        </div>
      </section>
      
      <Footer />
    </>
  );
}