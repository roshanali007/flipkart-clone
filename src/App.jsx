
import {  Routes, Route,Navigate} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Search from "./header/Search";
import Food_health from "./pages/Food_health";
import Filter from "./header/Filter";
import SingleProduct from "./pages/SingleProduct";
import BuyProduct from "./pages/BuyProduct";


function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/food_health" element={<Food_health/>}/>
          <Route path="/food_health/filter" element={<Filter/>}/>
          <Route path="/food_health/SingleProduct" element={<SingleProduct/>}/>
          <Route path="/food_health/BuyProduct" element={<BuyProduct/>}/>
        </Routes>
  )
}

export default App