import React, { Component } from 'react'

export default class HandleEvent extends Component {
 
    showMess = () => {
        alert('Hello World')
    }
 
    sayHello = (name) => {
        alert('hello !!! ' + name)
    }
 
 
    render() {
    return (
      <div className='container'>
          <button onClick={this.showMess}> Click Me! </button>
          
          
          <button onClick={() => {
        alert('Hello World')
    }}> Click Me! </button>
      <hr/>

      <button onClick={this.sayHello.bind(this,'Tùng')}> Say Hello </button>

      <button onClick={() => {
          this.sayHello('Khải');
          //Gọi nhiều hàm hơn)
      }}> Say Hello </button>
      </div>
    )
  }
}

/*
function main (){
    return function(){
        alert(123);
    }
}
let result = main();
result();
*/