import { SafeAreaView, View, ImageBackground, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Images from '../assets/images/images';
import ScreenNames from '../../route/ScreenNames';

const LogIn = (props) => {
  const onPayPress1 = () => {
    props.navigation.navigate(ScreenNames.PageHome);
  };

  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

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
              placeholder='Email, UserName:'
              placeholderTextColor={'#aaa'}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Password:"
              keyboardType="default"
              placeholderTextColor={'#aaa'}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.boxLogin}>
            <TouchableOpacity onPress={onPayPress1} style={styles.Touch}>
              <Text style={styles.TouchLogin}>Log In</Text>
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
    backgroundColor:200,
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

export default LogIn;
