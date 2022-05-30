import React from 'react'
import Show from "./components/Show";
import Cart from './components/Cart'
import Products from "./components/Products"
import MyNavBar from "./components/MyNavBar";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Paypage from "./components/Paypage";



export default function App() {
  return (
    <div className="App">
<MyNavBar/>
 <Cart/>
 
 <Routes>
 <Route exact path="/" element={<Home/>}/>
 <Route exact path="/Products" element={<Products/>}/>
        <Route exact path="/show" element={<Show/>}/>
        <Route exact path="/Paypage" element={<Paypage/>}/>
      </Routes>
     


    </div>
  );
}