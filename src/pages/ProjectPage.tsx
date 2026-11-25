import { Link, useParams } from "react-router"
import { projectBySlug } from "../content.ts"
import { usePageTitle } from "../usePageTitle.ts"

export function ProjectPage() {
  const { slug } = useParams()
  const project = projectBySlug(slug)
  usePageTitle(project ? project.title : "Project not found")

  if (!project) {
    return (
      <div className="wrap page page-project">
        <header className="page-intro">
          <p className="eyebrow">Work</p>
          <h1>This project is not on the site.</h1>
          <p>The address does not match a featured project.</p>
          <Link className="button" to="/work">
            Back to work
          </Link>
        </header>
      </div>
    )
  }

  return (
    <div className="wrap page page-project">
      <p className="back">
        <Link to="/work">All work</Link>
      </p>
      <header className="page-intro">
        <p className="eyebrow">{project.kicker}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>
      <div className="detail">
        <div>
          {project.detail.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="stack">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className="facts-card">
          {project.role ? (
            <p>
              <span>Role</span>
              {project.role}
            </p>
          ) : null}
          {project.dates ? (
            <p>
              <span>Dates</span>
              {project.dates}
            </p>
          ) : null}
          {project.place ? (
            <p>
              <span>Context</span>
              {project.place}
            </p>
          ) : null}
          {project.repo ? (
            <p>
              <span>Repository</span>
              <a href={project.repo} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </p>
          ) : (
            <p>
              <span>Repository</span>
              No public repository linked.
            </p>
          )}
          {project.live ? (
            <p>
              <span>Live</span>
              <a href={project.live} target="_blank" rel="noreferrer">
                Open site
              </a>
            </p>
          ) : null}
        </aside>
      </div>
    </div>
  )
}
