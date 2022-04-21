import React, { Component } from 'react'

export default class ProductsItem extends Component {
  render() {
      // Phân biệt state và props
      /*
       + Giống nhau: 2 thuôc tính có sẵn của react class component để binding dữ liệu lên giao diện (html)
       + Khác nhau: 
          - state dùng để chứa dữ liệu thay đổi trên giao diện từ 1 event (1 xử lý từ user).
          - state có thể gán lại giá trị thông qua phương thức this.setState
          - props là thuộc tính chứa giá trị từ component cha truyền vào. this.props ko thể thay đổi giá trị (read-only).
      */
     let {prod} = this.props
      // ES5
      // let prop = this.prop.prop
    return (
      <div className='card'>
          <div className='d-flex justify-content-center'>
          <img src={prod.image} alt='..' width={200}/>
          </div>
          <div className='card-body'>
              <p> {prod.name} </p>
              <p> {prod.price} </p>
              <button className='bg-dark text-white'> + Add to cart </button>
          </div>
          </div>
    )
  }
}
