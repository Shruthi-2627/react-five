import React, { PureComponent } from 'react'
import '../App.css'


export default class Purefun extends PureComponent {
    constructor(){
        super();
        this.state={
            count:1
        }
    }
  render() {
    console.log("re-rendering");
    return (
      <div className='App'>
            Count : {this.state.count}

      </div>
    )
  }
}