import React, { Component } from 'react'


/* Cách 1: gọi trực tiếp bên trong button  
<button className='btn btn-success' onClick={() =>{let newFSize = this.state.fSize + 5;
    this.setState({fSize:newFSize})}}> + </button>
    */


/* Cách 2: gọi hàm từ bên ngoài (code sẽ clean hơn đỡ nhức mắt/ là phương pháp tối ưu)
 changFontSize = (newFSize) => {
        this.setState({fSize: this.state.fSize + newFSize})
    }

    rồi gán ngược lại vào bên trong button
<button className='btn btn-success' onClick={() => {this.changFontSize(5)}}> + </button>
*/

export default class TangGiamFontSize extends Component {
    state = {
        fSize: 15 // state fontSize là number
    }

    changFontSize = (newFSize) => {
        this.setState({fSize: this.state.fSize + newFSize})
    }
  
    render() {
    return (
        <div>
        <h3> Bài tập tăng giảm font-size </h3>
      <p style={{fontSize: `${this.state.fSize}px`}}> Học Lập Trình</p>

      <button className='btn btn-success' onClick={() => {this.changFontSize(5)}}> + </button>


      <button className='btn btn-success ml-2'  onClick={() =>{{this.changFontSize(-5)}}}> - </button>
      </div>
    )
  }
}
