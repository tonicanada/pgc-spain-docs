import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "./index.module.css";
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Inicio" description="Documentación del PGC Español">
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">PGC Español</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--primary button--lg", styles.customButton)}
              to="/docs/plan-de-cuentas"
            >
              Ir al Plan de Cuentas 📘
            </Link>
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
                description="Documentación oficial del Plan General de Contabilidad español, organizada por capítulos y grupos."
              />
              <Feature
                title="Código abierto"
                img="img/opensource.png"
                description="El proyecto es colaborativo y se aloja en GitHub. ¡Contribuye para mejorarlo!"
              />
            </div>
          </div>
        </section>

        <section className={styles.courseSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>📚 Curso gratuito: Contabilidad fácil con ERPNext</h2>
                <p>
                  Domina los fundamentos del Plan General de Contabilidad y
                  aprende a aplicarlos paso a paso dentro de un ERP moderno como{" "}
                  <strong>ERPNext</strong>. Ideal para estudiantes,
                  emprendedores y profesionales que buscan una comprensión
                  práctica y aplicada de la contabilidad.
                </p>
                <Link
                  className="button button--outline button--primary"
                  to="/curso"
                >
                  Accede al curso →
                </Link>
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



