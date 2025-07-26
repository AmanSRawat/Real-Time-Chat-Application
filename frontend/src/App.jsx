import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

function App() {


  return (
    <div className="bg-[#d5eae84d] h-screen flex justify-center items-center">
      <Routes>
        <Route path="/signup" element = {<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default App
