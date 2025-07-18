export const metadata = {
  title: "Industry Engagement | Fabio Montanari",
  description: "From writers’ rooms to festivals and panels, Fabio Montanari shares insights on storytelling, AI, and creative collaboration—connecting with audiences and fellow creators worldwide",
};

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

