export type Project = {
  slug: string
  title: string
  kicker: string
  role?: string
  dates?: string
  place?: string
  summary: string
  detail: string[]
  stack: string[]
  repo?: string
  live?: string
  cover?: string
}

export type Role = {
  title: string
  org: string
  note?: string
  dates: string
  place: string
  points: string[]
}

export const profile = {
  name: "Joseph Gakumo Munyui",
  title: "Software Engineer and Full-Stack Developer",
  email: "joegakumo1@gmail.com",
  phone: "+254791279635",
  phoneLabel: "+254 791 279 635",
  postalCode: "20100",
  place: "Nakuru City",
  summary:
    "ICT professional and Computer Science graduate with hands-on experience in government systems, health information systems, and full-stack software development. The CV describes support for enterprise platforms such as IFMIS, ICT infrastructure troubleshooting, and training people to use digital systems in public-sector and health settings.",
  objective:
    "To contribute as an ICT professional by using experience in government systems, health IT, and software development to deliver efficient, secure, and scalable solutions, and to support digital transformation.",
  accounts: [
    { handle: "JoeGakumo212", href: "https://github.com/JoeGakumo212" },
    { handle: "JoeGakumo21", href: "https://github.com/JoeGakumo21" },
  ],
}

export const roles: Role[] = [
  {
    title: "ICT Intern",
    org: "State Department for Correctional Services",
    note: "Under the Public Service Commission · PSIP Cohort 8",
    dates: "2026 – Present",
    place: "Teleposta Headquarters, Nairobi",
    points: [
      "ICT support for 50+ users across government systems, including IFMIS, CBK, and prison management systems.",
      "Diagnosed and resolved system issues, with the CV noting improved uptime and operational efficiency.",
      "Network configuration and troubleshooting across departments.",
      "End-user support for system access and performance.",
      "Assistance maintaining a secure and efficient ICT infrastructure.",
    ],
  },
  {
    title: "Health IT Intern",
    org: "University of Nairobi Enterprise Services (UNES) – USAID Program",
    dates: "2024 – 2025",
    place: "Nakuru",
    points: [
      "Supported implementation of electronic health record systems in healthcare facilities.",
      "Training sessions for 30+ healthcare workers. The CV links this to system adoption and data accuracy.",
      "Assisted with data migration from paper records to digital platforms.",
      "Installed and optimized health IT systems, including servers and networks.",
      "Worked with stakeholders on rollout and sustainability.",
    ],
  },
  {
    title: "ICT Intern",
    org: "Kiptagwanyi Health Center",
    dates: "2022 – 2023",
    place: "Nakuru",
    points: [
      "Technical support for health IT systems and day-to-day ICT operations.",
      "Assisted with system installation, maintenance, and troubleshooting.",
      "Trained staff on system use. The CV links this to fewer errors and smoother daily work.",
    ],
  },
]

export const education = [
  {
    school: "Karatina University",
    credential: "Bachelor of Science in Computer Science",
    dates: "2016 – 2021",
    result: "Second Class Honours, Upper Division",
    place: "Nyeri",
    note: "The CV lists a focus on programming, machine learning, and algorithms, plus a final-year web application. It does not name that application. Certificate dates on the CV run from 25 August 2016 to 12 March 2021.",
  },
  {
    school: "Moringa School",
    credential: "Software Engineering",
    dates: "2021",
    result: "Pass",
    place: "Nairobi",
    note: "Full-stack training in Angular, Django, Flask, and Python, with practical software development and UI/UX. Certificate dates on the CV run from 2 February 2021 to 15 December 2021.",
  },
  {
    school: "Maiella Township Secondary School",
    credential: "KCSE",
    dates: "2010 – 2015",
    result: "B+",
    place: "Naivasha",
    note: "Kenya Certificate of Secondary Education.",
  },
]

