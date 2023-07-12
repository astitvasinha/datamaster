import logo from "./IMG (1).jpg"
import { Link } from "react-router-dom";
import "./SignIn.css"
import React from "react"
const SignIn = (props) => {
  return (
    <div>
      <div className="container">
        <img src={logo} alt="Logo" className="image-position" />
        <h1 className="h1">BHARAT HEAVY ELECTRICALS LIMITED</h1>
      </div>
      <div className="text-position">
        <h3>SIGN IN</h3>
      </div>
      <div>
        <form className="form" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <Link to='/FileImport' class="btn btn-primary" style={{ display: 'flex', width: '75px', height: '27px', flexDirection: 'column', justifyContent: 'center', marginTop: '50px' }}>Submit</Link>

        </form>
      </div>
    </div>
  )
};

export default SignIn;
