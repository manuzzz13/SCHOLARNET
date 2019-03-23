import React, { Component } from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import './Signup.css';

class Signup extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      email:'',
       name:'',
      password:'',
    
      redirect:false
    }
    this.signup=this.signup.bind(this);
    this.onChange=this.onChange.bind(this);
      }
  
  signup(){
    if(this.state.username && this.state.password){
      PostData('Signup',this.state).then((result)=>{
        let responseJSON =result;
        if(responseJSON.sponsorData){
        sessionStorage.setItem('sponsorData',responseJSON);
        this.setState({redirect:true});
        console.log("Home Page");
        }
        else {
          console.log("Signup error");
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
<h5>Sign Page</h5>
<label>Username:</label>
<input type="text" name="username" placeholder="Eg.chandler123" onChange={this.onChange}/>
<label>Email:</label>
<input type="email" name="email" placeholder="Eg.chandler123@gmail.com" onChange={this.onChange}/>
<label>Name:</label>
<input type="text" name="name" placeholder="Eg.Chandler Bing" onChange={this.onChange}/>
<label>Password:</label>
<input type="password" name="password" placeholder="Enter correct password" onChange={this.onChange}/>
<input type="submit" value="Sign Up" className="button" onClick={this.signup}/>
<a href="/Login">Login</a>
</div>
</div></div>
    );
  }
}

export default Signup;
