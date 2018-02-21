import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ChangeStatus } from '../../Redux/actions';
import './BookDetails.css';

class BookDetails extends React.Component {
  render() {
    return (
      <div className="BookDetails-div">
        <span>name:{this.props.name}<br /></span>
        <span>author:{this.props.author}<br /></span>
        <span>rating:{this.props.rating}<br /></span>
        like/dislike:
        <button
          onClick={() => { this.props.change(ChangeStatus(this.props.id)); }}
        >{this.props.status}<br />
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return ({
    change: x => dispatch(x),
  });
}
BookDetails.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired,
  status: PropTypes.string,
};
BookDetails.defaultProps = {
  status: null,
};
export default connect(null, mapDispatchToProps)(BookDetails);
