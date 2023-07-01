import React from 'react';
import { Link } from 'react-router-dom';

const CarTable = ({ cars, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>
              <Link to={`/cars/${car.id}`}>View</Link>{' '}
              <Link to={`/cars/${car.id}/edit`}>Edit</Link>{' '}
              <button onClick={() => onDelete(car.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarTable;
