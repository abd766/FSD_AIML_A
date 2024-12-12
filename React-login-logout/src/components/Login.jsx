import {React,useState} from "react";

import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
const Login = ({regData}) => {
  const [email, setEmail] = useState();
  const [password,setPassword] = useState();
  const Navigate = useNavigate();
  function validate(e){
    e.preventDefault();
    if (regData.email === email && regData.password === password){
      alert('Login Successful')
      Navigate('/dashboard')
    }
    else{
      alert('Please enter correct credentials');
    }
  }
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            class="form-control"
            id="exampleInputEmail1"
          ></input>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            class="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" onClick={validate} class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
