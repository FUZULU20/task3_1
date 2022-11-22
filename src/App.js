import React,{Component} from "react";
import Profile from "./Profile";

export default class App extends Component{
    render(){
        return (
            <>
            <Profile ad="Fizuli" soyad="Quliyev" email="guliyeffizuli20" adres="Bine" info="Çalışqan" />
            <Profile ad="Balash" soyad="Huseynov" email="huseynovbalash07" adres="Memar Ecemi.M" info="Tenbel" />
            <Profile ad="Orxan" soyad="Ismayilov" email="orxanismayilov" adres="Genclik.M" info="Oxuyan" />
            <Profile ad="Mumin" soyad="Hemidov" email="hemidovmumin28" adres="Ehmedli.M" info="Starosta" />
            </>
        )
    }
}