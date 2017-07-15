import React from 'react';

// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
class Classroom extends React.Component{

  componentWillMount () {
    Modal.setAppElement('body');
  }
    render() {
      return (
        <div id='render'>
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
          <div>
            <h1>British Literature</h1>
            <p>A complete analysis of one of the most pivotal works of British Literature, Pride and Prejudice by Jane Austen.</p>
          </div>
          <div className="intro-window">
            <input
              type="submit"
              onClick={()=>{
                this.props.toggle();
              }}
              style={{'width': '250'}}/>
            <Modal
              isOpen={this.props.isActive}
              onRequestClose={this.props.toggle}
              contentLabel="Modal">
              <h1>Live with Pro</h1>
              <input type="submit"
                onClick={ ()=> {
                  this.props.toggle();
                }}

                value= "Back"/>
              </Modal>
          </div>
      </div>
        );

    }
};
const mapStateToProps = (state) => {
    return {
        isActive: state.isActive,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      toggle: ()=> dispatch({
          type: 'TOGGLE'
      }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Classroom);
