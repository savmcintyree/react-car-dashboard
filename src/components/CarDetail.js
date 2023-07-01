import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Car Detail</h2>
      <p>ID: {id}</p>
      {/* Display other car details */}
    </div>
  );
};

export default CarDetail;
