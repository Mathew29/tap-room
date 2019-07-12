import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function KegDetails(props) {

  function handleEditRouteButton(e) {
    e.preventDefault();
    props.history.push('/keglist');
  }

  return(
    <div onSubmit={handleEditRouteButton}>
      <hr/>
      <h2>{props.selectedKeg.name}</h2>
      <h3>{props.selectedKeg.brand}</h3>
      <h3>${props.selectedKeg.price}</h3>
      <p><em>{props.selectedKeg.alcoholContent}%</em></p>
      <button type="button">Edit</button>
      <hr/>
    </div>
  );
}

KegDetails.propTypes = {
  selectedKeg: PropTypes.object
};

export default withRouter(KegDetails);