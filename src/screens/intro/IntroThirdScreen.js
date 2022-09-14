import {View, Text, Image} from 'react-native';
import React from 'react';
import {MainBlack} from '../../constants/Colors';
import IntroThirdImage from '../../../assets/images/intro3.svg';
export default function IntroThirdScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 85,
      }}>
    
      <IntroThirdImage/>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 24,
          textAlign: 'center',
          color: MainBlack,
          marginTop: 20,
          marginBottom: 16,
          width: '60%',
        }}>
        Many attracting promotions
      </Text>
      <Text
        style={{
          padding:10,
          textAlign: 'center',
          marginHorizontal: 40,
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 20,
        }}>
        Receive the conscientious care with preferential price when applying the
        promotion codes
      </Text>
    </View>
  );
}
