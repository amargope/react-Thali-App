import React from 'react'
import {ShoppingCartOutlined} from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { productslice } from '../slices/productslice'
import { useNavigate } from 'react-router-dom'



const Cart = () => {
    const carts=useSelector(state=>state.productslice)
    const cartdata=carts.cart;
    const products=carts.products;
  const id=carts.products.id;
  const navigate=useNavigate()

  const clickhandler=()=>{
    
    navigate("/show")
  }
  return (
    
      
    <div style={{paddingLeft:"90%" ,display:'flex' }}>

        <ShoppingCartOutlined style={{ fontSize: '86px', color: '#08c' }} onClick={clickhandler}/><span>{cartdata.length}</span>
    </div>
  )
}       

export default Cart