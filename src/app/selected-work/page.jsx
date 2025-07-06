import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkContent from "./WorkContent";

export default function SelectedWorkPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <h1 className={styles.visuallyHidden}>Selected Work</h1>
        <WorkContent />
      </main>

      <Footer />
    </>
  );
}
