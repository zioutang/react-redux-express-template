import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Courses from '../components/Courses';
import Classroom from '../components/Classroom'
import { BrowserRouter, Route, Switch /*, Link */ } from 'react-router-dom';
const AppContainer = ({list}) => {
    return (
        <BrowserRouter>
          <div>
            <h1>You have logged in</h1>

            <Switch>
            <Route path="/Classroom"  component={Classroom}/>
            <Route path="/" exact render={() => <Courses list={list}/>}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
};

AppContainer.propTypes = {
    list: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        list: state.list
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
