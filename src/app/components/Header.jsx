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

  const wrapperRef = useRef(null);

  const navItems = {
    en: ['Works', 'Teaching & Research', 'Development & Consulting', 'About'],
    pt: ['Trabalhos', 'Ensino & Pesquisa', 'Desenvolvimento & Consultoria', 'Sobre'],
  };

  const navLinks = ['/works', '/teaching-research', '/development-consulting', '/about'];

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
        <Link href="/" className={`${styles.siteName} ${cinzel.className}`} title="Go to homepage">
          Fabio Montanari
        </Link>
      </div>

      <div className={styles.right} ref={wrapperRef}>
        <div className={styles.langWrapper}>
          <button
            onClick={() => toggleLanguage('en')}
            className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
          >
            EN
          </button>
          <button
            onClick={() => toggleLanguage('pt')}
            className={`${styles.langButton} ${language === 'pt' ? styles.active : ''}`}
          >
            PT
          </button>
        </div>

        <button
          className={styles.menuWrapper}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {menuOpen && (
          <nav className={styles.navMenu} role="navigation" tabIndex="-1">
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
