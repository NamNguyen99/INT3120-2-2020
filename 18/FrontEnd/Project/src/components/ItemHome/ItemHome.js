import { Button } from 'native-base';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ItemHome = ({icon, label, onClick, ...props}) => {
  return (
    <Button style={styles.container} onPress={onClick} {...props} bordered info>
      <Icon name={icon} size={30} color="blue"/>
      <Text>{label}</Text>
      
    </Button>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: 100,
    height: 80,
    borderRadius: 10
  }
})

export default ItemHome;
