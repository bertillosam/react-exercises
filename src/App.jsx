import Navbar from "./Components/Navbar"
import ThemeToggle from "./Components/ThemeToggle"


function App() {
  
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        <Navbar />
      </div>
    </>
  )
}

export default App
