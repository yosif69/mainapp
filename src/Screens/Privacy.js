import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Colors from '../res/Colors';

const Privacy = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Privacy Policy</Text>

      <Text style={styles.sectionTitle}>Personal Information</Text>
      <Text style={styles.sectionText}>
        We respect your privacy and are committed to protecting your personal information. We collect data to improve your experience in the app.
      </Text>

      <Text style={styles.sectionTitle}>Data Collection</Text>
      <Text style={styles.sectionText}>
        We only collect data necessary to provide our services, such as your name, email address, and purchase history.
      </Text>

      <Text style={styles.sectionTitle}>Your Privacy Choices</Text>
      <Text style={styles.sectionText}>
        You can update your privacy settings to control what information is shared with us.
      </Text>

      <Text style={styles.sectionTitle}>Security</Text>
      <Text style={styles.sectionText}>
        We implement security measures to protect your data. Contact support if you have any concerns.
      </Text>
    </ScrollView>
  );
};

export default Privacy;

const styles = StyleSheet.create({
 container: {
          flex: 1,
          padding: 20,
          backgroundColor:Colors.black,
         },
        headerText: {
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 20,
          color: Colors.white
        },
        sectionTitle: {
          fontSize: 20,
          fontWeight: '600',
          marginVertical: 10,
          color: Colors.white

        },
        sectionText: {
          fontSize: 16,
          color: Colors.red,
          lineHeight: 22,
        },
      });
      