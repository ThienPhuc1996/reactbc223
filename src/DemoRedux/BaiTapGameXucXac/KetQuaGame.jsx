import React, { Component } from 'react'
import { connect } from 'react-redux'

export class KetQuaGame extends Component {
  render() {
      console.log('props',this.props);
      let {banChon,soBanThang,tongSoBanChoi} = this.props;
      
    return (
      <div className='container text-center'>
          <div>
              <p className='display-4'>
                  Bạn Chọn: <span className='text-warning'> {banChon ? 'Tài' : 'Xỉu'} </span>
              </p>
          </div>

          <div>
              <p className='display-4'>
                  Tổng số bàn thắng: <span className='text-warning'> {soBanThang} </span>
              </p>
          </div>

          <div>
              <p className='display-4'>
                  Tổng số bàn chơi: <span className='text-warning'> {tongSoBanChoi} </span>
              </p>
          </div>

          <div>
              <button className='btn btn-success'>
                  <div className='p-3 display-4 bg-success text-white'> Play Game </div>
              </button>
          </div>
      </div>
    )
  }
}

// () => {return {} } tương đương () => ({})
const mapStateToProps = (rootReducer) => ({

    banChon: rootReducer.gameXucXacReducer.banChon,
    soBanThang: rootReducer.gameXucXacReducer.soBanThang,
    tongSoBanChoi: rootReducer.gameXucXacReducer.tongSoBanChoi
}) 

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaGame)