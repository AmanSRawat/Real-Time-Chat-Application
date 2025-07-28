import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"

function App() {


  return (
    <div className="bg-[#98f0e84d] h-screen flex justify-center items-center">
      <Routes>
        <Route path="/signup" element = {<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path = '/' element = {<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
