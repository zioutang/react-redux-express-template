import React from 'react';

// import PropTypes from 'prop-types';

const Classroom = ( ) => {
    return (
        <div id='render'>
            <div>
              <h1>British Literature</h1>
              <p>A complete analysis of one of the most pivotal works of British Literature, Pride and Prejudice by Jane Austen.</p>
            </div>

            <div className="intro-window">
              <div className="button">
                <div className="button-white">
                <input type="submit" value="Enrolled" />
                </div>
                <div className="button-white">
                <input type="submit" value="Go to Course" />
                </div>
              </div>
            </div>
        </div>
    );
};



export default Classroom;
