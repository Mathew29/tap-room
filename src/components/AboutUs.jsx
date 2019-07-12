import React from 'react';

export default function AboutUs() {

  return (
    <div>
      <style jsx>{`
        .txt {
          text-align: center;
        }

        .goobers {
          font-size: 10px;
        }
      `}</style>
      <div className="txt">
        <h1>About Us</h1>
        <h3>We are the bright minds behind the Tap Room!</h3>

        <div className="goobers">
          <p>For a 50% discount on ONE drink tell a staff member "I am a Goofy Goober"</p>
          <p>This offer can only be used once for the first 50 customers.</p>
        </div>
      </div>
    </div>
  );
}