import styled from "styled-components";
import React from "react";
import {WiBarometer} from "react-icons/wi";
import {WiDayCloudy} from "react-icons/wi";
const SearchBox = styled.form
  `display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 40px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Helvetica;
    font-weight: bold;
  }
  & button {
    background-color: #03a9fc;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: crosshair;
    font-family: Helvetica;
    font-weight: bold;
  }
`;
const ChooseCityLabel = styled.span
 `color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img
  `width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WiDayCloudy size={160}/>
      <ChooseCityLabel>Search your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}><WiBarometer size={30}/></button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
