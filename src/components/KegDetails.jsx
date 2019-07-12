import React from 'react'
import PropTypes from 'prop-types'

function KegDetails(props) {
  reutrn(
    <div>
      <hr/>
      <h2>{selectedKeg.name}</h2>
      <h3>{selectedKeg.brand}</h3>
      <h3>${selectedKeg.price}</h3>
      <p><em>{selectedKeg.alcoholContent}%</em></p>
      <hr/>
    </div>
  );
}

KegDetails.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetails;