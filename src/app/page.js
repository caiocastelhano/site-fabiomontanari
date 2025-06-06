import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Fabio Montanari</h1>
        <p className={styles.subtitle}>
          This website is currently under construction.
        </p>

        <p className={styles.info}>
          Here you will soon find information about his artistic projects,
          consultancy work, and educational practice.
        </p>

        <p className={styles.note}>
          Follow the development of the site.
        </p>
      </main>
    </div>
  );
}
