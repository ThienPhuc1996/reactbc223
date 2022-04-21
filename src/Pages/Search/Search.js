import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Search extends Component {
  render() {
    return (
      <div className='container'>
          <h3> Search </h3>
          <NavLink to={'/search?k=123'}> Link Search </NavLink>
          <h3> search: {this.props.location.search.split('=')[1]}</h3>

          <div>
              <input className='form-control w-25' id='txtKey'/>
              <button onClick={() => {
                  let tuKoha = document.querySelector('#txtKey').value;
                  this.props.history.push(`/search?k=${tuKoha}`);
              }} className='btn btn-primary'> Search </button>
          </div>
      </div>
    )
  }
}
// split : a,b,c,d => split (',') => arrResult => lấy sau dấu = 