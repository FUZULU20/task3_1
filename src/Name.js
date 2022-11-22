import React, { Component} from "react";

export default class Name extends Component{
  render(){
    return(
      <>
      <p>AD: {this.props.ad} </p>
      <p>SOYAD: {this.props.soyad}</p>
      </>
    )
  }
}