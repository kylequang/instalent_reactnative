import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import IntroFirstScreen from './IntroFirstScreen';
import IntroSecondScreen from './IntroSecondScreen';
import IntroThirdScreen from './IntroThirdScreen';
import {useState} from 'react';
import {MainWhite, PrimaryColor} from '../../constants/Colors';
import MainButton from '../../components/MainButton';
import {useNavigationContainerRef} from '@react-navigation/native';

export default function IntroApp({navigation}) {
  const navigationRef = useNavigationContainerRef();
  const [indexScreen, setIndexScreen] = useState(0);
  const ListScreen = [
    <IntroFirstScreen />,
    <IntroSecondScreen />,
    <IntroThirdScreen />,
  ];

  const handleNextScreen = () => {
    console.log('handle next screen');
    setIndexScreen(indexScreen + 1);
  };
  const renderScreen = () => {
    console.log('render Screen');
    console.log(indexScreen);
    for (let index = 0; index < ListScreen.length; index++) {
      if (indexScreen == index) {
        return ListScreen[indexScreen];
      }
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: 10,
          height: 10,
          marginRight: 8,
          borderRadius: 50,
          backgroundColor: PrimaryColor,
          opacity: indexScreen == index ? 1 : 0.5,
        }}
      />
    );
  };

  const renderRowDot = () => {
    return (
      <View>
        <FlatList data={ListScreen} renderItem={renderItem} horizontal />
      </View>
    );
  };
  return (
    <>
      {renderScreen()}
      <View
        style={{flexDirection: 'row', justifyContent: 'center', height: '20%'}}>
        {renderRowDot()}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: '15%',
        }}>
        {indexScreen === ListScreen.length - 1 ? (
          <View style={{marginHorizontal: 20, width: '90%'}}>
            <MainButton
              title={'Get started'}
              backgroundColor={PrimaryColor}
              color={MainWhite}
              onPress={() => navigation.navigate('signIn')}
            />
          </View>
        ) : (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('signIn')}>
              <Text>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNextScreen()}>
              <Text>Next</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
}
