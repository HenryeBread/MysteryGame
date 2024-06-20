import {StyleSheet, View, Text, Pressable} from 'react-native'

function GameItem(props) {
    return (
        <Pressable 
        onPress={props.onDeleteGame.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
        >
            <View style={styles.gameItem}>
                <Text style={styles.gameText}>{props.text}</Text>
            </View>
        </Pressable>
    );
};

export default GameItem;

const styles = StyleSheet.create({
    gameItem: {
        margin: 8,
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'skyblue',
       },
    gameText: {
        color: 'white'
       },
    pressedItem: {
        opacity: 0.5
    }
});