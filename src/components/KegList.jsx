import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {  
    name: 'Corona',
    brand: 'Corona',
    price: '12',
    alcoholContent: '3'
  },
  {  
    name: 'MoonShine',
    brand: 'Basement',
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
  }
];

function KegList(){
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price} 
          alcoholContent={keg.alcoholContent}
          key={index}/>
      )}
    </div>
  );
}




export default KegList;