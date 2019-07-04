import React from 'react';
import Keg from './Keg';
import { Link } from 'react-router-dom';

var masterKegList = [
  {
    name: 'Corona Extra',
    brand: 'Corona',
    price: '12',
    alcoholContent: '3'
  },
  {
    name: 'MoonShine',
    brand: 'Basement Made',
    price: '20',
    alcoholContent: '25'
  },
  {
    name: 'DropTop',
    brand: 'Beer',
    price: '10',
    alcoholContent: '7'
  },
  {
    name: 'Coors',
    brand: 'Water',
    price: '5',
    alcoholContent: '1'
  },
  {
    name: 'Bud Light',
    brand: 'Water',
    price: '5',
    alcoholContent: '1'
  }
];

function KegList() {
  return (
    <div>
      <div>
        <hr />
        {masterKegList.map((keg, index) =>
          <Keg name={keg.name}
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