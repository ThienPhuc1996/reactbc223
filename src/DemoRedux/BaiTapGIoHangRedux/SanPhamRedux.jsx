import React, { Component } from 'react'
import { connect } from 'react-redux';
class SanPhamRedux extends Component {
  render() {
      let {sanPham} = this.props;
    return (
        <div className='card'>
            <img src={sanPham.hinhAnh} alt='...' height={350}/>
            <div className='card-body'>
                <p> {sanPham.tenSanPham} </p>
                <p> {sanPham.giaBan} </p>
                <button onClick={() => {
                    this.props.themGioHang(sanPham);
                }} className='btn btn-danger'> Add To Cart </button> 
            </div>
        </div>
        
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) => {
             //console.log((sanPhamClick));
             let spGH = {...sanPhamClick, soLuong:1};
             // Tạo ra action gử lên redux
             const action = {
                 type: 'THEM_GIO_HANG',
                 spGH
             };
             dispatch(action);
        }
    }
}
 
export default connect (null,mapDispatchToProps)(SanPhamRedux);
