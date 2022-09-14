
import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignInScreen from '../screens/auth/SignInScreen';
import IntroApp from '../screens/intro/Index';
import HomeScreen from '../screens/HomeScreen';

const Auth= createNativeStackNavigator();

export default function AuthStack() {
  const [isFirst, setIsFirst] = useState(true);
  const handleIsFirst = async () => {
    const runFirst = await AsyncStorage.getItem('isFirst');
    console.log(runFirst);
    runFirst == null ? null : setIsFirst(runFirst);
  };
  useEffect(() => {
    handleIsFirst();
  }, []);
  return (
   <Auth.Navigator screenOptions={{
    headerShown:false
   }}>
      <Auth.Screen name="intro" component={IntroApp} options={{headerShown:false}}/>
      <Auth.Screen name="signIn" component={SignInScreen} options={{headerShown:false}}/>
      <Auth.Screen name= 'home' component={HomeScreen}/>
    </Auth.Navigator>
  )
}

