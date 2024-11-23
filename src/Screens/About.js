import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Colors from '../res/Colors';

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>About Us</Text>
      
      <Text style={styles.sectionTitle}>Our Mission</Text>
      <Text style={styles.sectionText}>
        Our clothing app is dedicated to bringing you the latest in fashion trends with a seamless shopping experience. We aim to offer a diverse range of stylish clothing options suitable for everyone.
      </Text>

      <Text style={styles.sectionTitle}>App Version</Text>
      <Text style={styles.sectionText}>Version 1.0.0</Text>

      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={styles.sectionText}>
        For any questions or support, please reach out to us at  "yosif123@gmail.com"
      </Text>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.black, 
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#3B9D82",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
    color: '#3B9D82',
  },
  sectionText: {
    fontSize: 16,
    color: Colors.white,
    lineHeight: 22,
  },
});
