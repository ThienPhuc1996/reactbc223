import React, { Component } from 'react'
import CardProducts from './CardProducts'

export default class DemoProp extends Component {
  
  product1 = {
      id: 1,
      name: 'Iphone',
      price: 1000,
      img: "https://picsum/photo/id/1/200"
  }
  
  product2 = {
    id: 2,
    name: 'Bphone',
    price: 2000,
    img: "https://picsum/photo/id/2/200"
}
    render() {
    return (
      
          <div className='container'>
              <div className='d-flex'>
                  
              <div className='w-25'>
                  <CardProducts product = {this.product1}/>
              </div>

              <div className='w-25 ml-5'>
                  <CardProducts product = {this.product2}/>
              </div>

              
              </div>
              </div>
          
    )
  }
}
