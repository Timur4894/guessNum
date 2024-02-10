import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PrimaryButton from '../components/ui/primaryButton';

function GameOverScreen({roundsNumber, userNumber, onRestatNewGame}) {
    return (
        <View style={styles.container}>
            <Text style={styles.gameOverText}>
                GAME OVER
            </Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/success.png')} />
            </View>
            <Text style={{marginTop: 20, marginBottom: 10, fontSize: 15}}> Your phone needed <Text style={{fontWeight:"bold"}}>{roundsNumber}</Text> rounds to guess the number <Text style={{fontWeight:"bold"}}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onRestatNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameOverText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ddb52f',
        marginBottom: 10,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default GameOverScreen;
