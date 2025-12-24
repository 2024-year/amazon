import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Signup from './Pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetal from './Pages/ProductDetail/ProductDetal'
function Routering() {
  return (
 <Router>
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Signup/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/order' element={<Orders/>}/>
        <Route path='/category/:catagoryName' element={<Results/>} />
        <Route path='/products/:productId' element ={<ProductDetal/>}/>
        <Route path='/Cart' element={<Cart/>}/>
    </Routes>
 </Router>
  )
}

export default Routering
