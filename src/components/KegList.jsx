import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function KegList(props) {
  return (
    <div>
      <style jsx>{`
      button {
        box-shadow: 2px 2px 3px black;
      }
      `}</style>
      <div>
        <hr />
        {Object.keys(props.kegList).map(function(kegId) {
          let keg = props.kegList[kegId];
          return <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            key={kegId}
            kegId={kegId} />;
        })}
      </div>
      <div>
        <Link to="/addkeg"><button>Add New Keg</button></Link>
      </div>

    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};


export default KegList;