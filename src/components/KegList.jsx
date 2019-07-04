import React from 'react';
import Keg from './Keg';
import { Link } from 'react-router-dom';
import coronaBeer from '../assets/images/Corona-Bottle.png'
import bluemoon from '../assets/images/bluemoon.png';
import budlight from '../assets/images/budlight.png';
import coors from '../assets/images/coors.png';

var masterKegList = [
  {
    name: 'Corona Extra',
    img: coronaBeer,
    brand: 'Corona',
    price: '12',
    alcoholContent: '3'
  },
  {
    name: 'Blue Moon',
    img: bluemoon,
    brand: 'Beer',
    price: '10',
    alcoholContent: '7'
  },
  {
    name: 'Coors',
    img: coors,
    brand: 'Water',
    price: '5',
    alcoholContent: '1'
  },
  {
    name: 'Bud Light',
    img: budlight,
    brand: 'Water',
    price: '5',
    alcoholContent: '1'
  }
];

function KegList() {
  return (
    <div>
      <style jsx>{`
      button {
        box-shadow: 2px 2px 3px black;
      }
      `}</style>
      <div>
        <hr />
        {masterKegList.map((keg, index) =>
          <Keg name={keg.name}
            img={keg.img}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            key={index} />
        )}
      </div>
      <div>
        <Link to="/addkeg"><button>Add New Keg</button></Link>
      </div>

    </div>
  );
}




export default KegList;