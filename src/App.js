import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Table from './components/Table';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default App;
