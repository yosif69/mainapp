import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import Screen1 from '../src/Screens/Screen1';
import Screen2 from '../src/Screens/Screen2';
import Screen3 from '.././src/Screens/Screen3';
import LogIn from '../src/Screens/LogIn';
import PageHome from '../src/Screens/PageHome';
import AllProduct from '../src/Screens/AllProduct';
import CarItem from '../src/components/CarItem';
import Screen4 from '../src/Screens/Screen4';


const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor: '#292929'},
      headerTitle: '', 
    }}>
      <Stack.Screen style={{flex: 1}} name="LogIn" component={LogIn}/>
      {/* <Stack.Screen name="Screen4" component={Screen4} /> */}
      <Stack.Screen name="PageHome" component={PageHome} />
      {/* <Stack.Screen name="CarItem" component={CarItem} /> */}
      <Stack.Screen name="Product" component={AllProduct} />
      <Stack.Screen
          name={ScreenNames.Screen3}
          component={Screen3}
          options={{
            title: 'cart',
          }}
        />

    </Stack.Navigator>
  );
}

export default function nav(){
  return(
    <NavigationContainer>
      <MyStack/>
      
    </NavigationContainer>

    
  )
}