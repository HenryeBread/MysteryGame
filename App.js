import React, { useState } from 'react';
import 
{
   StyleSheet,
   View,
   FlatList,
   Button, 
} 
from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GameItem from'./components/GameItem';
import GameInput from './components/GameInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [gameCollection, setGameCollection] = useState([]);

  

  function addGameHandler(enteredGameText) {
    setGameCollection(currentGameColletion => [
      ...currentGameColletion,
       {text: enteredGameText, id: Math.random().toString() },
      ]);
      endAddGameHandler();
  };

  function deleteGameHandler(id){
    setGameCollection(currentGameColletion => {
      return currentGameColletion.filter((game) => game.id !== id);
    });
  }

    function startAddGameHandler() {
      setModalIsVisible(true);
    }

    function endAddGameHandler() {
      setModalIsVisible(false);
    }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="skyblue" onPress={startAddGameHandler}/>
      <GameInput 
       visible={modalIsVisible}
       onAddGame={addGameHandler}
       onCancel={endAddGameHandler}
       />
      <View style={styles.gamesContainer}>
        <FlatList
         data={gameCollection}
         renderItem={(itemData) => {
          return  (
          <GameItem 
          text={itemData.item.text}
          id={itemData.item.id}
          onDeleteGame={deleteGameHandler}
          />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        alwaysBounceVertical = {false} />
     </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  padding: 50,
  paddingHorizontal: 16
 },
 gamesContainer: {
  flex: 5
 }
 
});
