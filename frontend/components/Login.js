import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <div>
          <h1>Login</h1>
          <label>username</label>
          <input type="text" name="username" class="form-control" placeholder="username"/>
          <label>password</label>
          <input type="text" name="password" class="form-control" placeholder="password"/>
          <Link to="/home"><input type="Login"/></Link>
        </div>
    );
};

export default Login;
