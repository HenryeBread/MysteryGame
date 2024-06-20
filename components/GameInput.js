import { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

function GameInput(props) {
    const [enteredGameText, setEnteredGameText] = useState('');

    function gameInputHandler(enteredText) {
        setEnteredGameText(enteredText);
      };

    function addGameHandler() {
        props.onAddGame(enteredGameText);
        setEnteredGameText('');
    }
    return (
        <Modal visible = {props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/LSU_Logo.png')}/>
                <TextInput 
                 style={styles.textInput}
                 placeholder='Your favorite game!' 
                 onChangeText={gameInputHandler}
                 value={enteredGameText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Game' onPress={addGameHandler} color='#b180f0'/>
                    </View>
                    
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color='purple'/>    
                    </View>
                    
                </View>
                
            </View>    
        </Modal>
    );
};

export default GameInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold'
       },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '90%',
        height: 50,
        color: 'black',
        backgroundColor: '#f4d03f',
        padding: 16
       },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})