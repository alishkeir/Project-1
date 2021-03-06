import React from 'react';
import { Redirect } from 'react-router-dom';
import "./login.css"
import Particles from "react-particles-js";
import logo from "../../indie_bite-01.png"



class login extends React.Component{

    state ={
        autho: 0,
        err : ""
    }

    loginCheck = async (e)=>{
        e.preventDefault();
        
        const url = "http://localhost:8001/login"
        const body = {
            adminName : e.target.adminName.value ,
            adminPassword : e.target.adminPassword.value
        }
       
      

        const response= await fetch(url,{method:'POST',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },body:JSON.stringify(body)}).catch(function (error) {
            console.log(error );
          });
          const result = await response.status;
                this.setState({autho:result})
          if(result !== 200 ){
            alert("Uesr name Or password is wrong")
          }
          
           
    }




    render(){
        if(this.state.autho===200){
            return(
                <Redirect to= './dashboard'/> 
            )
        }
        return(
            <div className="login">
              <img src={logo} />
            <form onSubmit = {this.loginCheck} className="loginForm"><br></br>
                
                <input type="text" name ="adminName" placeholder="Username" className="field" />
                <input type="password" name ="adminPassword" className="field" placeholder="Password" />
                <button type = "submit" className="submitButton" className="subButton" ><span>Login</span></button>

            </form>
            <div className="particles-login">
          <Particles />
        </div>
            </div>
        )
    }

}
export default login