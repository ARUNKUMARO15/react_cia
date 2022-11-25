import React from "react";
import './rgformc.css'

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    
  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please fill the username.";
      document.getElementById("name").style="border: 2px solid red"
    }
    

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
        document.getElementById("name").style="border: 2px solid red"
      }
    }

    if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "Invalid email";
      }
  
      if (typeof fields["emailid"] !== "undefined") {
        var pattern = new RegExp( /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "Invalid Email";
        }
      }


    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please fill the password.";
      document.getElementById("password").style="border: 2px solid red"
    }

    if (typeof fields["password"] !== "undefined") {
      if (fields["password"].match((/^[a-z]*$/))) {
        formIsValid = false;
        errors["password"] = "Your password is weak";
        document.getElementById("password").style="border: 2px solid red"
      }
      else if (fields["password"].match((/^[a-zA-Z ]*$/))) {
        formIsValid = false;
        errors["password"] = "Your password is Good";
        document.getElementById("password").style="border: 2px solid orange"
        document.getElementById("errorMsg").style="color:orange"
      }
      else if (fields["password"].match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)) {
        formIsValid = false;
        errors["password"] = "Your password is Strong";
        document.getElementById("password").style="border: 2px solid green"
        document.getElementById("errorMsg").style="color:  green"
      }
      else{
        formIsValid = false;
        errors["password"] = "Your Password is very Strong";
        document.getElementById("password").style="border: 2px solid green"
        document.getElementById("errorMsg").style="color:green"
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }

render() {
  return (
    <div id="Regif">   
    <div id="divbox">
      <h3>Registration page</h3>

      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label>Enter your username</label><br></br>
      <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} id="name" placeholder="your UserName"/>
      <div className="errorMsg">{this.state.errors.username}</div>
      <br></br>
      <label>Enter your email</label>
      <br></br>
      <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  id="email" placeholder="your Email"/>
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <br></br>
      <label>Enter your password</label><br></br>
      <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} id="password"  placeholder="your Password"/>
      <div className="errorMsg" id="errorMsgp">{this.state.errors.password}</div>
      <br></br>
      <input type="submit" className="button"  value="Register"/>

      </form>
  </div>
  </div>
    );
}

}

export default RegisterForm;