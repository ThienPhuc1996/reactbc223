import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
  
  state = {
      imgSrc: './img/products/black-car.jpg'
  }
  
  changeColor = (newColor) => {
      this.setState({
          imgSrc: `./img/products/${newColor}-car.jpg`
      })
  }
  
  
  
    render() {
    return (
<div className='container'>
          <h3> Bài tập chọn xe </h3>
              <div className='row'>
                  <div className='col-6'>
        <img src={this.state.imgSrc} alt='...' className='w-100'></img>
        </div>
        

        <div className='col-6'>
            <div className='row'>

                <div className='col-3'>
                <button className='btn text-white' style={{background:'black'}} onClick={() => {this.changeColor('black')}}>Black Car</button>
                </div>

                <div className='col-3'>
                <button className='btn text-dark' style={{background: 'red'}} onClick={() => {this.changeColor('red')}}>Red Car</button>
                </div>

                <div className='col-3'>
                <button className='btn text-dark' style={{background:'silver'}} onClick={() => {this.changeColor('silver')}}>Silver Car</button>
                </div>

                <div className='col-3'>
                <button className='btn text-dark' style={{background:'#EEE'}} onClick={() => {this.changeColor('steel')}}>Steel Car</button>
                </div>
               
            </div>
        </div>
</div>
</div>

    )
  }
}
