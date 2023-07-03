import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

const Dashboard = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cars');
      setCars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      fetchCars();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Car Inventory Dashboard</h1>
      <Button component={Link} to="/cars/create" variant="contained" color="primary">
        Add Car
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Make</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car.id}>
                <TableCell>{car.make}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>
                  <Button component={Link} to={`/cars/${car.id}`} variant="outlined" color="primary" size="small">
                    View
                  </Button>
                  <Button component={Link} to={`/cars/${car.id}/edit`} variant="outlined" color="primary" size="small">
                    Edit
                  </Button>
                  <Button onClick={() => deleteCar(car.id)} variant="outlined" color="secondary" size="small">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