export const certificates = [
  {
    name: "Bachelor of Science in Computer Science",
    issuer: "Karatina University",
    result: "Second Class Honours, Upper Division",
    dates: "25 Aug 2016 – 12 Mar 2021",
  },
  {
    name: "Software Engineering",
    issuer: "Moringa School",
    result: "Pass",
    dates: "2 Feb 2021 – 15 Dec 2021",
  },
  {
    name: "Python Certification",
    issuer: "HackerRank",
    result: "Pass",
    dates: "25 Aug 2021 – 25 Oct 2021",
  },
]

export const strengths = [
  "Fast learner, especially in changing digital systems.",
  "Problem-solving: diagnosing and resolving technical and system issues.",
  "Computer Science foundation in software, databases, and ICT systems.",
  "Hands-on work with health information systems, government platforms, and enterprise ICT.",
  "Collaboration with developers, end users, and non-technical colleagues.",
]

export const languages = ["English", "Swahili", "Kikuyu"]

export const interests = [
  "Trending technologies",
  "Gaming",
  "Blockchain",
  "Digital transformation",
  "Software development",
  "Innovation",
]

export const services = [
  {
    title: "Web development",
    detail:
      "Responsive sites with React, TypeScript, Vite, and Next.js. Public examples include Correctional Services Week, FindHouse, and this portfolio.",
  },
  {
    title: "Backend development",
    detail:
      "Server-side applications with Django, Flask, and PHP, backed by MySQL or PostgreSQL. The convenience-store POS is the Django example on the CV.",
  },
  {
    title: "Health and government systems",
    detail:
      "Hands-on support for electronic health records, IFMIS, and the prison management system named on the CV, including training the people who use them.",
  },
  {
    title: "Payments",
    detail:
      "M-Pesa STK Push through the Safaricom Daraja API on the POS, and a public PesaPal payment form.",
  },
]

export const skills = [
  { name: "Python", width: 92 },
  { name: "Django", width: 84 },
  { name: "React", width: 76 },
  { name: "JavaScript", width: 72 },
  { name: "MySQL", width: 64 },
  { name: "PHP", width: 54 },
]

export const skillGroups = [
  {
    label: "Named on the CV",
    detail:
      "Python, Angular, Django, Flask, databases, networking and device troubleshooting, UI/UX, and a degree focus on programming, machine learning, and algorithms. Domain systems named in the experience section: IFMIS, CBK systems, prison management systems, and electronic health records.",
  },
  {
    label: "Shown in public repositories",
    detail:
      "TypeScript, JavaScript, React, Vite, Next.js, PHP, HTML, CSS, Bootstrap, Tailwind, MySQL, PostgreSQL, Safaricom Daraja, and PesaPal.",
  },
]

