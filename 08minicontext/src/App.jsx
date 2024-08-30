import './App.css'
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContectPovider from "./context/UserContextProvider"

function App() {
  

  return (
    <UserContectPovider>
      <h1>Learning Context API in React</h1>
      <Login/>
      <Profile/>
    </UserContectPovider>
  )
}

export default App
