'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = {
    en: ['Consulting', 'Teaching', 'Projects'],
    pt: ['Consultoria', 'Ensino', 'Projetos'],
  };

  const navLinks = ['/consulting', '/teaching', '/projects'];

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={styles.siteName}>Fabio Montanari</span>
      </div>

      <div className={styles.right}>
        {/* Botão de idioma com bandeiras */}
        <button onClick={toggleLanguage} className={styles.langToggle}>
          {language === 'en' ? (
            <img src="/flags/br.png" alt="Mudar para português" />
          ) : (
            <img src="/flags/us.png" alt="Switch to English" />
          )}
        </button>

        {/* Menu sanduíche */}
        <button
          className={styles.menuWrapper}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {menuOpen && (
          <nav className={styles.navMenu}>
            <ul>
              {navItems[language].map((label, index) => (
                <li key={label}>
                  <Link href={navLinks[index]}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
