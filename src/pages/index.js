import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Inicio" description="Documentación del PGC Español">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/plan-de-cuentas">
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
                <h2>📚 Curso gratuito sobre el Plan General de Contabilidad</h2>
                <p>
                  Aprende a aplicar correctamente el PGC con ejemplos prácticos, explicaciones claras y referencias normativas. Ideal para estudiantes, contadores y emprendedores.
                </p>
                <Link
                  className="button button--outline button--primary"
                  to="/curso">
                  Ver el curso →
                </Link>
              </div>
              <div className="col col--6 text--center">
                <img
                  src="img/banner_curso.png"
                  className={styles.courseImage}
                  alt="Curso de PGC"
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
