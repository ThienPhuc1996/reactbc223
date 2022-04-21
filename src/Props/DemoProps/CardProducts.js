import React, { Component } from 'react'

export default class CardProducts extends Component {
  render() {
      // this.prop: là thuộc tính có sẵn của component để nhận giá trị từ component cha truyền vào (là component nào đang sử dung thẻ này render)
      // this.props ko thể gán lại giá trị (read-only), chỉ nhận giá trị và binding ra và ko cho thay đổi
      // Props phải thống nhất giữa các thẻ component để tái sử dụng 
      let {product} = this.props;
    return (
      <div className='card'>
        <img src={this.props.product} alt='...' />

        <div className='card-body'>
            <p> {product.name} </p>
            <p> {product.price} </p>
            <button className='btn btn-success'> Đặt Mua </button>
        </div>
    </div>
    )
  }
}
