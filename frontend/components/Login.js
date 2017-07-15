import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <div>
          <nav>
            <div className="nav-right">
            <ul className="top">
              <li>Create Account</li>
              <li>
              <Link to="/home">
                  Sign In
              </Link>
              </li>

            </ul>
            </div>
          </nav>

          <section className="first-intro">
            <div className="head-icon">
              <span className="cat">ABOUT</span>
              <span className="cat">CATOGORIES</span>
              <span className="cat">CONTACT US</span>
              <span className="cat">JOIN US</span>
            </div>

            <div className="head-txt">
              <p>
                Be a
              </p>
              <h1 className="dimension">
                Learner
              </h1>
              <a href="https://www.mattek.com/" className="button button-white">LEARN MORE</a>
              <a href="https://www.mattek.com/" className="button button-white">LOG IN</a>
            </div>
          </section>

          <section className="section">
              <h2 className="big-paragraph">
                Study and Teach what you can and can not imagine
              </h2>

              <p className="small-paragraph">
                An "SESSION-BASED" "LIVE-STREAM" education platform that allows people to study and teach.
                Anything!
              </p>
          </section>

          <section className="second-intro">
              <div className="head-txt">
                <p>
                  Be a
                </p>
                <h1 className="dimension">
                  Teacher
                </h1>
                <a href="https://www.mattek.com/" className="button button-white">LEARN MORE</a>
                <a href="https://www.mattek.com/" className="button button-white">LOG IN</a>
              </div>

          </section>
        </div>
    );
};

export default Login;
