import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IndustryContent from "./IndustryContent";

export default function IndustryResearchPage() {
  return (
    <>
      <Header />

      <main className={styles.page} aria-labelledby="industry-title">
        <IndustryContent />
      </main>

      <Footer />
    </>
  );
}

