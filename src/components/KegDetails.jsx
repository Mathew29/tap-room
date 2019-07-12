import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function KegDetails(props) {

  return(
    <div>
      <hr/>
      <h2>{props.selectedKeg.name}</h2>
      <h3>{props.selectedKeg.brand}</h3>
      <h3>${props.selectedKeg.price}</h3>
      <p><em>{props.selectedKeg.alcoholContent}%</em></p>
      <Link to="/editkeg"><button>Edit</button></Link>
      <hr/>
    </div>
  );
}

KegDetails.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetails;