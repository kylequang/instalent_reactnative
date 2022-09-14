import {View, Text, Image} from 'react-native';
import React from 'react';
import {MainBlack} from '../../constants/Colors';
import IntroSecondImage from '../../../assets/images/intro2.svg';
export default function IntroSecondScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 106,
      }}>
      <IntroSecondImage/>
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
        Easily manage your booking
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginHorizontal: 40,
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 20,
        }}>
        Pre-book your favorite services, do not waste time on waiting. All
        activities are updated quickly & easily controlled.
      </Text>
    </View>
  );
}
