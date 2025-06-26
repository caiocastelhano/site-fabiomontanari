import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutMePage() {
  return (
    <>
      <Header />
      
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Me</h1>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
