const highlights = [
  "Diseño limpio y personal",
  "Sección de presentación breve",
  "Listo para ampliar con proyectos o contacto",
];

function App() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Hola, soy Tu Nombre</p>
        <h1>Una página personal simple, clara y con estilo.</h1>
        <p className="lead">
          Este proyecto Vite deja una base ligera para presentar quién eres, qué
          haces y cómo encontrarte, sin complicaciones.
        </p>

        <div className="highlights">
          {highlights.map((item) => (
            <article className="highlight" key={item}>
              <span className="dot" aria-hidden="true" />
              <span>{item}</span>
            </article>
          ))}
        </div>

        <div className="actions">
          <a href="mailto:tuemail@correo.com" className="primary-action">
            Contacto
          </a>
          <span className="secondary-action">
            Disponible para proyectos, ideas y colaboración.
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;
