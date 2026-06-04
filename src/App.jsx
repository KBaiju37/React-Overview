import Header from "./components/Header"
import Footer from "./components/Footer"
import Greet from "./components/Greet"
import './App.css'
function App(){
  const college = "MIT Loni Pune"
  const speed = 33
  return (
    <>
    <Header />
    <Greet name = "students"/>
    <h2> My first react app</h2>
    <p> Is react easy?</p>
    {5+7}
    <h3> I study in {college}</h3>
    {speed <50 ? <h1> You are safe</h1> : <h3> Its Dangerous</h3> }
     <Footer/>
    </>
  )
}

export default App