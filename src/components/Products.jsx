import React, { useState } from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, productslice } from '../slices/productslice';

const { Meta } = Card;

const Products = () => {

  const data=useSelector(state=>state.productslice.products)
  console.log(data)
    const dispatch=useDispatch();
   const addToCarts=(prod)=>{
     dispatch(addToCart(prod))
   }
   
  return (
    <div style={{ display:'flex',flexDirection:'column'}}>

<Row>
        {
            data.map((ele,id)=>(
                <Col >
<div >
<Card 
    hoverable
    style={{height:'200px',width:'200px' ,display:'flex' }}
   
    cover={<img alt="example" src={ele.imgdata} />}
  >
    <Meta title={ele.name}  description={ele.price} /><br/>
    <Button type="primary" onClick={()=>addToCarts(ele)}>Add To Cart</Button>
  </Card>
  </div>

  </Col>
            ))
        }
        
      
    </Row>  

    </div>
  )
}

export default Products