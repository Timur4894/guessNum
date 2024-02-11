import { useEffect, useState } from "react"
import { StyleSheet, Text, View, Alert, FlatList } from "react-native"
import NumberContainer from "../components/game/numberContainer"
import PrimaryButton from "../components/ui/primaryButton"
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from "../components/game/guessLogItem"

function generateRandomNumber(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max-min)) + min
 
    if (rndNum == exclude){ 
        return generateRandomNumber(min, max, exclude)
    }else{
        return rndNum
    }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({userNumber, onGameOver}){
    const nitialGuess = generateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(nitialGuess)
    const [guessRounds, setGuessRounds] = useState([nitialGuess])

    useEffect(()=>{
        if (currentGuess == userNumber){
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(()=>{
        minBoundary = 1
        maxBoundary = 100
    },[])

    function nextGuessHandler(direction){
        if((direction == 'lower' && currentGuess < userNumber) || (direction == 'greater' && currentGuess > userNumber)){
            Alert.alert("Do not lie!","You know that this is wrong...", [{text: "sorry", Style: 'cancel'}])
            return
        }

        if (direction==='lower'){
            maxBoundary = currentGuess
        }else{
            minBoundary = currentGuess + 1
        }
        const newRndNum = generateRandomNumber(minBoundary,maxBoundary,currentGuess)
        setCurrentGuess(newRndNum)
        setGuessRounds(prevGuessR => [newRndNum, ...prevGuessR])
    }
    return( 
        <View style={styles.screen}>
            <Text style={{textAlign:'center',fontSize: 30, fontWeight: 'bold', color: '#ddb52f'}}>Opponent's guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={{textAlign:'center',
                fontSize: 20, 
                fontWeight: 'normal',
                 color: '#ddb52f'}}>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>Lower</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>Higher</PrimaryButton>
                </View>   
            </View>
            <View style={{marginTop: 20, flex: 1}}>
                {/* {guessRounds.map(rounds=>{
                    return(
                        <Text key={rounds}>
                            {rounds}
                        </Text>
                    )
                })} */}
                <FlatList data={guessRounds} renderItem={(itemData) => <GuessLogItem roundNumber={itemData.index + 1} guess={itemData.item}/>} keyExtractor={(item)=>item} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
    }
});

export default GameScreen