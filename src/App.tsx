import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "./components/Layout.tsx"
import { About } from "./pages/About.tsx"
import { Contact } from "./pages/Contact.tsx"
import { Home } from "./pages/Home.tsx"
import { NotFound } from "./pages/NotFound.tsx"
import { ProjectPage } from "./pages/ProjectPage.tsx"
import { Services } from "./pages/Services.tsx"
import { Work } from "./pages/Work.tsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<ProjectPage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
