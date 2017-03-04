import React from "react";
import Header from "./Header";
import Footer from "./Footer";


export default class Layout extends React.Component{
  render() {
    console.log("hello")

    return (

    <div>
      <Header/>
      <div > This is our app body </div>
      <Footer/>
    </div>

    );
  }
}
