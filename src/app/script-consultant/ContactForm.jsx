"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ language }) {
  const isPT = language === "pt";
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        form.reset();
        setSubmitted(true);
        setHasError(false);
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        setHasError(true);
      });
  };

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
        onSubmit={handleSubmit}
      >
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

        {submitted && (
          <p className={styles.successMessage}>
            {isPT
              ? "Mensagem enviada com sucesso!"
              : "Message sent successfully!"}
          </p>
        )}

        {hasError && (
          <p className={styles.errorMessage}>
            {isPT
              ? "Erro ao enviar a mensagem. Tente novamente."
              : "Failed to send message. Please try again."}
          </p>
        )}
      </form>
    </section>
  );
}
