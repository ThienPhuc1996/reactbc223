import React, { Component } from 'react'
// Kết nối redux
import {connect} from 'react-redux';

class TangGiamSoLuong extends Component {
 // state = {number:1}
  render() {
      console.log(this.props);
    return (
      <div className='container'>
          <p>{this.props.number}</p>
          <button onClick={()=> {this.props.tangGiamSoLuong(1)}}> + </button>

          <button onClick={()=> {this.props.tangGiamSoLuong(-1)}}> - </button>
      </div>
    )
  }
}


// lấy dữ liệu từ redux về 

const mapStateToProps = (rootReducer) => {//state tổng ứng dụng

    return {   // Tạo ra các props cho component là giá trị
        number : rootReducer.stateNumber
    }
}

//Định ngĩa 1 hàm mapDispatchToProps => nhiệm vụ: tạo ra các props cho component là hàm
const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamSoLuong: (soLuong) => {
      //console.log(soLuong)
      // Để gửi dữ liệu lên redux (action)
      const action = {
        type: 'TANG_GIAM_SO_LUONG',// redux bắt buộc phải có
        soLuong:soLuong
      }
      // Đưa dữ liệu lên redux (dispatch)
      dispatch(action);
    }
  }
}

// Cú pháp để connect giữa react component và redux (export default connect ()() )

export default connect(mapStateToProps, mapDispatchToProps) (TangGiamSoLuong);

// Hàm định nghĩa props gửi dữ liệu lên store
{/*const mapDispatchToProps = (dispatch) => {
    return {
        TangGiamSoLuong: () => {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TangGiamSoLuong); */}

