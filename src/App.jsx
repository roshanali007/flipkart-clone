
import {  Routes, Route,Navigate} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Search from "./header/Search";
import Food_health from "./pages/Food_health";

function App() {
 

  return (
        <Routes>
          <Route path="/flipkart-clone" element={<Home/>}/>
          <Route path="/flipkart-clone/search" element={<Search/>}/>
          <Route path="/flipkart-clone/food_health" element={<Food_health/>}/>
        </Routes>      
  )   
}

export default App
   