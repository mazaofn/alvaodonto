"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import m from "./motion.module.css";

/**
 * MotionGate — o motion só existe sob `js-motion`, aplicado quando
 * o usuário NÃO prefere movimento reduzido. Sem a classe, todo o
 * CSS de revelação fica inerte e o conteúdo aparece no estado final.
 */
export function MotionGate() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches
    ) {
      document.documentElement.classList.add("js-motion");
    }
  }, []);
  return null;
}

type RevealProps = {
  children: ReactNode;
  /** rise: deslocamento mínimo · clip: revelação de imagem por clip-path */
  variant?: "rise" | "clip";
  delay?: number;
  className?: string;
};

/**
 * Reveal — revelação única ao entrar no viewport. Layout sempre
 * reservado: sem layout shift.
 */
export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass = variant === "clip" ? m.rvClip : m.rvRise;

  // Variante clip: o clip-path vive num elemento INTERNO. O elemento
  // observado (externo) nunca é clipado — porque o IntersectionObserver
  // considera clip-path no cálculo de interseção, clipar o próprio alvo
  // criaria um deadlock (oculto → nunca intersecta → nunca revela).
  if (variant === "clip") {
    return (
      <div
        ref={ref}
        className={`${inView ? m.inView : ""} ${className}`}
        style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      >
        <div className={variantClass}>{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`${variantClass} ${inView ? m.inView : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
