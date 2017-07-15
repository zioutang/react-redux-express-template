import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Courses = ( { list } ) => {
  console.log(list);
    return (
        <div>
          <ul>
          {list.map((item)=>{
            return (<li><div class="row m-t-30 well well-sm">
              <div class="col-sm-3 well well-sm">
                <div>
                  <Link to="/Classroom">{item.courseName}</Link>
                </div>
                <div>
                  course offerd from: {item.from}
                </div>
                <div>
                  course offerd to: {item.to}
                </div>
                  course starts at: {item.startTime}
              </div>
            </div></li>)
          })}
        </ul>
        </div>
    );
};

Courses.propTypes = {
    list: PropTypes.array,
};


export default Courses;
