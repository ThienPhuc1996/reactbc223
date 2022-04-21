// rcc: cú pháp tạo nhánh react class component

import React, { Component } from 'react'
// Viết hoa tên file component
export default class CardRCC extends Component {
  
  // Phương thức render sẽ là phương thức định nghĩa giao diện của thẻ này
  //Nội dung component tạo ra phải dc bao phủ bởi 1 thẻ
    render() {
    return (
      <div className='card w-25'>
          <img src='http://i.pravatar.cc?u=1' alt='...'></img>
          <div className='card-body'>
              <p> Iphone </p>
              <p> 1000</p>
              <button className='btn btn-success'> Thêm vào giỏ hàng </button>
          </div>
      </div>
    )
  }
}
