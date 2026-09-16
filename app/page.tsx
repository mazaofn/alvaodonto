import Link from "next/link";
import { Reveal } from "@/components/motion/motion";
import styles from "./page.module.css";

const TRATAMENTOS = [
  {
    n: "01",
    nome: "Avaliação e clínica geral",
    desc: "O ponto de partida: escuta, exame completo e um plano que faz sentido para o seu momento.",
  },
  {
    n: "02",
    nome: "Ortodontia e alinhadores",
    desc: "Correção do sorriso e da mordida com acompanhamento próximo, do primeiro molde ao ajuste final.",
  },
  {
    n: "03",
    nome: "Implantes e reabilitação",
    desc: "Reposição de um ou mais dentes com planejamento cuidadoso e etapas explicadas com calma.",
  },
  {
    n: "04",
    nome: "Estética do sorriso",
    desc: "Clareamento, lentes e harmonização do sorriso — naturalidade antes de qualquer exagero.",
  },
  {
    n: "05",
    nome: "Odontopediatria",
    desc: "Primeiras consultas sem pressa, para crianças que crescem sem medo de dentista.",
  },
];

const PERCURSO = [
  {
    n: "01",
    nome: "Avaliação",
    texto: "Uma conversa sem pressa. Entendemos histórico, incômodos e o que você espera do tratamento.",
  },
  {
    n: "02",
    nome: "Diagnóstico",
    texto: "Exames e imagens explicados em linguagem simples. Você entende o porquê de cada etapa.",
  },
  {
    n: "03",
    nome: "Tratamento",
    texto: "Sessões planejadas, com tempo reservado para você — sem encaixes apressados entre um paciente e outro.",
  },
  {
    n: "04",
    nome: "Acompanhamento",
    texto: "Revisões periódicas e um canal direto para dúvidas. Cuidado que continua depois da última sessão.",
  },
];

const DUVIDAS = [
  {
    q: "Como funciona a primeira avaliação?",
    a: "É uma consulta sem pressa: conversamos sobre histórico e expectativas, fazemos o exame clínico e, quando necessário, indicamos exames complementares. Você sai com um plano explicado etapa por etapa — e decide com calma.",
  },
  {
    q: "Vocês atendem convênios?",
    a: "O atendimento é particular, com hora marcada e tempo reservado por paciente. Fornecemos toda a documentação para reembolso, quando o seu plano permite.",
  },
  {
    q: "Tenho medo de dentista. Como vocês lidam com isso?",
    a: "Com tempo e previsibilidade: explicamos cada passo antes de começar, respeitamos pausas e nunca iniciamos um procedimento sem o seu consentimento. Muitos pacientes chegam com receio e permanecem pelo acompanhamento.",
  },
  {
    q: "Vocês atendem crianças?",
    a: "Sim. As primeiras consultas são pensadas para criar vínculo: sem pressa, sem dor e com linguagem adequada para cada idade.",
  },
  {
    q: "Como agendo pelo WhatsApp?",
    a: "Envie uma mensagem com seu nome e o motivo da visita. Respondemos em horário comercial e sugerimos os melhores horários — inclusive para quem precisa de início ou fim de dia.",
  },
  {
    q: "Este site é de uma clínica real?",
    a: "Não. Esta página é um projeto demonstrativo fictício, criado para mostrar como uma clínica contemporânea poderia se apresentar. Contatos e informações são ilustrativos.",
  },
];

