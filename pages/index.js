import Head from "next/head";
import Link from "next/link";

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>INFO104 Nextjs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">¿Cómo ha sido tu semana?</h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <Link
            href={{
              pathname: "/response",
              query: { opt: 0 }
            }}
          >
            <a className="card">Excelente! Muy buena semana!</a>
          </Link>
          <Link
            href={{
              pathname: "/response",
              query: { opt: 1 }
            }}
          >
            <a className="card">Más o menos no mas!</a>
          </Link>
          <Link
            href={{
              pathname: "/response",
              query: { opt: 2 }
            }}
          >
            <a className="card">Horrible! qué semana!!! :(</a>
          </Link>
        </div>
      </main>

      <footer>
        <a href="https://github.com/PabloSzx/INFO104-2021-1" target="_blank">
          Repositorio y tutorial
        </a>
      </footer>
    </div>
  );
};

export default Index;
