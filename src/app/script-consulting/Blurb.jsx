import styles from "./Blurb.module.css";

export default function Blurb({ text, author }) {
  return (
    <div className={styles.blurb}>
      <p className={styles.text}>{text}</p>
      <p className={styles.author}>— {author}</p>
    </div>
  );
}
