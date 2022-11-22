import React, {Component} from "react";
import Address  from "./Address";
import Email from "./Email";
import Name from "./Name";
import PersonalInfo from "./PersonalInfo";
import "./index.css";

export default class Profile extends Component{
  render(){
    const {ad, soyad, email, adres, info}= this.props
    return(
      <div className="div_1">
        <Name ad={ad} soyad={soyad} />
        <Email email={email} />
        <Address adres={adres} />
        <PersonalInfo info={info} />
      </div>
    )
  }
}