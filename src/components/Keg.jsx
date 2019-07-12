import React from 'react';
import PropTypes from 'prop-types';


function Keg(props) {

  const kegInfo = 
    <div>
      <h2>{props.name}</h2>
      <h3>{props.brand}</h3>
      <h3>${props.price}</h3>
      <p><em>{props.alcoholContent}%</em></p>
      <hr/>
    </div>;
  if(props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onKegSelection(props.kegId);}}>
        {kegInfo}
      </div>
    );
  } else {
    return(
      <div>
        {kegInfo}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;