export default function AlvaPage() {
  return (
    <>
      {/* 01 — HERO EDITORIAL ASSIMÉTRICO */}
      <section className={styles.hero} id="topo" aria-labelledby="hero-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>
              <span className={styles.kickerLine} aria-hidden="true" />
              Odontologia contemporânea
            </p>
            <h1 id="hero-title" className={styles.heroTitle}>
              Um cuidado que começa <em>antes do sorriso.</em>
            </h1>
            <p className={styles.lead}>
              Atendimento particular, planejamento preciso e tempo de verdade
              para cada paciente — do primeiro olhar ao acompanhamento.
            </p>
            <div className={styles.heroActions}>
              <Link href="#agendar" className={styles.btnDark}>
                Agendar avaliação
              </Link>
              <Link href="#clinica" className={styles.btnLine}>
                Conhecer a clínica
              </Link>
            </div>
          </div>

          <div className={styles.heroSide}>
            <p className={styles.vertical} aria-hidden="true">
              Avaliação · Diagnóstico · Tratamento · Acompanhamento
            </p>
            <Reveal variant="clip" className={styles.heroReveal}>
              <figure className={styles.heroFigure}>
                <img
                  src="/img/hero.jpg"
                  alt="Sala de espera da clínica com luz natural, tons claros e materiais naturais"
                  width={1000}
                  height={1400}
                  fetchPriority="high"
                />
                <figcaption className={styles.heroCaption}>
                  Luz natural, silêncio e tempo — a consulta começa no ambiente.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <div className={`container ${styles.careThread}`} aria-hidden="true">
          <span className={styles.careDot} />
          <span className={styles.careTrack} />
          <span className={styles.careLabel}>linha de cuidado — 01</span>
        </div>
      </section>

      {/* 02 — FILOSOFIA */}
      <section className={styles.section} id="clinica" aria-labelledby="clinica-title">
        <div className="container">
          <p className={styles.index}>A clínica — 02</p>
          <div className={styles.split}>
            <Reveal>
              <h2 id="clinica-title" className={styles.h2Major}>
                Odontologia feita <em>para pessoas,</em> não para procedimentos.
              </h2>
            </Reveal>
            <p className={styles.standfirst}>
              A Alva nasceu de uma insatisfação simples: consultas apressadas,
              orçamentos incompreensíveis e tratamentos que ninguém explica.
              Aqui, cada plano passa por escuta, diagnóstico visível e um ritmo
              que respeita a sua rotina.
            </p>
          </div>

          <div className={styles.trio}>
            <div className={styles.trioItem}>
              <h3 className={styles.h3}>Escuta antes do exame</h3>
              <p>
                A primeira pergunta nunca é sobre o dente. É sobre você:
                rotina, receios, expectativas. O plano técnico vem depois.
              </p>
            </div>
            <div className={styles.trioItem}>
              <h3 className={styles.h3}>Diagnóstico que se entende</h3>
              <p>
                Imagens e opções mostradas lado a lado, em linguagem simples.
                Você decide sabendo o porquê de cada etapa.
              </p>
            </div>
            <div className={styles.trioItem}>
              <h3 className={styles.h3}>Cuidado que continua</h3>
              <p>
                Revisões programadas e acompanhamento próximo. Tratamento bom
                é o que se mantém bem ao longo dos anos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — TRATAMENTOS: ÍNDICE EDITORIAL */}
      <section
        className={`${styles.sectionTight} ${styles.numSection}`}
        id="tratamentos"
        aria-labelledby="tratamentos-title"
      >
        <Reveal className={styles.ghostLayer}>
          <span
            className={`${styles.ghostBase} ${styles.ghost03}`}
            aria-hidden="true"
          >
            03
          </span>
        </Reveal>
        <div className="container">
          <p className={styles.index}>Tratamentos — 03</p>
          <div className={styles.split}>
            <Reveal>
              <h2 id="tratamentos-title" className={styles.h2Major}>
                Uma seleção, <em>explicada com calma.</em>
              </h2>
            </Reveal>
            <p className={styles.standfirst}>
              Cinco frentes que concentram a maior parte dos atendimentos.
              Cada uma começa com avaliação — nunca com um procedimento pronto.
            </p>
          </div>

          <ol className={styles.treatList}>
            {TRATAMENTOS.map((t) => (
              <li key={t.n} className={styles.treatRow}>
                <span className={styles.treatNum} aria-hidden="true">
                  {t.n}
                </span>
                <span className={styles.treatMain}>
                  <span className={styles.treatName}>{t.nome}</span>
                  <span className={styles.treatDesc}>{t.desc}</span>
                </span>
                <span className={styles.treatArrow} aria-hidden="true">
                  →
                </span>
              </li>
            ))}
          </ol>
          <p className={styles.listNote}>
            Precisa de outro cuidado — próteses, urgências, revisões?{" "}
            <Link href="#agendar">Fale com a recepção</Link> e descreva o seu
            caso.
          </p>
        </div>
      </section>

      {/* INTERLÚDIO — IMAGEM DOMINANTE + SOBREPOSIÇÃO */}
      <section className={styles.interlude} aria-label="Diagnóstico visível">
        <Reveal variant="clip">
          <figure className={styles.interludeFigure}>
            <img
              src="/img/interludio.jpg"
              alt="Profissional analisando reconstruções 3D e cortes de exame odontológico contra a luz"
              loading="lazy"
              width={2000}
              height={1125}
            />
          </figure>
        </Reveal>
        <div className={`container ${styles.interludeOverlap}`}>
          <Reveal>
            <p className={styles.interludeLabel}>Diagnóstico visível</p>
            <p className={styles.interludeQuote}>
              Precisão no tratamento. <em>Cuidado em cada detalhe.</em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 04 — PERCURSO: LINHA DE CUIDADO */}
      <section
        className={styles.careSection}
        id="percurso"
        aria-labelledby="percurso-title"
      >
        <div className="container">
          <p className={styles.index}>Percurso do paciente — 04</p>
          <Reveal>
            <h2 id="percurso-title" className={styles.h2Major}>
              Uma linha contínua, <em>do início ao retorno.</em>
            </h2>
          </Reveal>
          <p className={styles.standfirstNarrow}>
            Nada aqui é avulso. Cada etapa se conecta à seguinte — e você
            acompanha o fio inteiro.
          </p>

          <ol className={styles.journey}>
            {PERCURSO.map((s) => (
              <li key={s.n} className={styles.step}>
                <span className={styles.stepDot} aria-hidden="true" />
                <p className={styles.stepNum} aria-hidden="true">
                  {s.n}
                </p>
                <h3 className={styles.stepName}>{s.nome}</h3>
                <p className={styles.stepText}>{s.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 — PRECISÃO: SIGNATURE MOMENT */}
      <section className={styles.dark} aria-labelledby="precisao-title">
        <Reveal className={styles.ghostLayer}>
          <span className={styles.ghost} aria-hidden="true">
            05
          </span>
        </Reveal>
        <div className={`container ${styles.darkGrid}`}>
          <div className={styles.darkCopy}>
            <p className={styles.indexDark}>Precisão</p>
            <Reveal>
              <h2 id="precisao-title" className={styles.h2Signature}>
                Precisão que <em>se sente</em> no detalhe.
              </h2>
            </Reveal>
            <p className={styles.darkBody}>
              Planejamento digital, escaneamento intraoral e registros
              fotográficos do caso — não como promessa de marketing, mas como
              rotina de trabalho. Menos moldagem desconfortável, menos
              improvisação, mais previsibilidade.
            </p>
            <ul className={styles.darkList}>
              <li>Plano escrito antes do início, com etapas e prazos</li>
              <li>Imagens do seu caso explicadas junto com você</li>
              <li>Sessões com tempo reservado — sem encaixe apressado</li>
            </ul>
            <Link href="#agendar" className={styles.darkCta}>
              Agendar uma avaliação{" "}
              <span aria-hidden="true" className={styles.darkCtaArrow}>
                →
              </span>
            </Link>
          </div>
          <Reveal variant="clip" className={styles.darkReveal}>
            <figure className={styles.darkFigure}>
              <img
                src="/img/detalhe.jpg"
                alt="Profissional mostrando exame de imagem para a paciente durante a consulta"
                loading="lazy"
                width={1000}
                height={750}
              />
              <figcaption className={styles.darkCaption}>
                O seu caso, explicado junto com você — imagem por imagem.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 06 — AMBIENTE */}
      <section
        className={`${styles.section} ${styles.numSection}`}
        aria-labelledby="ambiente-title"
      >
        <Reveal className={styles.ghostLayer}>
          <span
            className={`${styles.ghostBase} ${styles.ghost06}`}
            aria-hidden="true"
          >
            06
          </span>
        </Reveal>
        <div className="container">
          <p className={styles.index}>Ambiente — 06</p>
          <div className={styles.split}>
            <Reveal>
              <h2 id="ambiente-title" className={styles.h2Major}>
                Um espaço que <em>acalma</em> antes de tratar.
              </h2>
            </Reveal>
            <p className={styles.standfirst}>
              Arquitetura limpa, materiais naturais e luz suave. Nada de sala
              de espera fria: a experiência foi desenhada para reduzir a
              ansiedade — inclusive a de quem chega com medo.
            </p>
          </div>

          <div className={styles.duo}>
            <Reveal variant="clip" className={styles.duoRevealMain}>
              <figure className={styles.duoFigure}>
                <img
                  src="/img/recepcao.jpg"
                  alt="Sala de espera com madeira, sofá e luz natural vinda do jardim"
                  loading="lazy"
                  width={1400}
                  height={1000}
                />
                <figcaption className={styles.caption}>
                  Espera — chegar alguns minutos antes faz parte do cuidado.
                </figcaption>
              </figure>
            </Reveal>
            <Reveal variant="clip" className={styles.duoSecond}>
              <figure className={styles.duoFigure}>
                <img
                  src="/img/espera.jpg"
                  alt="Cantinho de espera com poltronas claras e luminária de leitura"
                  loading="lazy"
                  width={1200}
                  height={900}
                />
                <figcaption className={styles.caption}>
                  Convivência — um canto silencioso para ler, respirar, esperar.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 — EQUIPE (FRENTES DE CUIDADO, SEM PERSONAS FALSAS) */}
      <section
        className={styles.sectionTight}
        id="equipe"
        aria-labelledby="equipe-title"
      >
        <div className="container">
          <p className={styles.index}>Equipe — 07</p>
          <div className={styles.split}>
            <Reveal>
              <h2 id="equipe-title" className={styles.h2}>
                Quem cuida <em>de você.</em>
              </h2>
            </Reveal>
            <p className={styles.standfirst}>
              Uma equipe pequena e estável, organizada por frentes de cuidado.
              Você conhece quem acompanha o seu caso pelo nome — e revê as
              mesmas pessoas a cada retorno.
            </p>
          </div>

          <div className={styles.fronts}>
            <div className={styles.front}>
              <p className={styles.frontTag}>Frente 01</p>
              <h3 className={styles.h3}>Avaliação e clínica geral</h3>
              <p>
                Primeira escuta, prevenção e coordenação do plano. É aqui que
                o seu percurso começa — e para onde ele sempre retorna.
              </p>
            </div>
            <div className={styles.front}>
              <p className={styles.frontTag}>Frente 02</p>
              <h3 className={styles.h3}>Ortodontia e estética</h3>
              <p>
                Alinhadores, aparelho e estética do sorriso conduzidos com
                registros comparativos ao longo do tratamento.
              </p>
            </div>
            <div className={styles.front}>
              <p className={styles.frontTag}>Frente 03</p>
              <h3 className={styles.h3}>Implantes e reabilitação</h3>
              <p>
                Casos que exigem reconstrução funcional, planejados em etapas
                e revisados em conjunto com a clínica geral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — DÚVIDAS */}
      <section
        className={styles.sectionTight}
        id="duvidas"
        aria-labelledby="duvidas-title"
      >
        <div className={`container ${styles.faqGrid}`}>
          <div>
            <p className={styles.index}>Dúvidas — 08</p>
            <Reveal>
              <h2 id="duvidas-title" className={styles.h2}>
                Perguntas <em>que ouvimos sempre.</em>
              </h2>
            </Reveal>
            <p className={styles.standfirst}>
              Respostas diretas, sem juridiquês e sem promessa milagrosa.
            </p>
          </div>
          <div className={styles.faqList}>
            {DUVIDAS.map((f) => (
              <details key={f.q} className={styles.faq} name="alva-faq">
                <summary className={styles.faqQ}>
                  <span>{f.q}</span>
                  <span className={styles.faqGlyph} aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — AGENDAMENTO */}
      <section className={styles.cta} id="agendar" aria-labelledby="agendar-title">
        <div className="container">
          <div className={styles.ctaPanel}>
            <Reveal className={styles.ghostLayer}>
              <span
                className={`${styles.ghostBase} ${styles.ghost09}`}
                aria-hidden="true"
              >
                09
              </span>
            </Reveal>
            <div className={styles.ctaRule} aria-hidden="true">
              <span className={styles.careDot} />
              <span className={styles.careTrack} />
            </div>
            <p className={styles.index}>Agendar — 09</p>
            <Reveal>
              <h2 id="agendar-title" className={styles.ctaTitle}>
                Comece por <em>uma conversa.</em>
              </h2>
            </Reveal>
            <p className={styles.ctaBody}>
              A avaliação é o primeiro passo de qualquer tratamento. Escolha o
              canal que preferir — respondemos em horário comercial.
            </p>
            <div className={styles.ctaActions}>
              <a
                href="https://wa.me/5511900000000?text=Ol%C3%A1!%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o."
                target="_blank"
                rel="noreferrer"
                className={styles.btnDarkLarge}
              >
                Agendar pelo WhatsApp
              </a>
              <a href="mailto:contato@alva.exemplo" className={styles.btnLineLarge}>
                Escrever um e-mail
              </a>
            </div>
            <p className={styles.ctaNote}>
              Seg–Sex · 8h às 19h — Sáb · 8h às 12h · São Paulo, com hora marcada
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
