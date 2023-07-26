import { Navbar } from '@/components/Navbar/Navbar.tsx'
import { About } from '@/sections/About'
import { Home } from '@/sections/Home/Home.tsx'

export function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Navbar />
        <Home />
        <About />
      </div>
    </div>
  )
}
