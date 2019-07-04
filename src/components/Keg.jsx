import React from 'react';
import PropTypes from 'prop-types';

export default function Keg(props) {
  return (
    <div>
      <style jsx>{`

      `}</style>
      <div>
        <h2>{props.name}</h2>
        <h3>{props.brand}</h3>
        <h3>${props.price}</h3>
        <p><em>{props.alcoholContent}%</em></p>
        <br/>
      </div>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
};