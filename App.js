import { StyleSheet, Text, View, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/startGameScreen';
import { useState } from 'react';
import GameScreen  from './screens/gameScreen';
import GameOverScreen from './screens/gameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  let screen = <StartGameScreen onPickedNum={pickedNumberHandler}/>

  function gameOverHandler(){
    setGameIsOver(true)
  }

  function startNewGameHandler(){
    setUserNumber(null)
    setGuessRounds(0)
  }

  if(userNumber){
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} onRestatNewGame={startNewGameHandler} roundsNumber={guessRounds}/>
  }



  return (
      <LinearGradient colors={["#72063c",'#ddb52f']} style={styles.rootScreen}>
        <ImageBackground imageStyle={{opacity:0.3}} style={styles.rootScreen} source={require('../RNCourse/assets/background.png')} resizeMode='cover'>
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});
