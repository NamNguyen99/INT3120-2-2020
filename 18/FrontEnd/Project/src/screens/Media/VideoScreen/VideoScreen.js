import React from 'react';
import { Container, Row, Col } from 'native-base';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ItemMedia from '../../../components/ItemMedia';

const dataItemLeft = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29];
const dataItemRight = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];

const VideoScreen = () => {
  const navigation = useNavigation();

  return (
    <Row>
      <Col style={styles.collums}>
        {dataItemLeft.map((item, index) => (
        <ItemMedia label={`Video Unit ${item}`} key={index} onClick={() => navigation.navigate('Video Unit')} />
        ))}
      </Col>
      <Col style={styles.collums}>
        {dataItemRight.map((item, index) => (
        <ItemMedia label={`Video Unit ${item}`} key={index} onClick={() => navigation.navigate('Video Unit')} />
        ))}
      </Col>
    </Row>
  );
};

const styles = StyleSheet.create({
  collums: {
    marginLeft: 20,
  },
});

export default VideoScreen;
