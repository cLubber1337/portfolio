import { Navbar } from '@/components/Navbar/Navbar.tsx'
import { About } from '@/sections/About'
import { Home } from '@/sections/Home/Home.tsx'
import { Projects } from '@/sections/Projects'

export function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  )
}
