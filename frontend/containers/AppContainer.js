import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Courses from '../components/Courses';
import Classroom from '../components/Classroom';
import Login from '../components/Login';
import { BrowserRouter, Route, Switch /*, Link */ } from 'react-router-dom';
const AppContainer = ({list}) => {
    return (
        <BrowserRouter>
          <div>
              <Switch>
              <Route path="/" exact component={Login}/>
              <Route path="/home/Classroom" exact component={Classroom}/>
              <Route path="/home" exact render={() => <Courses list={list}/>}/>
              </Switch>
          </div>
        </BrowserRouter>
    );
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
