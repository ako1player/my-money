import { Routes, Route, Navigate, BrowserRouter} from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Navbar from "./components/Navbar"
import { useAuthContext } from "./hooks/useAuthContext"

function App() {
  const {authIsReady, user}:any = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={user ?  <Home /> : <Navigate to="/login"/>} />
            <Route path='/login' element={user ? <Navigate to="/" /> : <Login />}/>
            <Route path='/signup' element={user ? <Navigate to="/" /> : <Signup />}/>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
