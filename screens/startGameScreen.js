import {View, Button,Text, TextInput, StyleSheet, Alert} from 'react-native'
import PrimaryButton from '../components/ui/primaryButton'
import { useState } from 'react';


function StartGameScreen({onPickedNum }){
    const [enteredNumber, setEnteredNumber] = useState('')

    function enteredNumberHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function confirmNumber(){
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number', 'Number has to be between 1 and 99', [{text: "Try again", style: 'destructive', onPress: setZero}])
            return
        }
        onPickedNum(chosenNumber)
    }

    function setZero(){
        setEnteredNumber('')
    }

    return(
        <View>
            <Text style={{textAlign:'center',fontSize: 30, fontWeight: 'bold', color: '#ddb52f', marginTop: 100, marginBottom: -170}}>Write your number</Text>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={enteredNumberHandler} value={enteredNumber} style={styles.textInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none'/>
                <View style={{flexDirection: 'row'}}>    
                    <View style={{flex: 1}}>
                        <PrimaryButton onPress={setZero}>Reset</PrimaryButton>
                    </View>
                    <View style={{flex: 1}}>
                        <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "50%",
        marginHorizontal: 30,
        padding: 25,
        backgroundColor: "#72063c",
        borderRadius: 8,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: {width: 0 , height: 7},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f", 
        marginVertical: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
});


export default StartGameScreen