"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";

const NAV = [
  { href: "#clinica", label: "A clínica" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#percurso", label: "Percurso" },
  { href: "#equipe", label: "Equipe" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="#topo" className={styles.brand} aria-label="Alva — início">
          <span className={styles.wordmark}>Alva</span>
          <span className={styles.sub}>odontologia</span>
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="#agendar" className={styles.cta}>
            Agendar avaliação
          </Link>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className={styles.menuGlyph}>
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          className={styles.mobile}
          aria-label="Menu móvel"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#agendar"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            Agendar avaliação
          </Link>
        </nav>
      )}
    </header>
  );
}
