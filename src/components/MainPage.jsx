import React from 'react';
import { Link } from 'react-router-dom';



export default function MainPage() {

  return (
    <div >
      <h1>Welcome To The Tap Room</h1>

      <h4>Come And Enjoy Our Nice Beers</h4>

      <Link to="/keglist"><button>View Kegs List</button></Link>
      <Link to="/addkeg"><button>Add New Keg</button></Link>
    </div>

  );
}