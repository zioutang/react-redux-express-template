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
