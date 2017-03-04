import React from "react";



export default class Footer extends React.Component{
  render(){
    return(
      <div className="footerbox">

          <p> This APP was created to learn: express server, connection MySQL database, doing API calls </p>
          <p> You can check it on <a href="https://github.com/yuriykots/todo_list">GitHub</a> </p>
      </div>
    )
  }
}
