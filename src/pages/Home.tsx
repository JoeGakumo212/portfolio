import { Link } from "react-router"
import { profile, projects, roles, services } from "../content.ts"
import { usePageTitle } from "../usePageTitle.ts"

export function Home() {
  usePageTitle(profile.name)
  const preview = projects.slice(0, 6)
  const current = roles[0]

  return (
    <div className="landing-page">
      <section className="landing">
        <div className="landing-copy">
          <p className="eyebrow">Software engineer · Full-stack developer</p>
          <h1>
            Building <span className="grad">digital</span> systems
          </h1>
          <p className="lede">
            Computer Science graduate working on government systems, health
            information systems, and full-stack software.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/work">
              View projects
            </Link>
            <Link className="button button-ghost" to="/contact">
              Get in touch
            </Link>
          </div>
          <p className="landing-now">
            {current.title} · {current.org}
          </p>
        </div>

        <div className="seal">
          <svg className="seal-ring" viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path
                id="seal-path"
                d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
              />
            </defs>
            <circle className="seal-orbit" cx="100" cy="100" r="86" />
            <circle className="seal-orbit inner" cx="100" cy="100" r="70" />
            <text>
              <textPath href="#seal-path">
                SOFTWARE · HEALTH IT · GOVERNMENT SYSTEMS · FULL-STACK ·
              </textPath>
            </text>
          </svg>
          <img src="/images/avatar.jpg" alt="Joseph Gakumo Munyui" />
        </div>
      </section>

      <section className="dock" aria-label="Snapshot">
        <article>
          <IconMark />
          <strong>BSc</strong>
          <span>Computer Science, Karatina University</span>
        </article>
        <article>
          <IconFolder />
          <strong>2021</strong>
          <span>Software engineering, Moringa School</span>
        </article>
        <pre className="code-card">
          <span className="code-chrome" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>profile.ts</span>
          </span>
          <code>
            <span className="tok-key">class</span> JosephGakumo {"{"}
            {"\n"}
            {"  "}name: <span className="tok-str">&quot;Joseph Gakumo Munyui&quot;</span>,
            {"\n"}
            {"  "}role: <span className="tok-str">&quot;Full-stack developer&quot;</span>,
            {"\n"}
            {"  "}focus: [
            {"\n"}
            {"    "}
            <span className="tok-str">&quot;Government systems&quot;</span>,
            {"\n"}
            {"    "}
            <span className="tok-str">&quot;Health IT&quot;</span>,
            {"\n"}
            {"    "}
            <span className="tok-str">&quot;React, Django, Python&quot;</span>
            {"\n"}
            {"  "}]
            {"\n"}
            {"}"}
          </code>
        </pre>
      </section>

      <section className="wrap section">
        <header className="center-intro">
          <h2>
            How I <span className="grad">can help</span>
          </h2>
        </header>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section home-work">
        <header className="center-intro">
          <h2>
            Featured <span className="grad">projects</span>
          </h2>
        </header>
        <div className="showcase">
          {preview.map((project, index) => (
            <article className="show-card" key={project.slug}>
              <Link
                className="show-cover"
                data-tone={index % 4}
                to={`/work/${project.slug}`}
                aria-label={project.title}
              >
                {project.cover ? (
                  <img src={project.cover} alt="" />
                ) : (
                  <span>{project.stack[0]}</span>
                )}
              </Link>
              <div>
                <h3>
                  <Link to={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="see-all">
          <Link className="button" to="/work">
            See all projects
          </Link>
        </p>
      </section>
    </div>
  )
}

function IconMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M12 8 6 16l6 8M20 8l6 8-6 8" />
    </svg>
  )
}

function IconFolder() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 10h8l2 3h12v12H5z" />
    </svg>
  )
}
