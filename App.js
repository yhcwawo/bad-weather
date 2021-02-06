import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "a5fda010f22529f83a73060b859adeee";

export default class extends React.Component {
  state ={
    isLoading: true
  };

  getWeather =  async(latitude,longitude) => {
    const { data } =  await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({isLoading: false, 
                  condition: data.weather[0].main,
                  temp: data.main.temp});

  };

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} =  await Location.getCurrentPositionAsync();
      //send to api and get weather
      this.getWeather(latitude,longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "so sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  //마운트 될 경우인거 알죠

render(){
  const {isLoading, temp, condition} =  this.state;
  return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;

};





}



