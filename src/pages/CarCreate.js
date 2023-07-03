import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CarForm from '../components/CarForm';

const CarCreate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleCreate = async (carData) => {
    try {
      setIsSubmitting(true);
      setErrorMessage('');

      // Make a POST request to your API endpoint
      await axios.post('http://localhost:5000/cars', carData);

      setIsSubmitting(false);
      setIsSuccess(true);

      // Redirect to the dashboard after successful car creation
      setTimeout(() => {
        history.push('/dashboard');
      }, 2000); // Redirect after 2 seconds (you can adjust the duration as needed)

    } catch (error) {
      setIsSubmitting(false);
      setIsSuccess(false);

      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while creating the car.');
      }
    }
  };

  return (
    <div>
      <h2>Create New Car</h2>
      {isSuccess ? (
        <div>
          <p>Car created successfully!</p>
          <p>Redirecting to the dashboard...</p>
        </div>
      ) : (
        <CarForm onSubmit={handleCreate} isSubmitting={isSubmitting} />
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default CarCreate;