export const projects: Project[] = [
  {
    slug: "prison-management-system",
    title: "Prison Management System",
    kicker: "CV · State Department for Correctional Services",
    role: "ICT Intern",
    dates: "16 Jul 2025 – 30 Dec 2027",
    place: "State Department for Correctional Services",
    summary:
      "A centralized platform for inmate records, prison operations, and administrative workflows, described on the CV as a replacement for manual record-keeping.",
    detail: [
      "The CV describes the Prison Management System for inmates as a digital platform for inmate records, prison operations, and administrative workflows inside correctional facilities.",
      "Its stated aims are security, transparency, and operational efficiency through an automated, structured record instead of manual files.",
      "Joseph’s listed role on the project is ICT Intern. No public GitHub repository was found for this system, so this page does not link one.",
    ],
    stack: ["Government systems", "Records", "ICT support"],
  },
  {
    slug: "convenience-pos",
    title: "Convenience POS System",
    kicker: "CV · Texco Kenya",
    role: "Software Developer",
    dates: "1 Jan 2026 – 10 Apr 2026",
    place: "Texco Kenya",
    summary:
      "A point-of-sale application for sales, inventory, and customer interactions in convenience retail. The public POS-DEV repository documents the Django implementation.",
    detail: [
      "The CV describes the system as automating billing, stock tracking, and reporting for convenience stores, supermarkets, and small businesses.",
      "The public repository POS-DEV is a Django and MySQL point of sale. It lists a cart with product search and categories, low-stock thresholds, admin, manager, and cashier roles, daily sales and stock reports, PDF receipts, and M-Pesa STK Push through the Safaricom Daraja API.",
    ],
    stack: ["Django", "Python", "MySQL", "JavaScript", "Daraja"],
    repo: "https://github.com/JoeGakumo212/POS-DEV",
    cover: "/images/covers/convenience-pos.jpg",
  },
  {
    slug: "meetflow",
    title: "MeetFlow",
    kicker: "Public repository",
    dates: "Updated 2026",
    summary:
      "A meeting-management platform whose repository describes it as being built for the State Department for Correctional Services. The README places the work at the foundation stage.",
    detail: [
      "The README describes one workflow for scheduling, preparation, minutes, decisions, and action tracking.",
      "What is in the repository now is a React, TypeScript, and Vite frontend shell with a Django backend shell. PostgreSQL, Celery, and Redis are named as the intended next pieces.",
      "This is a separate public repository from the Prison Management System listed on the CV.",
    ],
    stack: ["TypeScript", "React", "Vite", "Django", "Python"],
    repo: "https://github.com/JoeGakumo212/Meetflow",
    cover: "/images/covers/meetflow.jpg",
  },
  {
    slug: "correctional-services-week",
    title: "Correctional Services Week 2026",
    kicker: "Public repository",
    dates: "Updated 2026",
    summary:
      "A React and Vite site whose document title is Correctional Services Week 2026, with landing, about, programme, events, leadership, mandate, and contact sections.",
    detail: [
      "The source tree includes those sections as pages and landing components.",
      "A live deployment is published on Vercel.",
    ],
    stack: ["React", "Vite", "CSS"],
    repo: "https://github.com/JoeGakumo212/Correctional-Service-Week",
    live: "https://correctional-service-week.vercel.app",
    cover: "/images/covers/correctional-services-week.jpg",
  },
  {
    slug: "findhouse",
    title: "FindHouse",
    kicker: "Public repository",
    dates: "Updated 2026",
    summary:
      "A Next.js project with pages for property details, leases, payments, and landlord and tenant dashboards. The README calls it a React Next.js template.",
    detail: [
      "The repository contains those dashboard and lease pages and is published on Vercel.",
      "The README’s own description is that the project is a React Next.js template, so this page does not claim a larger product scope than the files and that note support.",
    ],
    stack: ["Next.js", "React", "JavaScript"],
    repo: "https://github.com/JoeGakumo212/FindHouse",
    live: "https://find-house-dusky.vercel.app",
    cover: "/images/covers/findhouse.jpg",
  },
  {
    slug: "pesapal",
    title: "PesaPal payments",
    kicker: "Public repository",
    dates: "Updated 2023",
    summary:
      "A PHP page titled “Make Payment using PesaPal,” posting into an iframe flow, with callback, redirect, and Pesapal v3 helper scripts.",
    detail: [
      "The repository is a payment form and the helper files around a Pesapal v3 flow.",
    ],
    stack: ["PHP", "Bootstrap"],
    repo: "https://github.com/JoeGakumo212/PesaPal_Integration",
    cover: "/images/covers/pesapal.jpg",
  },
  {
    slug: "tenwek-boarding-school",
    title: "Tenwek Boarding School",
    kicker: "Public repository",
    dates: "Updated 2023",
    summary:
      "Static pages in the Tenwek-Junior-School repository. The home document is titled Tenwek Boarding School.",
    detail: [
      "The site includes home, academics, courses, teachers, contact, login, and registration pages.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/JoeGakumo212/Tenwek-Junior-School",
    live: "https://joegakumo212.github.io/Tenwek-Junior-School/",
    cover: "/images/covers/tenwek-boarding-school.jpg",
  },
  {
    slug: "nakuru-county-health",
    title: "Nakuru County Health",
    kicker: "Public repository",
    dates: "Updated 2022",
    summary:
      "A static landing page. The repository description says it showcases a landing page for the Nakuru County Health Department.",
    detail: [
      "The public repository is a single HTML and CSS landing page, published on GitHub Pages.",
    ],
    stack: ["HTML", "CSS"],
    repo: "https://github.com/JoeGakumo21/NakuruCountyHealth-Website",
    live: "https://joegakumo21.github.io/NakuruCountyHealth-Website/",
    cover: "/images/covers/nakuru-county-health.jpg",
  },
]

export const archive: { title: string; summary: string; repo: string; live?: string; cover?: string }[] = [
  {
    title: "Action Theater",
    summary: "A movie site for searching trending titles and saving favourites.",
    repo: "https://github.com/JoeGakumo212/Action-Theator",
    live: "https://best-movie-list.netlify.app/",
    cover: "/images/covers/action-theater.jpg",
  },
  {
    title: "Daraja STK push",
    summary: "PHP scripts for an M-Pesa access token, an STK push, and a callback.",
    repo: "https://github.com/JoeGakumo212/daraja-mpesa-app",
    cover: "/images/covers/daraja-stk.jpg",
  },
  {
    title: "Joe-Doc",
    summary: "A repository titled Joe-Doc Project, with a Vite and Tailwind frontend and a backend models directory.",
    repo: "https://github.com/JoeGakumo212/Doctor-App",
    cover: "/images/covers/joe-doc.jpg",
  },
  {
    title: "KenyaEMR notes",
    summary: "Public notes on a Tomcat 9 service file for an OpenMRS install. The commands are not repeated here.",
    repo: "https://github.com/JoeGakumo212/KenyaEMR",
    cover: "/images/covers/kenyaemr.jpg",
  },
  {
    title: "Neighbourhood news",
    summary: "A Django application for posting neighbourhood news after signing in. The README lists PostgreSQL and Cloudinary.",
    repo: "https://github.com/JoeGakumo21/updateNeighbours",
    cover: "/images/covers/neighbourhood.jpg",
  },
  {
    title: "Project reviews",
    summary: "A Django application for posting projects, reviews, comments, and ratings, written around Moringa School.",
    repo: "https://github.com/JoeGakumo21/Awwards-App-project",
    cover: "/images/covers/project-reviews.jpg",
  },
  {
    title: "Instagram clone",
    summary: "A Django photo application for sign-up, posts, search, and follows.",
    repo: "https://github.com/JoeGakumo21/Instagram",
    cover: "/images/covers/instagram-clone.jpg",
  },
  {
    title: "News reader",
    summary: "A Flask application that shows stories from the News API.",
    repo: "https://github.com/JoeGakumo21/Newspaper-App-Flask",
    cover: "/images/covers/news-reader.jpg",
  },
  {
    title: "One-minute pitches",
    summary: "A Flask application for one-minute pitches grouped by category, with votes and comments.",
    repo: "https://github.com/JoeGakumo21/pitch-generator-app",
    cover: "/images/covers/pitches.jpg",
  },
  {
    title: "Personal blog",
    summary: "A Flask blog for posts, comments, and a random quote. The README identifies the author as a Moringa School student.",
    repo: "https://github.com/JoeGakumo21/Personal-Blog",
    cover: "/images/covers/personal-blog.jpg",
  },
  {
    title: "GitHub search",
    summary: "An Angular site that lists a person’s public repositories from a GitHub username.",
    repo: "https://github.com/JoeGakumo21/Github-Search",
    live: "https://joegakumo21.github.io/Github-Search/",
    cover: "/images/covers/github-search.jpg",
  },
  {
    title: "Movie watchlist",
    summary: "A Flask application described as a search for upcoming, trending, and newly released movies.",
    repo: "https://github.com/JoeGakumo21/Movie-Watchlist",
    cover: "/images/covers/movie-watchlist.jpg",
  },
]

export function projectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
