import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <p className={styles.wordmark}>Alva</p>
          <p className={styles.tagline}>Seu sorriso, cuidado por inteiro.</p>
          <p className={styles.meta}>
            Odontologia contemporânea · atendimento particular com hora marcada
          </p>
        </div>

        <nav className={styles.col} aria-label="Mapa do site">
          <p className={styles.colTitle}>Navegar</p>
          <Link href="#clinica">A clínica</Link>
          <Link href="#tratamentos">Tratamentos</Link>
          <Link href="#percurso">Percurso</Link>
          <Link href="#equipe">Equipe</Link>
          <Link href="#duvidas">Dúvidas</Link>
        </nav>

        <div className={styles.col}>
          <p className={styles.colTitle}>Atendimento</p>
          <p>Seg–Sex · 8h às 19h</p>
          <p>Sáb · 8h às 12h</p>
          <p>
            <a href="mailto:contato@alva.exemplo">contato@alva.exemplo</a>
          </p>
          <p>
            <a href="https://wa.me/5511900000000" target="_blank" rel="noreferrer">
              WhatsApp (11) 90000-0000
            </a>
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Visitar</p>
          <p>São Paulo · atendimento com hora marcada</p>
          <Link href="#agendar" className={styles.ctaLine}>
            Agendar avaliação →
          </Link>
        </div>
      </div>

      <div className={`container ${styles.base}`}>
        <p>© 2026 Alva Odontologia — conceito demonstrativo.</p>
        <p className={styles.disclaimer}>
          Projeto demonstrativo fictício desenvolvido pela Zentrix Interactive.
        </p>
      </div>
    </footer>
  );
}
