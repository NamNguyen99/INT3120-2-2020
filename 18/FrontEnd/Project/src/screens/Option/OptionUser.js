import React, { useMemo } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, StatusBar, ScrollView } from 'react-native';
import { Container, Thumbnail, Row, Col } from 'native-base';
import ItemUser from '../../components/ItemUser';
import { endOfWeek, isBefore } from 'date-fns';

const mockData = [
  {
    date: '2020/12/08',
    infor: [
      {
        name: 'nghia',
        age: 20,
        gender: 'nam',
        hour: '12:00',
        order: 'Hen cafe',
      },
      {
        name: 'hien',
        age: '20',
        gender: 'nu',
        hour: '14:00',
        order: 'Hen ho',
      },
    ],
  },
  {
    date: '2020/12/11',
    infor: [
      {
        name: 'nghia',
        age: 20,
        gender: 'nam',
        hour: '12:00',
        order: 'Hen cafe',
      },
    ],
  },
  {
    date: '2020/12/15',
    infor: [
      {
        name: 'hien',
        age: '20',
        gender: 'nu',
        hour: '14:00',
        order: 'Hen Cafe',
      },
    ],
  },
  {
    date: '2020/12/17',
    infor: [
      {
        name: 'hien',
        age: '20',
        gender: 'nu',
        hour: '14:00',
        order: 'Hen Cafe',
      },
    ],
  },
];

const OptionUser = () => {
  const endWeek = endOfWeek(new Date(), { weekStartsOn: 1 });

  const listThisWeek = useMemo(() => {
    return mockData.filter((item) => isBefore(new Date(item.date), endWeek));
  }, []);

  const listNextWeek = useMemo(() => {
    return mockData.filter((item) => !isBefore(new Date(item.date), endWeek));
  }, []);
  
  return (
    <Container style={styles.body}>
      <Text>Tuan nay</Text>

      {listThisWeek.map((item) => (
        <ItemUser date={item.date} infor={item.infor} />
      ))}

      <Text>Tuan sau</Text>

      {listNextWeek.map((item) => (
        <ItemUser date={item.date} infor={item.infor} />
      ))}
    </Container>
  );
};
const screen = Dimensions.get('screen');

const styles = StyleSheet.create({});

export default OptionUser;
