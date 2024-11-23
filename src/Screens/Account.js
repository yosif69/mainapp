import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../res/Colors'; // Ensure this file is correctly imported
import { useNavigation } from '@react-navigation/native'; // Correctly import useNavigation
import ScreenNames from '../../route/ScreenNames'; // Assuming you have defined this somewhere

export default function Account() {
  const navigation = useNavigation(); // Use useNavigation hook to access navigation prop

  const onPayPress1 = () => {
    navigation.navigate(ScreenNames.EditProfile); // Navigate using useNavigation
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://example.com/user-profile-pic.jpg' }} 
          style={styles.profileImage}
        />
        <Text style={styles.userName}>yosif</Text>
        <Text style={styles.userEmail}>yosif@gmail.com</Text>
      </View>

      <TouchableOpacity onPress={onPayPress1} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Account Info</Text>
        <Text style={styles.infoText}>Joined: January 2024</Text>
        <Text style={styles.infoText}>Last Login: October 25, 202 4</Text>
      </View>

      {/* Uncomment this section if you wish to include the logout button */}
      {/* <TouchableOpacity style={styles.logoutButton}> */}
        {/* <Text style={styles.logoutText}>Log Out</Text> */}
      {/* </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.black,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: Colors.blue, // Optional border color for aesthetics
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  userEmail: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: Colors.blue,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  editButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  infoContainer: {
    marginBottom: 40,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    margin: 5,
    color: Colors.white,
  },
  logoutButton: {
    backgroundColor: '#E70000',
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
