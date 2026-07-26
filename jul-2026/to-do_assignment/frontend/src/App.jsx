import { Route, Routes } from "react-router-dom"
import Home from "./features/to_do/pages/Home"
import Completed from "./components/completed"


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path= "/completed" element = {<Completed />} />
    </Routes>
    </>
  )
}

export default App