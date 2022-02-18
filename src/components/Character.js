// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const Character = (props) => {
    const {info} = props;


  return (
    <CharDiv>
        <div>
            <h3>{info.name}</h3>
            <p>BirthYear: {info.birth_year}</p>
            <p>Gender: {info.gender}</p>
            <p>Mass: {info.mass}</p>
        </div>
    </CharDiv>
  )
}

const CharDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f5d3a1a3;
    color: #44e3e;
    text-shadow: 1px 1px 5px #fff;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;
`;

export default Character