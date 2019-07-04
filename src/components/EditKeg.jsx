import React from 'react';
import { Link } from 'react-router-dom';

export default function EditKeg(){
  return (
    <div>
      <h1>Edit Keg</h1>
      <form>
        <input type='text' id='name' placeholder='NAME'/><br/>
        <input type='text' id='brand' placeholder='BRAND'/><br/>
        <input type='number' id='price' placeholder='PRICE'/><br/>
        <input type='number' id='alcoholContent' placeholder='ALCOHOL CONTENT'/><br/>
        <Link to="/keglist"><button type='submit'>Edit Keg</button></Link>
      </form>
    </div>
  );
}
