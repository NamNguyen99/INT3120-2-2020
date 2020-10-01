import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, StatusBar } from 'react-native';
import {
	Header,
	Left,
	Title,
	Body,
	Container,
	Button,
	Icon,
  Right,
  Thumbnail
} from 'native-base';
import header_home from '../../constants/images/header_home.png';
import avatar from '../../constants/images/avatar.png';

const Home = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#fff"/>

      <View style={styles.header}>
      <Image source={header_home} style={styles.header_home} />
      </View>
      <View style={styles.avatar}>
        <Thumbnail large source={avatar} />
      </View>

      <View style={styles.container}>
        <Text style={styles.text_header}>Hack nao 1500 ban 2020</Text>
      </View>
      
    </Container>
  )
}
const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  header_home: {
    width: screen.width,
    height: screen.height * 0.2,
    alignItems: "center",
    justifyContent: 'center',
    resizeMode: 'stretch'
  },
  header: {
    paddingTop: 20,
    backgroundColor: '#F3F3F3',
    borderBottomColor: '#000000'
  },
  container: {
    backgroundColor: '#F3F3F3'
  },
  text_header: {
    color: '#00CDDA',
    fontSize: 24,
    fontWeight: "700",
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 80
  },
  avatar: {
    position: 'absolute',
    top: screen.height * 0.18,
    left: 170,
    zIndex: 10
  }
})

export default Home;
