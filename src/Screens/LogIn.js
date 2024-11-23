import { SafeAreaView, View, ImageBackground, StyleSheet, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useContext, useState } from 'react';
import Images from '../assets/images/images';
import ScreenNames from '../../route/ScreenNames';
import { LogInApi } from '../res/api';
import TestContext from '../../store/testContext';

const LogIn = (props) => {
  const { setUser } = useContext(TestContext);
  const [text, onChangeText] = useState('');
  const [password, onChangeNumber] = useState('');
  const [loading, setloading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false); 

  const onPayPress1 = () => {
    props.navigation.navigate(ScreenNames.PageHome);
  };

  const onRegisterPress = () => {
    props.navigation.navigate(ScreenNames.CreateAccount);
  };

  const Login = async (body) => {
    setloading(true);
    LogInApi(body)
      .then((value) => {
        if (value?.user) {
          setUser(value.user);
          props.navigation.navigate(ScreenNames.PageHome);
        } else {
          alert(value?.errorMessage);
        }
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  };

  const preLogin = () => {
    const body = {
      userName: text,
      pass: password,
    };
    Login(body);
  };

  return (
    <ImageBackground source={Images.skull()} resizeMode="cover" style={styles.image}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.imageBox}>
            <Image style={styles.tinyLogo} source={Images.rkStyles()} />
          </View>
          <View style={styles.textBOX}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Email, Username:"
              placeholderTextColor={'#aaa'}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPass}
                onChangeText={onChangeNumber}
                value={password}
                placeholder="Password:"
                keyboardType="default"
                placeholderTextColor={'#aaa'}
                secureTextEntry={!isPasswordVisible} 
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setPasswordVisible(!isPasswordVisible)}
              >
                <Text style={styles.showPasswordText}>
                  {isPasswordVisible ? 'Hide' : 'Show'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxLogin}>
            <TouchableOpacity disabled={loading} onPress={() => preLogin()} style={styles.Touch}>
              {loading ? (
                <ActivityIndicator size="large" color={"white"} />
              ) : (
                <Text style={styles.TouchLogin}>Log In</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.registerBox}>
            <Text style={styles.questionText}>Need an account? </Text>
            <TouchableOpacity onPress={onRegisterPress}>
              <Text style={styles.registerText}>Register</Text>
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
    padding: 25,
    marginBottom: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 12,
  },
  imageBox: {
    alignItems: 'center',
    marginBottom: 15,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textBOX: {
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    fontSize: 16,
    color: '#333',
  },
  inputPass: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    fontSize: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 10,
  },
  showPasswordButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  showPasswordText: {
    fontSize: 14,
    color: '#E70000',
    fontWeight: 'bold',
  },
  boxLogin: {
    alignItems: 'center',
    marginBottom: 20,
  },
  Touch: {
    backgroundColor: '#E70000',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  TouchLogin: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  registerBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  questionText: {
    fontSize: 14,
    color: '#aaa',
  },
  registerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E70000',
  },
});

export default LogIn;
