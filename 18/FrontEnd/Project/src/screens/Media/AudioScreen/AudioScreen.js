import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'native-base';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

// import { useQuery } from '../../../hooks/axios.hook';
import ItemMedia from '../../../components/ItemMedia';

const dataItemLeft = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29];
const dataItemRight = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];

const AudioScreen = () => {
  const navigation = useNavigation();
//   const {data, loading} = useQuery({
//     url: '/units',
//   });
// console.log(!loading && data)

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/units')
      .then(res => setData(res.data))
      .catch(er => console.log(er.response))
      .finally(() => console.log('ket thuc'))
  }, []);

  console.log(data)
  return (
    <Row>
      <Col style={styles.collums}>
        {dataItemLeft.map((item, index) => (
          <ItemMedia label={`Audio Unit ${item}`} key={index} onClick={() => navigation.navigate('Audio Unit')} />
        ))}
      </Col>
      <Col style={styles.collums}>
        {dataItemRight.map((item, index) => (
          <ItemMedia label={`Audio Unit ${item}`} key={index} onClick={() => navigation.navigate('Audio Unit')} />
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

export default AudioScreen;
