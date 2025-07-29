import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

function App() {

  const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('user:token') != null ;
    
    if (!isLoggedIn) {
      return <Navigate to={'/signin'} />;
    }
    
    return children;
  };

  const PublicRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('user:token') != null;
    
    if (isLoggedIn) {
      return <Navigate to={'/'} />;
    }

    return children;
  };

  return (
    <div className="bg-[#98f0e84d] h-screen flex justify-center items-center">
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/signup" element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        } />
        <Route path="/signin" element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        } />
      </Routes>

    </div>
  );
}

export default App;