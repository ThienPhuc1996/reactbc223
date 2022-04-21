import React, { Component } from 'react'

export default class 
 extends Component {
  handleLogin = () => {
      console.log('login')
      // this.props.history: tại vỉ dc load ra từ thẻ route
      let userName = document.querySelector('#username').value;
      let pass = document.querySelector('#password').value;
      if (userName === 'cybersoft' && pass === 'cybersoft'){
          alert('Đăng nhập thành công !');
          // Chuyển hướng trang
         this.props.history.push ('/profile');
        // this.props.history.replace('./profile');
         // replace: thay đổi route hiện tại = route khác

         // Đăng nhập thành công sẽ lưu thông tin user
         localStorage.setItem('username',userName);
      } else {
          alert ('Tài khoản mật khẩu ko đúng')
      }
  }
  
    render() {
    return (
      <div className='container'>
          <h3> Login </h3>
          <div className='form-group'>
              <p> User Name </p>
              <input className='form-control' id='username' name='username'/>
          </div>

          <div className='form-group'>
              <p> Password </p>
              <input className='form-control' id='password' name='password'/>
          </div>

          <div className='form-group'>
              <button className='btn btn-success' onClick={()=> {
                  this.handleLogin();
              }}> Login </button>
          </div>
         <button className='mt-2 btn btn-danger' onClick={() => {
             this.props.history.goBack();
         }} > Back </button>
      </div>
    )
  }
}
