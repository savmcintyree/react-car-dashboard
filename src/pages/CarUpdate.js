import React from 'react';
import CarForm from '../components/CarForm';

const CarUpdate = () => {
  const handleUpdate = (carData) => {
    // Handle update logic, e.g., make API request to update an existing car
  };

  return (
    <div>
      <h2>Update Car</h2>
      <CarForm onSubmit={handleUpdate} />
    </div>
  );
};

export default CarUpdate;
