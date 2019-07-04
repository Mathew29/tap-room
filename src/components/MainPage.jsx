import React from 'react';
import { Link } from 'react-router-dom';



export default function MainPage() {
  return (

    <div >
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;

        }
        button {
          margin: 5px;
          box-shadow: 2px 2px 3px black;
        }
      `}</style>
      <div className="container">
        <div className="center">
          <h1>Welcome To The Tap Room</h1>

          <h4>Come And Enjoy Our Nice Beers</h4>

          <Link to="/keglist"><button>View Kegs List</button></Link>
          <Link to="/addkeg"><button>Add New Keg</button></Link>
        </div>
      </div>
    </div>

  );
}