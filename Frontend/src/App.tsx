import Button from "./components/Button"


const App = () => {
  return (
    <Button text={"Hello"} size="sm" variant={"primary"} onClick={() => {console.log("Hello")}}/>
  )
}

export default App