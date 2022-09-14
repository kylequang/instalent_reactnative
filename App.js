import React, {useEffect, useState} from 'react';

import {SafeAreaView, View} from 'react-native';

import Logo from './assets/icons/app/Alarmicon_app.svg';
import SignInScreen from './src/screens/auth/SignInScreen';
import IntroApp from './src/screens/intro/Index';
import IntroFirstScreen from './src/screens/intro/IntroFirstScreen';
import IntroSecondScreen from './src/screens/intro/IntroSecondScreen';
import IntroThirdScreen from './src/screens/intro/IntroThirdScreen';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './src/navigations/AuthStack';
import AppStack from './src/navigations/AppStack';
const App = () => {
  const [isLoading,setIsLoading]=useState(true);
  const [isFirst, setIsFirst] = useState(true);
  const [isLogin,setIsLogin]=useState(false);
  const handleIsFirst = async () => {
    const runFirst = await AsyncStorage.getItem('isFirst');
    console.log(runFirst);
    runFirst == null ? null : setIsFirst(runFirst);
  };
  useEffect(() => {
    handleIsFirst();
    setIsLoading(false);
  }, []);
  return (
    <NavigationContainer>
      {/* <View style={{flex: 1}}>
      <Logo size={35}/>
      <SplashScreen />
      <IntroFirstScreen/>
      <IntroSecondScreen/>
      <IntroThirdScreen/>
      <IntroApp/>
      <SignInScreen/>
    </View> */}
      {isLoading?<SplashScreen/>:(isLogin ? <AppStack /> : <AuthStack />)}
      
    </NavigationContainer>
  );
};

export default App;
