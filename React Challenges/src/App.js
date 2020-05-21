import React, {Component} from 'react';
import './App.css';
import Person from './Person';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      persons:[
      { 
      name: 'Naruto Uzumaki',
      phone: '704-xxx-xxxx',
      dob:'October 10th',
      gender:'Male'},
      { 
      name: 'Sasuke Uchiha',
      phone: '704-xxx-xxxx',
      dob:'July 23rd,',
      gender:'Male'},
      { 
      name: 'Rock Lee',
      phone: '704-xxx-xxxx',
      dob:'November 27th',
      gender:'Male'},
      { 
      name: 'Hinata Hyuga',
      phone: '704-xxx-xxxx',
      dob:'December 27th',
      gender:'Female'},
      {
      name: 'Shikamaru Nara',
      phone: '704-xxx-xxxx',
      dob: 'September 22nd',
      gender: 'Male'},
      ]
    };
  }
  render(){
    const person = this.state.persons;
    return(
      <div className="App">
          {person.map(el => <Person name={el.name} phone={el.phone}  dob={el.dob} gender={el.gender} /> )}
      </div>
    )
  }
}

export default App;
