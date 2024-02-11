import {StyleSheet ,View, Text} from 'react-native'

function GuessLogItem({roundNumber, guess}){
    return(
        <View style={styles.listItem}>
            <Text style={{ color: "#ddb52f", }}>
                #{roundNumber}
            </Text>
            <Text style={{ color: "#ddb52f", }}>
                Opponent's guess: {guess}
            </Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: "#ddb52f", 
        borderWidth: 2,
        borderRadius: 40,
        padding: 20,
        marginVertical: 8,
        backgroundColor: "#4e0329",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0,height:5},
        shadowOpacity: 0.5,
        shadowRadius: 3
    }

})