import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CarDetail from './components/CarDetail';
import CarForm from './components/CarForm';
import './App.css'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/car/:id" component={CarDetail} />
      <Route exact path="/car/:id/edit" component={CarForm} />
      <Route exact path="/car/create" component={CarForm} />
    </Router>
  );
};

export default App;
