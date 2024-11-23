import { SafeAreaView, View, ImageBackground, StyleSheet, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useContext, useState } from 'react';
import Images from '../assets/images/images';
import ScreenNames from '../../route/ScreenNames';
import { CreateUserApi, registerApi } from '../res/api';
import TestContext from '../../store/testContext';

const CreateAccount = (props) => {
  const onSignUpPress = () => {
    props.navigation.navigate(ScreenNames.PageHome);
  };

  const { setUser } = useContext(TestContext);
  const [text, onChangeText] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangeNumber] = useState('');
  const [loading, setloading] = useState(false);

  const CreateUser = async () => {
    setloading(true);
    
    const body = {
      email: email,
      userName: text,
      pass: password
    };

    CreateUserApi(body)
      .then((value) => {
        if (value?.user) {
          setUser(value.user);
          props.navigation.navigate(ScreenNames.PageHome);
        } else {
          alert(value?.errorMessage);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false); // Corrected this to ensure the loading state is updated properly
      });
  };

  return (
    <ImageBackground source={Images.skull()} resizeMode="cover" style={styles.image}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.imageBox}>
            <Image style={styles.tinyLogo} source={Images.rkStyles()} />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder='Email'
            placeholderTextColor={'#aaa'}
            keyboardType='email-address'
          />
          <View style={styles.textBOX}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text} // Fixed to match the declared state variable 'text'
              placeholder='Username'
              placeholderTextColor={'#aaa'}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={password}
              placeholder="Password"
              placeholderTextColor={'#aaa'}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.boxLogin}>
            <TouchableOpacity onPress={CreateUser} style={styles.Touch}>
              {
                loading ?
                  <ActivityIndicator size='large' color='#333' /> : 
                  <Text style={styles.TouchLogin}>Continue</Text>
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
  },
  card: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  imageBox: {
    alignItems: 'center',
    marginBottom: 30,
  },
  tinyLogo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  textBOX: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    color: '#333',
  },
  boxLogin: {
    alignItems: 'center',
  },
  Touch: {
    backgroundColor: '#E70000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  TouchLogin: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CreateAccount;
