import Header from "./components/Header"
function App(){
  const college = "MIT Loni Pune"
  return (
    <>
    <Header />
    <h2> My first react app</h2>
    <p> Is react easy?</p>
    {5+7}
    <h3> I study in {college}</h3>
    </>
  )
}

export default App