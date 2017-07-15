import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <div>
          <nav>
            <ul className="top">
            <li id="number">+1 (508) 881-6771</li>
            <li>Email Us</li>
            <li>Information Request</li>
            </ul>
            <div className="nav-right">
            <ul className="top">
            <li>Create Account</li>
            <li>Sign In</li>
            </ul>
            <a href="#" className="top" id="cart">
            <span className="glyphicon glyphicon-shopping-cart"></span> Cart
            </a>
            </div>
          </nav>

          <section className="first-intro">
            <a href="https://www.mattek.com/">
              <img className="snoopy" src="https://s-media-cache-ak0.pinimg.com/736x/c0/d6/fc/c0d6fc395a99a07c0238b4f8d6be4b03--snoopy-wallpaper-iphone-wallpaper.jpg" alt="Snoopy" />
            </a>

            <div className="head-icon">
              <span>ABOUT</span>
              <span>PRODUCT</span>
              <span>APPLICATIONS</span>
              <span>REFERENCE</span>
              <span>NEWS</span>
              <span>STORE</span>
              <i id="search-icon" className="fa fa-search"></i>
            </div>

            <div className="head-txt">
              <p>
                Understanding
              </p>
              <p>
                human biology in
              </p>
              <h1 className="dimension">
                DIMENSIONS
                <sup>3</sup>
              </h1>
              <a href="https://www.mattek.com/" className="button button-white">find your science</a>
            </div>
          </section>

          <section class="section">
              <h2 class="big-paragraph">
                Innovative in vitro science is what we do.
              </h2>

              <p class="small-paragraph">
                Engineered human tissues and cell based assays at the forefront of in vitro testing technology.
                Let’s do some innovating!
              </p>
          </section>

          <section class="second-intro">
            .....
          </section>

          <section className="second-intro">
              <div className="login-div">
                <input type="text" name="username" className="form-control input-box" placeholder="username"/>
                <input type="text" name="password" className="form-control input-box" placeholder="password"/>
                <Link to="/home">
                    <input type="submit" value="Login"/>
                </Link>
              </div>
          </section>
        </div>
    );
};

export default Login;
