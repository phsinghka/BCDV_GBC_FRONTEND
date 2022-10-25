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
        <Student name = "Rick Rude" number = "11111" enrolled = "2"/>
        <Student name = "Shawn Michaels" number = "22222" enrolled = "1"/>
        <Student name = "Bret Hart" number = "33333" enrolled = "3"/>
        <College name = "George Brown" location = "Casa Loma"/>
      </React.Fragment>
      
    );
  }
}
 
export default App;
