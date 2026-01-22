import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Inicio"
      description="Plan de Cuentas (PGC) + curso práctico con ERPNext"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">PGC Español</h1>

          <p className="hero__subtitle">
            {siteConfig.tagline || "Documentación del Plan General de Contabilidad"}{" "}
            <span className={styles.heroSubtle}>
              + curso práctico gratuito con ERPNext
            </span>
          </p>

          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--lg",
                styles.customButton,
                styles.heroButton
              )}
              to="/curso"
            >
              Ir al curso 🎓
            </Link>


            <Link
              className={clsx(
                "button button--lg",
                styles.heroButton,
                styles.heroButtonOutline
              )}
              to="/docs/plan-de-cuentas"
            >
              Ir al Plan de Cuentas 📘
            </Link>

          </div>

          <div className={styles.microLinks}>
            <Link to="/curso#empezar" className={styles.microLink}>
              Empezar por la Clase 1 →
            </Link>
            <span className={styles.microSeparator}>·</span>
            <a
              className={styles.microLink}
              href="https://www.youtube.com/playlist?list=PLpGDePOeqo4ZHvTGpQGpdgwSCiGEouOie"
              target="_blank"
              rel="noreferrer"
            >
              Ver en YouTube →
            </a>
            <span className={styles.microSeparator}>·</span>
            <a
              className={styles.microLink}
              href="https://antoniocanada.com"
              target="_blank"
              rel="noreferrer"
            >
              Sobre mí →
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature
                title="Claro y estructurado"
                img="img/structured.png"
                description="Encuentra rápidamente cuentas, subgrupos y normas con una estructura clara y jerárquica."
              />
              <Feature
                title="Basado en el RD 1514/2007"
                img="img/oficial.png"
                description="Contenido organizado por grupos y capítulos, con enfoque práctico para aprender a usarlo."
              />
              <Feature
                title="Ejercicios + práctica real"
                img="img/opensource.png"
                description="Casos y ejercicios para construir EEFF y entender la mecánica contable paso a paso."
              />
            </div>
          </div>
        </section>

        <section className={styles.courseSection} id="empezar">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>📚 Curso gratuito: Contabilidad fácil con ERPNext</h2>
                <p>
                  Aprende contabilidad de forma aplicada: desde transacciones,
                  asientos y lógica contable, hasta reportes y su lectura dentro
                  de un ERP moderno como <strong>ERPNext</strong>.
                </p>

                <ul className={styles.bullets}>
                  <li>Asientos contables desde transacciones reales</li>
                  <li>Balance, PyG y flujo de caja (directo e indirecto)</li>
                  <li>Ejercicios y plantillas para practicar</li>
                </ul>

                <div className={styles.courseCtas}>
                  <Link className="button button--primary" to="/curso">
                    Accede al curso →
                  </Link>

                  <Link
                    className="button button--outline button--primary"
                    to="/curso#clase-1"
                  >
                    Empezar por Clase 1 →
                  </Link>

                  <a
                    className="button button--outline button--secondary"
                    href="https://www.youtube.com/playlist?list=PLpGDePOeqo4ZHvTGpQGpdgwSCiGEouOie"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Playlist en YouTube →
                  </a>
                </div>

                <p className={styles.smallNote}>
                  Nota: el Plan de Cuentas y el curso conviven aquí por ahora.
                  A futuro se pueden separar sin perder enlaces.
                </p>
              </div>

              <div className="col col--6 text--center">
                <img
                  src="img/banner_curso.png"
                  className={styles.courseImage}
                  alt="Curso Contabilidad fácil con ERPNext"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.trustSection}>
          <div className="container">
            <div className={clsx("row")}>
              <div className="col col--8">
                <h3 className={styles.trustTitle}>¿Quién lo mantiene?</h3>
                <p className={styles.trustText}>
                  Antonio Cañada — ERPNext, finanzas y automatización. Si quieres
                  contactarme o ver otros proyectos:
                </p>
              </div>

              <div className={clsx("col col--4", styles.trustLinks)}>
                <a
                  href="https://antoniocanada.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  antoniocanada.com →
                </a>
                <a
                  href="https://github.com/tonicanada"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function Feature({ img, title, description }) {
  return (
    <div className="col col--4">
      <div className="text--center">
        <img className={styles.featureImage} src={img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
