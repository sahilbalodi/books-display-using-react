import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StoreBooks } from '../../Redux/actions';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <button
        id="footer"
        onClick={() => {
          fetch('/saveBooks', {
            method: 'POST',
          }).then(() => {
          this.props.store();
});
}}
      >
        {this.props.value}
      </button>
    );
  }
}
Footer.propTypes = {
  value: PropTypes.string.isRequired,
  store: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return ({
    store: () => dispatch(StoreBooks()),
  });
}
export default connect(null, mapDispatchToProps)(Footer);
