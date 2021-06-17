import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
});

function App() {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Sugar'},
    {id: uuidv4(), text: 'Tea leaves'},
    {id: uuidv4(), text: 'Bread'},
  ]);

  const deleteItem = id => {
    setItems(previtem => {
      return previtem.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'please enter an item', [{text: 'Ok'}]);
    } else {
      setItems(previtem => {
        return [{id: uuidv4(), text}, ...previtem];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

export default App;
