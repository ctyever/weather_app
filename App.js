import React from 'react';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import * as Location from 'expo-location';
// import getWeather from './api/index'
import { Alert } from 'react-native'
import Weather from './components/Weather'
import axios from 'axios'


export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = '92d2ae85ad1d2ca29bd0b6bb43d1eb0d'

  const getLocation = async () => {
    
    try {
      
      await Location.requestForegroundPermissionsAsync();
      
      const { coords } = await Location.getCurrentPositionAsync();
      // console.log(coords.latitude, coords.longitude )
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${API_KEY}&units=metric`
      ).then(res => {
        console.log(res.data)
      })

      

      setIsLoading(false);
      
    } catch (error) {
      Alert.alert("위치정보를 가져올 수 없습니다.");
    }
    
  };

  useEffect(() => {
    getLocation();
  })

  return (
    // View 는 div 와 같은 것이라고 생각하면 됨
    isLoading ? <Loading/> : <Weather/>
  );
}

