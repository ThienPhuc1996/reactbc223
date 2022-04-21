import React, { Component } from 'react'
import ChiTietSanPham from './ChiTietSanPham'
import GioHang from './GioHang'
import SanPham from './SanPham'

export default class 
 extends Component {
    arrPhone = [
            { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
            { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
            { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
      ]

      state = {
          spChiTiet : { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" },

          gioHang : [
           // {maSP:1, tenSP:'Iphone', hinhAnh: 'http://picsum.photo/200', giaBan:1000, soLuong:2},
          ]
      }

      tangGiamSoLuong = (maSPClick,soLuong) => { // 1 => nút +, -1 => nút -
        console.log(maSPClick,soLuong)

        // cách bt
        let gioHang = this.state.gioHang;
        //Cách bóc tách phần tử:  let {gioHang} = this.state;

        let spGH = gioHang.find(sp => sp.maSP === maSPClick);
        if (spGH){
          spGH.soLuong += soLuong;
          if (spGH.soLuong < 1){
            if (window.confirm('Bạn có muốn xóa sản phẩm này ko')){
              gioHang = gioHang.filter (sp =>sp.maSP !== maSPClick);
            }
            // Nếu user cancel => -- số lượng
            spGH.soLuong -= soLuong;
          }
        }
        // setState lại cho gioHang
        this.setState ({
          gioHang: gioHang
        })
      }


      xoaGioHang = (maSanPhamClick) => {
        console.log('maSanPhamCLick',maSanPhamClick);
        let gioHang = this.state.gioHang;
        // tìm ra so chứa mã click nút xóa

        let index = gioHang.findIndex (sp => sp.maSP === maSanPhamClick);
        if (index !== -1) {
          // Hỏi user trc khi thực hiện chức năng
         if(window.confirm('Bạn có muốn xóa ko')) 
          gioHang.splice(index,1);
        }
        //setState
        this.setState({gioHang:gioHang})
      } 

      // state đặt ở đâu thì hàm setState sẽ đặt tại đó
      themGioHang = (sanPhamCick) => { //spClick chưa có thuộc tính số lượng

        let sp = {...sanPhamCick,soLuong:1};
        console.log('spClick',sanPhamCick);
        let gioHang = this.state.gioHang;

        //gioHang.push(sp);
        // Check giỏ hàng đã có object sanPham đó chứa => nếu có thì tăng số lượng => chưa có thì push object vào gioHang

        let spGH = gioHang.find(sp => sp.maSP === sanPhamCick.maSP);
        if(spGH){
          spGH.soLuong += 1;
        }
        else{
          gioHang.push(sp);
        }


        // setState để thay đổi giỏ hàng
        this.setState({
          gioHang: gioHang
        })

      }

       // Thiết kế giao diện
      // binding dữ liệu arrPhone lên giao diện
      renderProduct = () => {
          return this.arrPhone.map((phone,index) => {
           return  <div className='col-4' key={index}>
          <SanPham phone={phone} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang}/>
        </div>
          })
      }

     xemChiTiet = (sanPhamClick) => {
       console.log('sanPhamCick',sanPhamClick)
       // setState thay đổi spChiTiet
       this.setState ({
           spChiTiet: sanPhamClick
       })
     }


     
    render() {
        let {maSP, tenSP, giaBan, hinhAnh, heDieuHanh, manHinh, ram, rom, cameraTruoc, cameraSau} = this.state.spChiTiet;
    return (
      <div className='container'>
        <h3 className='mt-5'> Giỏ hàng</h3>
        <GioHang tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang}/>


        <h3 className='text-center'> Danh Sách sản phẩm </h3>
         <div className='row'>
           {this.renderProduct()}

          {/*
           <div className='col-4'>
        <div className='card'>
            <img src='./img/applephone.jpg' alt='..' className='w-full' height={300}/>

            <div className='card-body'>
                <p> Iphone </p>
                <p> 27,000.000 </p>
                <button className='btn btn-success'> Xem chi tiết</button>
            </div>
        </div>
        </div>

        <div className='col-4'>
        <div className='card'>
            <img src='./img/applephone.jpg' alt='..' className='w-full' height={300}/>

            <div className='card-body'>
                <p> Iphone </p>
                <p> 27,000.000 </p>
                <button className='btn btn-success'> Xem chi tiết</button>
            </div>
        </div>
        </div>

        <div className='col-4'>
        <div className='card'>
            <img src='./img/applephone.jpg' alt='..' className='w-full' height={300}/>

            <div className='card-body'>
                <p> Iphone </p>
                <p> 27,000.000 </p>
                <button className='btn btn-success'> Xem chi tiết</button>
            </div>
        </div>
        </div>*/ }

        </div>
         <ChiTietSanPham spChiTiet={this.state.spChiTiet}/>
      </div>
    )
  }
}
