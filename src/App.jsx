import { useState } from 'react'
import MobileMenu from "./Components/MobileMenu";
import Navbar from "./Components/Navbar"
import ThemeToggle from "./Components/ThemeToggle"



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={`min-h-screen transition-opacity duration-700` }>
        <ThemeToggle />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
      </div>
    </>
  )
}

export default App
