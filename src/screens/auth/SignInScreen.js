import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import BottomWave from '../../components/BottomWave';
import SocialButton from '../../components/SocialButton';
import LogoFB from '../../../assets/icons/app/fb.svg';
import LogoGoogle from '../../../assets/icons/app/google.svg';
import PhoneInput from 'react-native-phone-number-input';
import Nstalent from '../../../assets/images/nstalent.svg';
import LogoWhite from '../../../assets/images/logo_white.svg';
import I from '../../../assets/images/i.svg';
import {LightOrange, MainWhite, PrimaryColor} from '../../constants/Colors';
import MainButton from '../../components/MainButton';

const SignInScreen = ({navigation}) => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tempPhone, setTempPhone] = useState('');

  return (
    <View style={styles.viewMain}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 100,
          marginBottom: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LogoWhite/>
      </View>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="VN"
        placeholder="Số Điện Thoại"
        layout="first"
        onChangeText={phone => {
          // setTempPhone(phone);
          // setPhoneNumber('+' + phoneInput.current?.getCallingCode() + phone);
          // if (11 <= phoneNumber.length <= 13) setVerifyButton(false);
        }}
        countryPickerProps={{withAlphaFilter: true}}
        disableArrowIcon={true}
        containerStyle={{
          width: '100%',
          backgroundColor: MainWhite,
          borderRadius: 8,
        }}
        textContainerStyle={{
          borderRadius:8,
        }}
        flagButtonStyle={{
          width: '15%',
        }}
        countryPickerButtonStyle={{}}
      />
      <View style={{marginBottom: 30, marginTop: 20}}>
        <Text
          style={{
            fontWeight: '400',
            color: MainWhite,
            fontSize: 14,
            lineHeight: 20,
          }}>
          I agree to the Terms and Privacy Policy
        </Text>
      </View>
      <MainButton
        title="Get started"
        backgroundColor={LightOrange}
        color={PrimaryColor}
      />
      <View style={{marginBottom: 100}} />
      <SocialButton title="Sign in with Facebook" svg={<LogoFB />} />
      <SocialButton title="Sign in with Google" svg={<LogoGoogle />} onPress={()=>navigation.navigate('home')}/>
      <BottomWave />
    </View>
  );
};
const styles = StyleSheet.create({
  viewMain: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'red',
  },
});
export default SignInScreen;
