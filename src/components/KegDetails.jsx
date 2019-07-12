import React from 'react'
import PropTypes from 'prop-types'

function KegDetails(props) {
  reutrn(
    <div>
      <hr/>
      <h2>{props.name}</h2>
      <h3>{props.brand}</h3>
      <h3>${props.price}</h3>
      <p><em>{props.alcoholContent}%</em></p>
      <hr/>
    </div>
  );
}

KegDetails.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetails;