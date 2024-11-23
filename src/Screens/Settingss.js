import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../res/Colors'; 
import { useNavigation } from '@react-navigation/native';
import TestContext from '../../store/testContext';

const Settingss = ({ navigation }) => {
  const { setUser } = useContext(TestContext)
  const [silent, setSilent] = useState(false)
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };
  useNavigation().reset

  const handleLogOut = () => {
    setUser({});
    navigation.reset(({
      index:0,
      routes: [{ name: 'LogIn' },]
    }))
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Settings</Text>

      <TouchableOpacity style={styles.settingsOption} onPress={() => navigateTo('Account')}>
        <FontAwesome5 name="user" size={24} color="#4A90E2" />
        <Text style={styles.optionText}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsOption} onPress={() => setSilent(!silent)}>
        {
          <FontAwesome5  name={silent?"bell-slash":"bell"} size={24} color={silent?"red":"#4A90E2"} />
        }
        <Text style={styles.optionText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsOption} onPress={() => navigateTo('Privacy')}>
        <FontAwesome5 name="lock" size={24} color="#4A90E2" />
        <Text style={styles.optionText}>Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsOption} onPress={() => navigateTo('About')}>
        <FontAwesome5 name="info-circle" size={24} color="#4A90E2" />
        <Text style={styles.optionText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settingss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1F1F1F',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  settingsOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: Colors.red,
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  optionText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 15,
  },
  logoutButton: {
    marginTop: 50,
    backgroundColor: '#E70000',
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: Colors.white,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
