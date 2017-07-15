import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <div>
          <nav>
            <div className="nav-right">
            <ul className="top">

            </ul>

            </div>
          </nav>

          <section className="first-intro">
            <a href="https://www.mattek.com/">
              <img className="snoopy" src="https://s-media-cache-ak0.pinimg.com/736x/c0/d6/fc/c0d6fc395a99a07c0238b4f8d6be4b03--snoopy-wallpaper-iphone-wallpaper.jpg" alt="Snoopy" />
            </a>

            <div className="head-icon">
              <span className="cat">ABOUT</span>
              <span className="cat">CATOGORIES</span>
              <span className="cat">CONTACT US</span>
              <span className="cat">JOIN US</span>
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
              <div className="login-div">
                <input type="text" name="username" className="form-control input-box" placeholder="username"/>
                <input type="text" name="password" className="form-control input-box" placeholder="password"/>
                <Link to="/home">
                    <a href="https://www.mattek.com/" className="button button-white">LOG IN</a>
                </Link>
              </div>
          </section>
        </div>
    );
};

export default Login;
