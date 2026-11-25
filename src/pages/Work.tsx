import { useMemo } from "react"
import { Link, useSearchParams } from "react-router"
import { archive, projects } from "../content.ts"
import { githubRepos } from "../githubRepos.ts"
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
  owner?: string
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
    owner: project.repo?.includes("JoeGakumo21") ? "JoeGakumo21" : project.repo ? "JoeGakumo212" : undefined,
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
    owner: item.repo.includes("JoeGakumo21") ? "JoeGakumo21" : "JoeGakumo212",
  })),
  ...githubRepos.map((item) => ({
    key: item.repo,
    title: item.title,
    summary: item.summary,
    label: item.language || "Repo",
    badge: "Public",
    href: item.repo,
    external: true,
    live: item.live,
    repo: item.repo,
    owner: item.owner,
  })),
]

export function Work() {
  usePageTitle("Work")
  const [params, setParams] = useSearchParams()
  const query = params.get("q") ?? ""
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return cards
    return cards.filter((card) =>
      [card.title, card.summary, card.label, card.repo, card.owner, card.live]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle),
    )
  }, [query])
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const page = useMemo(() => {
    if (filtered.length === 0) return 1
    const requested = Number(params.get("page") ?? "1")
    if (!Number.isFinite(requested)) return 1
    return Math.min(Math.max(Math.trunc(requested), 1), pageCount)
  }, [filtered.length, pageCount, params])
  const start = (page - 1) * pageSize
  const visible = filtered.slice(start, start + pageSize)

  function go(next: number) {
    const safe = Math.min(Math.max(next, 1), pageCount)
    const nextParams: Record<string, string> = {}
    if (query.trim()) nextParams.q = query.trim()
    if (safe !== 1) nextParams.page = String(safe)
    setParams(nextParams)
    window.scrollTo(0, 0)
  }

  function search(value: string) {
    setParams(value.trim() ? { q: value } : {}, { replace: true })
  }

  return (
    <div className="wrap page page-work">
      <header className="center-intro">
        <h1>
          Featured <span className="grad">projects</span>
        </h1>
        <p>
          {filtered.length === 0
            ? `No projects match “${query.trim()}”.`
            : `Showing ${start + 1}–${start + visible.length} of ${filtered.length}.`}{" "}
          Public repositories from JoeGakumo212 and JoeGakumo21, plus the two
          systems named on the November 2026 CV. Private repositories are not listed.
        </p>
        <form className="project-search" role="search" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="project-query">Search projects or GitHub</label>
          <input
            id="project-query"
            type="search"
            value={query}
            placeholder="Name, language, or repository"
            onChange={(event) => search(event.target.value)}
          />
        </form>
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

      {filtered.length > pageSize ? (
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
      ) : null}
    </div>
  )
}
