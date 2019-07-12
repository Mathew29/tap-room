import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function AddKeg(props) {
  let _name;
  let _brand;
  let _price;
  let _alcoholContent;

  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value});
    props.history.push('/keglist');
  }


  return (
    <div>
      <style jsx>{`
      .container {
        text-align: center;
      }

      form{
        display: inline-block;
      }
      
      button {
        box-shadow: 2px 2px 3px black;
      }
      `}</style>
      <div className="container">
        <h1>Add a New Keg</h1>
        <form onSubmit={handleNewKegFormSubmission}>
          <input type='text' id='name' placeholder='NAME' ref={(input) => {_name = input;}} required /><br />
          <input type='text' id='brand' placeholder='BRAND' ref={(input) => {_brand = input;}} required /><br />
          <input type='number' id='price' placeholder='PRICE' ref={(input) => {_price = input;}} required /><br />
          <input type='number' id='alcoholContent' placeholder='ALCOHOL CONTENT' ref={(input) => {_alcoholContent = input;}} required /><br />
          <button type='submit'>Add New Keg</button>
        </form>
      </div>

    </div>
  );
}

AddKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default withRouter(AddKeg);