import React, { Component } from 'react'
import {Prompt} from 'react-router-dom'

export default class Register extends Component {
  state = {
    status: true,
  }

  handleSubmit =() => {
    this.setState({status:false});
  }
  
  
  
  
  
  render() {
    return (
      <div className='container'>
        <h3> Đăng Ký </h3>
        <div className='form-group'>
          <p> Tài Khoản </p>
          <input className='form-control' id='taiKhoan' />
        </div>

        <div className='form-group'>
          <p> Mật Khẩu </p>
          <input className='form-control' id='matKhau' />
        </div>

        <div className='form-group'>
           <button onClick={() => {
             this.handleSubmit()
           }} className='btn btn-success' > Đăng Ký </button>
        </div>
        <Prompt when = {this.state.status} message={location => ('Bạn có muốn rời khỏi trang ?')}/>
      </div>
    )
  }
}
