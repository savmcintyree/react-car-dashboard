import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

const CarForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const history = useHistory();
  const { id } = useParams();

  const onSubmit = async (data) => {
    try {
      if (id) {
        await axios.put(`http://localhost:5000/cars/${id}`, data);
      } else {
        await axios.post('http://localhost:5000/cars', data);
      }
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCar = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/cars/${id}`);
      const car = response.data;
      setValue('make', car.make);
      setValue('model', car.model);
      setValue('year', car.year);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (id) {
      fetchCar(id);
    }
  }, [id]);

  return (
    <div>
      <h1>{id ? 'Edit Car' : 'Add Car'}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Make" name="make" inputRef={register} />
        <TextField label="Model" name="model" inputRef={register} />
        <TextField label="Year" name="year" type="number" inputRef={register} />
        <Button type="submit" variant="contained" color="primary">
          {id ? 'Update' : 'Add'}
        </Button>
      </form>
    </div>
  );
};

export default CarForm;
