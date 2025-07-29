import styles from "./ContactForm.module.css";

export default function ContactForm({ language }) {
  const isPT = language === "pt";

  return (
    <section
      className={styles.contactFormSection}
      aria-labelledby="form-heading"
    >
        <h2 id="form-heading" className={styles.visuallyHidden}>
            Contact form
        </h2>
        
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className={styles.form}
      >
        {/* Campo oculto obrigatório para Netlify Forms */}
        <input type="hidden" name="form-name" value="contact" />

        <label className={styles.label}>
          {isPT ? "Nome:" : "Name:"}
          <input type="text" name="name" required className={styles.input} />
        </label>

        <label className={styles.label}>
          Email:
          <input type="email" name="email" required className={styles.input} />
        </label>

        <label className={styles.label}>
          {isPT ? "Assunto:" : "Subject:"}
          <input type="text" name="subject" required className={styles.input} />
        </label>

        <label className={styles.label}>
          {isPT ? "Mensagem:" : "Message:"}
          <textarea
            name="message"
            rows="5"
            required
            className={styles.textarea}
          />
        </label>

        <button type="submit" className={styles.button}>
          {isPT ? "Enviar" : "Send"}
        </button>
      </form>
    </section>
  );
}
