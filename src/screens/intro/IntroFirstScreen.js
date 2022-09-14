import {View, Text, Image} from 'react-native';
import React from 'react';
import {MainBackGround, MainBlack, White100} from '../../constants/Colors';
import IntroFirstImage from '../../../assets/images/intro1.svg'
export default function IntroFirstScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 106,
      }}>
     
      <IntroFirstImage/>
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
        Match & connect you with talent
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginHorizontal: 40,
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 20,
        }}>
        Be the best version of yourself. We help you find the talented
        individuals in beauty field.
      </Text>
    </View>
  );
}
