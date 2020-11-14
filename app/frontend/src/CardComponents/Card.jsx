import React from "react";

function Card() {
  return (
    <div className="card">
      <h1 className="companyName">Company Name</h1>
      <div className="column">
        <div className="URLS">
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>LinkedIN</li>
          </ul>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}

export default Card;
