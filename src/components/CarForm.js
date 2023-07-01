import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CarForm = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Implement create/update functionality here
    console.log('Form data:', data);
  };

  return (
    <div>
      <h2>{id ? 'Edit Car' : 'Add Car'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Make:</label>
        <input type="text" name="make" ref={register} />
        <label>Model:</label>
        <input type="text" name="model" ref={register} />
        <label>Year:</label>
        <input type="number" name="year" ref={register} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarForm;
