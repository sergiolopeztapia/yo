const details = [
  { label: "Especialidad", value: "Diseño y frontend" },
  { label: "Enfoque", value: "Interfaces limpias y claras" },
  { label: "Contacto", value: "Disponible para proyectos" },
];

function App() {
  return (
    <main className="page-shell">
      <section className="portfolio-card">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio personal</p>
          <h1>Sergio A. López Tapia</h1>
          <p className="lead">
            Diseño experiencias digitales sobrias, funcionales y bien
            estructuradas para comunicar valor con claridad.
          </p>

          <div className="actions">
            <a href="mailto:tuemail@correo.com" className="primary-action">
              Contacto
            </a>
            <span className="secondary-action">
              Frontend, diseño y sistemas de interfaz.
            </span>
          </div>
        </div>

        <aside className="details-panel" aria-label="Detalles del portfolio">
          {details.map((detail) => (
            <article className="detail-item" key={detail.label}>
              <p className="panel-title">{detail.label}</p>
              <p>{detail.value}</p>
            </article>
          ))}
        </aside>
      </section>
    </main>
  );
}

export default App;
