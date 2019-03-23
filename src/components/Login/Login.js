import React, { Component } from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props){
super(props)
this.state={
  username:'',
  password:'',
  redirect:false
}
this.login=this.login.bind(this);
this.onChange=this.onChange.bind(this);
  }

  login(){
    if(this.state.username && this.state.password){
      PostData('Login',this.state).then((result)=>{
        let responseJSON =result;
        if(responseJSON.sponsorData){
        sessionStorage.setItem('sponsorData',responseJSON);
        this.setState({redirect:true});
        console.log("Home Page");
        }
        else {
          console.log("Login error");
        }
            });
    }
  }
  onChange(e){
   this.setState({[e.target.name]:'e.target.value'});
   console.log(this.state);
  }
  render() {
    if(this.state.redirect){
return (<Redirect to={'/HomePage'}/>)
    }

    if(sessionStorage.getItem("sponsorData")){
      return (<Redirect to={'/HomePage'}/>)
          }




    return (
      <div>
      <div className="row small-up-2 medium-up-3 large-up-4">
<div className="column bodyPart" >
<h5>Login Page</h5>
<label>Username:</label>
<input type="text" name="username" placeholder="Eg.Chandler Bing" onChange={this.onChange}/>
<label>Password:</label>
<input type="password" name="password" placeholder="Enter correct password" onChange={this.onChange}/>
<input type="submit" value="Login" className="button" onClick={this.login}/>
<a href="/Signup">Registration</a>
</div>
</div></div>
    );
  }
}

export default Login;
