import React from 'react';
import { Dimensions, Text, StyleSheet, View } from 'react-native';

const ItemUser = ({ infor, date }) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text>{date}</Text>
      </View>
      <View>
        {!!infor.length &&
          infor.map((item) => (
            <View style={styles.box_container}>
              <Text style={styles.title_text}>{item.order}</Text>
              <Text style={styles.title_text}>{item.hour}</Text>
              <Text>{item.name}</Text>
              <Text>
                {item.age} - {item.gender}
              </Text>
            </View>
          ))}
      </View>
    </View>
  );
};
const screen = Dimensions.get('screen');
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },
  box_container: {
    borderRadius: 10,
    padding: 10,
    marginLeft: 20,
    marginBottom: 10,
    width: screen.width * 0.8,
    borderWidth: 0.5,
    borderColor: '#00CDDA',
    justifyContent: 'center',
  },
  title_text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#00CDDA',
    textAlign: 'center',
  },
});

export default ItemUser;
