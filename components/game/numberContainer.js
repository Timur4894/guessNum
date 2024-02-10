import { StyleSheet ,View, Text } from "react-native"

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numText}>
                {children }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
        borderWidth: 4,
        borderColor: "#ddb52f",
        margin: 24,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numText:{
        color: "#ddb52f",
        fontSize: 36,
        fontWeight: 'bold'
    }
});

export default NumberContainer