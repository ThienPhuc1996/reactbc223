import React, { Component } from 'react'

export default class DataBinding extends Component {

    product = {
        id:1,
        name:'Samsung',
        price:1000,
        img: 'http://i.pravatar.cc?u=77'
    }


    renderCard = () => {

        return 'Hello World'; //Nội dung trả về hoải là string,number, component (thẻ bao phủ)
    }

    renderMessage = () => {
        return ( // Nội dung return của hàm phải chứa trong 1 thẻ bao phủ ()
        <div className='card w-25'>
        <img src={this.product.img} alt='...'></img>
        <div className='card-body'>
            <p> {this.product.name} </p>
            <p> {this.product.price} </p>
            <button className='btn btn-danger'> Add to cart</button>
        </div>
    </div>
        )
    }


  render() {
      let title = 'CyberSoft'
    return (
      <div className='container'>
          <p id='title'> {title} </p>
          <hr/>
         {this.renderMessage()}
          <hr/>
          <p> Lời Chào {this.renderCard()} </p>

</div>
    )
  }
}
