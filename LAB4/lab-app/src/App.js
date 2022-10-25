import logo from './logo.svg';
import './App.css';
import Student from './components/student';
import College from './components/college';
import React, { Component } from 'react';





class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <Student />
        <Student />
        <Student />
        <College />
      </React.Fragment>
      
    );
  }
}
 
export default App;
