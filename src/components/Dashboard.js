import React from 'react';
import { Link } from 'react-router-dom';
import CarTable from './CarTable';

const Dashboard = () => {
  // Sample car data
  const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
    { id: 2, make: 'Honda', model: 'Accord', year: 2021 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2019 },
  ];

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Deleting car with ID: ${id}`);
  };

  return (
    <div>
      <h1>Car Inventory Dashboard</h1>
      <Link to="/cars/new">Add Car</Link>
      <CarTable cars={cars} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;

