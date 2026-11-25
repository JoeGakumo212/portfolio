import { useEffect, useRef, useState } from "react"
import { TypedName } from "../components/TypedName.tsx"
import {
  certificates,
  education,
  profile,
  roles,
  skills,
} from "../content.ts"
import { usePageTitle } from "../usePageTitle.ts"

export function About() {
  usePageTitle("About")

  return (
    <div className="wrap page page-about">
      <section className="profile-split">
        <div>
          <TypedName text={profile.name} />
          <p className="profile-lead">{profile.summary}</p>

          <h2>Work history</h2>
          <ol className="history">
            {roles.map((role) => (
              <li key={`${role.org}-${role.dates}`}>
                <h3>
                  {role.title}, {role.org}
                </h3>
                <p className="history-dates">
                  {role.dates}
                  {role.place ? ` · ${role.place}` : ""}
                </p>
                <p>{role.points[0]}</p>
              </li>
            ))}
          </ol>

          <h2>My skills</h2>
          <SkillBars />
          <p className="note">
            Each percentage is how central that skill is on the CV and in the
            public repositories. It is not a test score.
          </p>
        </div>
        <div className="profile-frame">
          <img src="/images/portrait.jpg" alt="Joseph Gakumo Munyui" />
        </div>
      </section>

      <section className="journey">
        <h2 className="center-title">
          My <span className="grad">journey</span>
        </h2>
        <ol>
          {roles.map((role) => (
            <li key={`${role.title}-${role.dates}`}>
              <article>
                <h3>
                  {role.title}, {role.org}
                </h3>
                <p className="history-dates">{role.dates}</p>
                <p>{role.points[0]}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Education</h2>
        <div className="edu">
          {education.map((item) => (
            <article key={item.school}>
              <p className="dates">{item.dates}</p>
              <h3>{item.credential}</h3>
              <p className="org">
                {item.school} · {item.place}
              </p>
              <p className="result">{item.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Certificates</h2>
        <ul className="certs">
          {certificates.map((item) => (
            <li key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>
                  {item.issuer} · {item.result}
                </p>
              </div>
              <span>{item.dates}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function SkillBars() {
  const listRef = useRef<HTMLUListElement>(null)
  const [progress, setProgress] = useState(0)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReduce(media.matches)
    apply()
    media.addEventListener("change", apply)
    return () => media.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    const node = listRef.current
    if (!node || reduce) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        const duration = 2400
        let start = 0
        const tick = (now: number) => {
          if (!start) start = now
          const t = Math.min(1, (now - start) / duration)
          setProgress(1 - (1 - t) ** 3)
          if (t < 1) frame = window.requestAnimationFrame(tick)
        }
        frame = window.requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [reduce])

  const amount = reduce ? 1 : progress

  return (
    <ul className="skill-bars" ref={listRef}>
      {skills.map((skill) => {
        const value = Math.round(skill.width * amount)
        return (
          <li key={skill.name}>
            <span className="skill-label">
              <span>{skill.name}</span>
              <span>{value}%</span>
            </span>
            <span className="bar">
              <span style={{ width: `${skill.width * amount}%` }} />
            </span>
          </li>
        )
      })}
    </ul>
  )
}
