import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Chat = () => {
  const users = [
    {
      id: 1,
      name: 'Tendulkar',
    },
    {
      id: 2,
      name: 'Kumar',
    },
    {
      id: 3,
      name: 'Sangakara',
    },
    {
      id: 4,
      name: 'Lasit',
    },
    {
      id: 5,
      name: 'Bumrah',
    },
    {
      id: 6,
      name: 'Rohit',
    },
    {
      id: 7,
      name: 'Sharma',
    },
    {
      id: 8,
      name: 'Kohli',
    },
    {
      id: 9,
      name: 'Shakib',
    },
    {
      id: 10,
      name: 'Tamim',
    },
    {
      id: 11,
      name: 'Mashrafi',
    },
    {
      id: 12,
      name: 'Mushfiq',
    },
    {
      id: 13,
      name: 'Tamim',
    },
  ];

  return (
    <View>
      <Text>Chat</Text>
      {/* <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
      /> */}
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {users.map(item => (
            <Text style={styles.item}>{item.name}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: 'black',
  },
});

export default Chat;
