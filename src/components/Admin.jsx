import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegDetails from './KegDetails';


function Admin(props) {
  let optionalSelectedKegContent;
  if (!props.selectedKeg) {
    optionalSelectedKegContent = <KegDetails selectedKeg={props.kegList[props.selectedKeg]} />;
  }

  return(
    <div>
      <h2>Admin</h2>
      {optionalSelectedKegContent}
      <KegList kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection} />
    </div>

  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default Admin;