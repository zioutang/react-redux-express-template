import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Courses = ( { list } ) => {
    return (
        <div>
        <nav className="navbar navbar-default">

          <div className="nav-right">
            <ul className="top">
              <li><img id="account-image" src="https://s-media-cache-ak0.pinimg.com/originals/f4/5e/9d/f45e9dbac8cac965a7aa5085a8ed6c3e.jpg" /></li>
              <li style={{color: '#000000', padding: 6}}>My Courses</li>
              <li style={{color: '#000000', padding: 6}}>Catogories</li>
              <li style={{color: '#000000', padding: 6}}>Log Out</li>
            </ul>
            <a href="#" className="top" id="cart">
              <i className="fa fa-question icon" aria-hidden="true"></i>
              <i className="fa fa-search icon" aria-hidden="true"></i>
              <i className="fa fa-heart-o icon" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
            <ul className="all-courses">
                {list.map((item)=>{
                  return (
                    <li className="top-contact">
                        <div className="course-listing">
                            <div>
                              <Link to="/home/Classroom">{item.courseName}</Link>
                            </div>
                            <div>
                              {item.from} - {item.to}
                              <i className="fa fa-heart-o icon" aria-hidden="true"></i>
                            </div>
                        </div>
                  </li>
                )
                })}
              </ul>
        </div>
    );
};

Courses.propTypes = {
    list: PropTypes.array,
};


export default Courses;
