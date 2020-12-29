import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import HeaderView from '../../components/header/HeaderView';

const homeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* <HeaderView /> */}
        <Text>homeScreen@@</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signInScreen')}>
          <Text>Go Login Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default homeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
