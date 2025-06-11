'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const wrapperRef = useRef(null); // referencia o bloco inteiro (menu + botão)

  const navItems = {
    en: ['Consulting', 'Teaching', 'Projects'],
    pt: ['Consultoria', 'Ensino', 'Projetos'],
  };

  const navLinks = ['/consulting', '/teaching', '/projects'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={`${styles.siteName} ${cinzel.className}`}>Fabio Montanari</span>
      </div>

      <div className={styles.right} ref={wrapperRef}>
        <div className={styles.langWrapper}>
          <button
            onClick={() => toggleLanguage('en')}
            className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
          >
            <img src="/flags/us.png" alt="English" />
          </button>
          <button
            onClick={() => toggleLanguage('pt')}
            className={`${styles.langButton} ${language === 'pt' ? styles.active : ''}`}
          >
            <img src="/flags/br.png" alt="Português" />
          </button>
        </div>

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
