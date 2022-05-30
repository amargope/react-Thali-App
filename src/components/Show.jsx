import React, { useState } from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import productslice from '../slices/productslice';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

const { Meta } = Card;

const Show = () => {
  const data=useSelector(state=>state.productslice.cart)
  const price=useSelector(state=>state.productslice.totalPrice)
  //const [flag,setFlag]=useState('small')
 
  const navigate=useNavigate();
  const dispatch=useDispatch();
  

const move=()=>{
  navigate("/Paypage")
}
  const chekout=()=>{
    if(data.length<2)
    {
      alert("Cart must have atleast 2 items")
     
    }
    else{
      move()
    }
  }

  return (
    <div >
       <div style={{paddingLeft:'10%',paddingTop:'0px'}}>
        <h1  style={{paddingLeft:'40%',paddingTop:'0px',color:'red'}}>Your Cart</h1>
        <Button type="primary" onClick={chekout}>Checkout</Button></div>
      <h1 style={{paddingLeft:'10%',color:'red'}}>Your Bill:{price}</h1>
   
   
     
   
    
 
<Row>
        {
         
            data.map((ele,id)=>(
                <Col >
                    <div >
                    <Card 
                        hoverable
                        style={{height:'400px',width:'400px' ,display:'flex' }}
                        cover={<img alt="example" src={ele.imgdata} />}
              
                      >
                        <Meta title={ele.name}  description={ele.price} /><br/>
            
                      </Card>
                      
                      </div>
                  </Col>
            ))
            
          
            
        }
        
     
    </Row>  
  

    </div>
   
    
  )
}

export default Show