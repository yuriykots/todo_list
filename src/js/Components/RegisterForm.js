import React from "react";

export default class RegisterForm extends React.Component{
  render(){
    return(
      <div>
        <form action="/register" method="post">
            <div>
                <label> Email </label>
                <input type="text" name="username"/>
            </div>
            <div>
                <label> Password </label>
                <input type="text" name="password"/>
            </div>
            <div>
                <input type="submit" value="Register"/>
            </div>
        </form>
      </div>
    )
  }
}
