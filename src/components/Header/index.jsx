import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header id="header"><br />{this.props.value}</header>
    );
  }
}
Header.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Header;
