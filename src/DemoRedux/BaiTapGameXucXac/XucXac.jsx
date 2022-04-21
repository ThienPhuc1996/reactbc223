import React, { Component } from 'react'
import { connect } from 'react-redux'

export class XucXac extends Component {
  render() {
    return (
      <div className='container'>
          <div className='row text-center'>
              <div className='col-4'>
                  <button className='btn btn-danger'>
                      <div className='display-4 p5 text-white bg-danger' onClick={() => {
                        // Tạo ra action
                        const action = {
                          type:'DAT_CUOC',
                          banChon: true
                        };
                        // Sử dụng this.prop.dispatch để gửi action lên reducer
                        this.props.dispatch(action);
                      }}> Tài </div>
                  </button>
              </div>

              <div className='col-4'>
                {this.props.mangXucXac.map((XucXac,index) => {
                  return  <img key={index} src={XucXac.hinhAnh} alt='...' width={50} height={50}/>
                })}
                
              </div>

              <div className='col-4'>
                  <button className='btn btn-success'>
                      <div className='display-4 p5 text-white bg-success' onClick={() => {
                        // Tạo ra action
                        const action = {
                          type:'DAT_CUOC',
                          banChon: false
                        };
                        // Sử dụng this.prop.dispatch để gửi action lên reducer
                        this.props.dispatch(action);
                      }}> Xỉu </div>
                  </button>
              </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mangXucXac: state.gameXucXacReducer.mangXucXac
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(XucXac)

// Có 2 cách để đưa action lên reducer (Chỉ dc chọn 1 trong 2)
// Sử dụng this.props.dispatch (lưu ý component connect với redux mới có props này)
// Định nghĩa hàm mapDispatchToProps