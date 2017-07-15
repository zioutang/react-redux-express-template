import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <form onClick={() => {}}>
                <input onChange={()=>{}} type="text" value="" placeholder="your@email.com"/>
                <input onChange={()=>{}} type="text" value="" placeholder="password"/>
                <input type="submit" value="Signup" />
                </form>
            </div>
            <Link to="/login">
                Log In
            </Link>
        </div>
    );
};

export default Home;
