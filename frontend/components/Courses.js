import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Courses = ( { list } ) => {
  console.log(list);
    return (
        <div>
                <ul className="all-courses">
                {list.map((item)=>{
                  return (
                    <li className="top-contact">
                        <div className="course-listing">
                            <div>
                              <Link to="/Classroom">{item.courseName}</Link>
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
