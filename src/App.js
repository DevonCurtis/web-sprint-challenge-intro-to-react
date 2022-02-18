import React, {useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters ] = useState([]);

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
    <AppDiv>
      <H1>Characters</H1>
      {
        characters.map(char => {
          return <Character key={char.name} info={char}/>
        })
      }
    </AppDiv>
  );
}

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const H1 = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;
export default App;
