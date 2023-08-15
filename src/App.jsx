import Login from "./pages/account/Login";
import Home from "./pages/home/Home";
import {Route,Routes} from "react-router-dom"
function App() {
  return (
  <>
  <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
  </Routes>
      
  </>
  );
}

export default App;
