import React, { useState } from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import productslice, { deletefromcart } from '../slices/productslice';
import { useDispatch, useSelector } from 'react-redux'

const { Meta } = Card;

const Paypage = () => {
  const data=useSelector(state=>state.productslice.cart)
  const price=useSelector(state=>state.productslice.totalPrice)
 
  return (
    <div>
      <h1 style={{paddingLeft:'10%',color:'red'}}>Your Bill:{price}</h1>
      <div style={{paddingLeft:'10%'}}>
      <Button type="primary" onClick={()=>alert("Have a great day!!!")}>Place Order</Button>
      </div>
    <div style={{paddingLeft:'400px',display:'flex',flexDirection:'column'}}>

     <h1>Order summary</h1><br/>
    
 
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
    
    </div>
  )
}

export default Paypage