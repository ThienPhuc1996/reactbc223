import React, { Component } from 'react'

// Cách để import file css
// Cách 1 (Được xài nhiều nhất): import đường dẫn css -> ảnh hưởng tới toàn bộ ứng dụng có trùng tên class
//import './Style.css'


// Cách 2: import module css (Chỉ ảnh hưởng tới nơi impoet module vào code)

// ngay tên file thêm vào .module (vd: tenfile.module.css)
// VD: <p className={style['text-red']}> Hello World </p>

// có thể thêm class bên trong style = cách biến thành string template
//VD: <p className={`p-6 {$style['text-red']} bg-light`}> Hello 


// Cách 3: import css cho từng thẻ

import style from './Style.module.css';

export default class StyleComponent extends Component {
  render() {
      let status = true;
      let classStyle = status ? 'text-green' : 'text-red';
    return (
      <div>
          <h3> StyleComponent  </h3>
      <p className='text-red'> Hello World</p>

      <p className={`p-5 ${style[classStyle]} bg-dark`}> Hello World </p>

      <p style={{backgroundColor:'#000',color:'green', padding:'15px'}}> Hello World </p>
      </div>
     
    )
  }
}
