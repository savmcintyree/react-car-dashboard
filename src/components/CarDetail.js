import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import axios from 'axios';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetchCar();
  }, []);

  const fetchCar = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cars/${id}`);
      setCar(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!car) {
    return <Typography variant="h6">Loading car details...</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">Car Details</Typography>
      <Typography variant="h6">Make: {car.make}</Typography>
      <Typography variant="h6">Model: {car.model}</Typography>
      <Typography variant="h6">Year: {car.year}</Typography>
      <Button component={Link} to={`/cars/${id}/edit`} variant="outlined" color="primary">
        Edit
      </Button>
    </div>
  );
};

export default CarDetails;
