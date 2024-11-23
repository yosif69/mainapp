import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import Screen3 from '.././src/Screens/Screen3';
import LogIn from '../src/Screens/LogIn';
import PageHome from '../src/Screens/PageHome';
import AllProduct from '../src/Screens/AllProduct';
import ProductScreen from '../src/Screens/ProductScreen';
import Cart from '../src/Screens/Cart';
import CreateAccount from '../src/Screens/CreateAccount';
import Welcome from '../src/Screens/Welcome';
import SettingsButton from '../src/components/SettingsButton';
import Settingss from '../src/Screens/Settingss';
import Account from '../src/Screens/Account';
import Privacy from '../src/Screens/Privacy';
import About from '../src/Screens/About';
import EditProfile from '../src/Screens/EditProfile';


const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor: '#333'},
      headerTitle: '', 
    }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen style={{flex: 1}} name="LogIn" component={LogIn}/>
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      {/* <Stack.Screen name="Screen4" component={Screen4} /> */}
      <Stack.Screen name="PageHome" component={PageHome} />
      {/* <Stack.Screen name="CarItem" component={CarItem} /> */}
      <Stack.Screen name="Product" component={AllProduct} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="SettingsS" component={SettingsButton} />
      <Stack.Screen name="Settingss" component={Settingss} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="EditProfile" component={EditProfile} />




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