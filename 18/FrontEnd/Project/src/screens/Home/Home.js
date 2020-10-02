import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, StatusBar, ScrollView } from 'react-native';
import {
	Container,
	
  Thumbnail,
  Row, Col
} from 'native-base';
import header_home from '../../constants/images/header_home.png';
import avatar from '../../constants/images/avatar.png';
import ItemHome from '../../components/ItemHome';

const Home = () => {
  return (
    <Container>
      <View style={styles.header}>
      <Image source={header_home} style={styles.header_home} />
      </View>
      <View style={styles.avatar}>
        <Thumbnail large source={avatar} />
      </View>

      <View style={styles.container}>
        <Text style={styles.text_header}>Hack não 1500 bản 2020</Text>

        <ScrollView style={styles.content}>
          <Text style={styles.text_title}>Học sách</Text>
          <Row>
            <Col style={styles.collums}>
              <ItemHome icon={"headphones"} label={"Audio & Video"} />
            </Col>
            <Col style={styles.collums}>
            <ItemHome icon={"file-alt"} label={"Kiểm tra"} />
            </Col>
            <Col style={styles.collums}>

            <ItemHome icon={"book-open"} label={"Luyện tập"} />
            </Col>
            
          </Row>

          <Text style={styles.text_title}>Học mở rộng</Text>
          <Row>
            <Col style={styles.collums}>
              <ItemHome icon={"music"} label={"Bài hát"} />
            </Col>
            <Col style={styles.collums}>
            <ItemHome icon={"search"} label={"Từ điển tra câu"} />
            </Col>
            <Col style={styles.collums}>

            <ItemHome icon={"puzzle-piece"} label={"Truyện chêm tham khảo"} />
            </Col>
            
          </Row>
        </ScrollView>
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
    textAlign: 'center',
    marginTop: 80
  },
  avatar: {
    position: 'absolute',
    top: screen.height * 0.15,
    left: 170,
    zIndex: 10
  },
  collums: {
    marginLeft: 15
  },
  text_title: {
    fontSize: 20,
    fontWeight: "600",
    color: '#000',
    marginLeft: 15,
    marginBottom: 10
  }
})

export default Home;
