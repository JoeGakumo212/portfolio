import { useMemo } from "react"
import { Link, useSearchParams } from "react-router"
import { archive, projects } from "../content.ts"
import { usePageTitle } from "../usePageTitle.ts"

const pageSize = 9

type Card = {
  key: string
  title: string
  summary: string
  label: string
  cover?: string
  badge: string
  href: string
  external: boolean
  live?: string
  repo?: string
}

const cards: Card[] = [
  ...projects.map((project) => ({
    key: project.slug,
    title: project.title,
    summary: project.summary,
    label: project.stack[0],
    cover: project.cover,
    badge: project.repo ? "Public" : "CV",
    href: `/work/${project.slug}`,
    external: false,
    live: project.live,
    repo: project.repo,
  })),
  ...archive.map((item) => ({
    key: item.repo,
    title: item.title,
    summary: item.summary,
    label: "Repo",
    cover: item.cover,
    badge: "Public",
    href: item.repo,
    external: true,
    live: item.live,
    repo: item.repo,
  })),
]

export function Work() {
  usePageTitle("Work")
  const [params, setParams] = useSearchParams()
  const pageCount = Math.ceil(cards.length / pageSize)
  const page = useMemo(() => {
    const requested = Number(params.get("page") ?? "1")
    if (!Number.isFinite(requested)) return 1
    return Math.min(Math.max(Math.trunc(requested), 1), pageCount)
  }, [pageCount, params])
  const start = (page - 1) * pageSize
  const visible = cards.slice(start, start + pageSize)

  function go(next: number) {
    const safe = Math.min(Math.max(next, 1), pageCount)
    setParams(safe === 1 ? {} : { page: String(safe) })
    window.scrollTo(0, 0)
  }

  return (
    <div className="wrap page page-work">
      <header className="center-intro">
        <h1>
          Featured <span className="grad">projects</span>
        </h1>
        <p>
          Showing {start + 1}–{start + visible.length} of {cards.length}. The
          first two are named on the November 2026 CV. The rest are public
          GitHub repositories.
        </p>
      </header>

      <div className="showcase">
        {visible.map((project, index) => (
          <article className="show-card" key={project.key}>
            {project.external ? (
              <a
                className="show-cover"
                data-tone={(start + index) % 4}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={project.title}
              >
                {project.cover ? (
                  <img src={project.cover} alt="" />
                ) : (
                  <span>{project.label}</span>
                )}
              </a>
            ) : (
              <Link
                className="show-cover"
                data-tone={(start + index) % 4}
                to={project.href}
                aria-label={project.title}
              >
                {project.cover ? (
                  <img src={project.cover} alt="" />
                ) : (
                  <span>{project.label}</span>
                )}
              </Link>
            )}
            <div>
              <h2>
                {project.external ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                ) : (
                  <Link to={project.href}>{project.title}</Link>
                )}
                <em>{project.badge}</em>
              </h2>
              <p>{project.summary}</p>
              <p className="show-links">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                ) : null}
                {project.repo ? (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Repository
                  </a>
                ) : (
                  <Link to={project.href}>Details</Link>
                )}
              </p>
            </div>
          </article>
        ))}
      </div>

      <nav className="pager" aria-label="Project pages">
        <button type="button" onClick={() => go(page - 1)} disabled={page === 1}>
          Previous
        </button>
        {Array.from({ length: pageCount }, (_, index) => {
          const number = index + 1
          return (
            <button
              key={number}
              type="button"
              aria-current={number === page ? "page" : undefined}
              onClick={() => go(number)}
            >
              {number}
            </button>
          )
        })}
        <button type="button" onClick={() => go(page + 1)} disabled={page === pageCount}>
          Next
        </button>
      </nav>
    </div>
  )
}
