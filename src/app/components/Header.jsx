'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
import { dictionary } from '../../lib/dictionary';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  const navItems = dictionary.header[language]?.nav || dictionary.header.en.nav;

  const navLinks = [
    '/selected-work',
    '/industry-engagement',
    '/script-consultant',
    '/about-me',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/" className={`${styles.siteName} ${cinzel.className}`} title="Go to homepage">
            <span className={styles.name}>Fabio Montanari</span>
          </Link>
        </div>

        <div className={styles.center}>
          <nav className={styles.desktopNav}>
            <ul>
              {navItems?.map((label, index) => (
                <li key={label}>
                  <Link href={navLinks[index]}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.right} ref={wrapperRef}>
          <div className={styles.langWrapper}>
            <button
              onClick={() => toggleLanguage('en')}
              className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => toggleLanguage('pt')}
              className={`${styles.langButton} ${language === 'pt' ? styles.active : ''}`}
              aria-label="Mudar para Português"
            >
              PT
            </button>
          </div>

          <button
            className={styles.menuWrapper}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
          >
            ☰
          </button>

          {menuOpen && (
            <nav
              id="main-menu"
              className={styles.navMenu}
              role="navigation"
              tabIndex="-1"
            >
              <ul>
                {navItems?.map((label, index) => (
                  <li key={`${label}-${index}`}>
                    <Link href={navLinks[index]}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

