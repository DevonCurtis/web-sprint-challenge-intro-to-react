import React, {useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters ] = useState([]);
  const [ currentCharID, setCurrentCharID ] = useState('1');


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacters(res.data)
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
