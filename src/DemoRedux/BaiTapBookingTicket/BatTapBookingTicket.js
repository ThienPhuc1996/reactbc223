import React, { Component, Fragment } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import dangSachGheData from './danhSachGhe.json'
import HangGhe from './HangGhe'


export default class BatTapBookingTicket extends Component {
    renderHangGhe = () => {
     return dangSachGheData.map((hangGhe,index) => {
         return <div key={index} >
             <HangGhe hangGhe={hangGhe} soHangGhe={index}/>

         </div>
     })
      
    }
  
    render() {
    return (
      <div className='bookingMovie' style={{position:'fixed', width:'100%', height:'100%', backgroundImage:"url('./img/BookingTicket/bgmovie.jpg')", backgroundSize:'100%'}}>
          <div style={{position:'fixed', width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.6)'}}></div>

          <div className='container-fluid'>
              <div className='row'>
                  <div className='col-8 text-center'>
                       <div  className='text-warning display-4 text-warning'> Đặt vé xem phim Cyber Learn</div>
                       <div className='mt-5 text-light' style={{fontSize:'25px'}}> Màn Hình </div>
                       <div className='mt-2' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                           
                       <div className='screen'></div>
                       </div>
                       {this.renderHangGhe()}
                  </div>

                  <div className='col-4'>
                  <div style={{fontSize:'35px'}} className='text-light mt-2'> Danh sách ghế bạn chọn </div>
                  <ThongTinDatGhe/>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
