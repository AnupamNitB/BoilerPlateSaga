import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import HeaderView from '../../components/header/HeaderView';

const splashScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderView title="Login" />
      <View style={styles.container}>
        <Text>splashScreen@@</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signInScreen')}>
          <Text>Go Login Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default splashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
