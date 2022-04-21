import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "25px" }}>
            Ghế Đã Đặt
          </span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "25px" }}>
            Ghế Đang Chọn
          </span>
          <br />
          <button style={{ marginLeft: 0 }} className="ghe"></button>{" "}
          <span className="text-light" style={{ fontSize: "25px" }}>
            Ghế Chưa Chọn
          </span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{fontSize:'25px'}}>
               <th>Số Ghế</th>
               <th>Giá</th>
               <th></th>
              </tr>
            </thead>

            <tbody className="text-warning">
           {this.props.danhSachGheDangDat.map((gheDangDat,index) => {
              return <tr key={index}>
                <td> {gheDangDat.soGhe} </td>
                <td> {gheDangDat.gia.toLocaleString()} </td>

                <td> <button onClick={() => {
                  this.props.dispatch({
                    type: 'HUY_GHE',
                    soGhe: gheDangDat.soGhe
                })
                }} className="btn btn-danger"> Hủy </button> </td>
                
              </tr>
           })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td> Tổng Tiền </td>
                <td> {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                  return tongTien += gheDangDat.gia
                },0
                ).toLocaleString()} </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat
  }
}

export default connect(mapStateToProps)(ThongTinDatGhe);