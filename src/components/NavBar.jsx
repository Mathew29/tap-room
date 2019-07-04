import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div>
      <style jsx>{`
      nav {
        background-color: #CCC;
        overflow: hidden;
        padding: 1em;
        border-bottom: 1px solid #000;
      }
      
      nav	Link {
          color: #000;
      }
      
      nav	Link:visited {
          color: #000;
      }
      
      nav .navWide {
        display: none;
        margin: 0 auto;
      }
      
      nav .navWide .wideDiv {
        text-align: center;
      }
      
      nav .navWide .wideDiv a {
        text-decoration: none;
        display: inline-block;
        padding: 0 2em;
      }

      .hidden {
        display: none;
      }
      
      @media (min-width: 480px) {
        
        nav .navWide {
          display: block;
        }
      
      }
      `}</style>

      <header>
        <nav>
          <div className="navWide">
            <div className="wideDiv">
              <Link to="/">Home</Link>
            </div>
          </div>
        </nav>
      </header>


    </div>
  );
}

export default Header;