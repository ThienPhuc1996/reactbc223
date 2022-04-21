import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Profile extends Component {
  render() {

    if (localStorage.getItem('userName')) {
      alert ('Bạn chưa đăng nhập ko thể vào trang !')
      return <Redirect to = "/login"/>
    }
    return (
      <div>Profile</div>
    )
  }
}
