import React from 'react';
import { Link } from 'react-router-dom';

export default function EditKeg() {
  return (
    <div>
      <style>{`
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
        <h1>Edit Keg</h1>
        <form>
          <input type='text' id='name' placeholder='NAME' /><br />
          <input type='text' id='brand' placeholder='BRAND' /><br />
          <input type='number' id='price' placeholder='PRICE' /><br />
          <input type='number' id='alcoholContent' placeholder='ALCOHOL CONTENT' /><br />
          <Link to="/keglist"><button type='submit'>Edit Keg</button></Link>
        </form>
      </div>
    </div>
  );
}
