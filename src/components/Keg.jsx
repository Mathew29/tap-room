import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Keg(props) {
  return (
    <div>
      <style jsx>{`
        button {
          box-shadow: 2px 2px 3px black;
        }

        img {
          width 200px;
          height 200px;
          
        }
      `}</style>
      <div>
        <h2>{props.name}</h2>
        <div className="beerImages">
          <img src={props.img} />
        </div>
        <h3>{props.brand}</h3>
        <h3>${props.price}</h3>
        <p><em>{props.alcoholContent}%</em></p>
        <Link to="/editkeg"><button>Edit Keg</button></Link>
        <br/>
      </div>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
};