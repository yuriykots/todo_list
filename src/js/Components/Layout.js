import React from "react";
import Header from "./Header";
import Footer from "./Footer";


export default class Layout extends React.Component{
  render() {
    console.log("hello")

    return (

    <div>
      <Header/>
      <form action="/login" method="post">
          <div>
              <label> Email </label>
              <input type="text" name="username"/>
          </div>
          <div>
              <label> Password </label>
              <input type="text" name="password"/>
          </div>
          <div>
              <input type="submit" value="Log In"/>
          </div>
      </form>
      <Footer/>
    </div>

    );
  }
}
