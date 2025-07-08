import styles from "./page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ConsultingContent from "./ConsultingContent";

export default function ScriptConsultingPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <ConsultingContent />
      </main>

      <Footer />
    </>
  );
}
