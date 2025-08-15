import { useState } from 'react'
import MobileMenu from "./Components/MobileMenu";
import Navbar from "./Components/Navbar"
import ThemeToggle from "./Components/ThemeToggle"
import Home from './Sections/Home';



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={`min-h-screen transition-opacity duration-700` }>
        <ThemeToggle />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />        
      </div>
    </>
  )
}

export default App
