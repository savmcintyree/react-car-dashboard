import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/carform">Car Form</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <h1>Welcome to the Car Inventory Dashboard</h1>
      <p>This is the landing page of your car inventory dashboard.</p>
      <p>You can navigate to other pages to view, create, update, and delete cars.</p>
    </div>
  );
};

export default Landing;
