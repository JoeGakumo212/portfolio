import { services } from "../content.ts"
import { usePageTitle } from "../usePageTitle.ts"

const marks = ["</>", "DB", "Gov", "Pay"]

export function Services() {
  usePageTitle("Services")

  return (
    <div className="wrap page page-services">
      <header className="center-intro">
        <h1>
          How I <span className="grad">can help</span>
        </h1>
        <p>
          The four areas below are the ones named on the November 2026 CV or
          shown in the public repositories.
        </p>
      </header>
      <div className="service-grid">
        {services.map((service, index) => (
          <article key={service.title}>
            <span className="service-mark" aria-hidden="true">
              {marks[index]}
            </span>
            <h2>{service.title}</h2>
            <p>{service.detail}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
