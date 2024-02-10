import {StyleSheet ,View, Text, Pressable} from 'react-native'
function PrimaryButton({children, onPress}){

    return(
        <View style={styles.buttonOuter}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInner, styles.pressed] : styles.buttonInner} onPress={onPress} android_ripple={{color: "#FFF"}}>
                    <Text style={styles.buttonText}>
                        {children}
                    </Text>
            </Pressable>
        </View>  
    )
}

const styles = StyleSheet.create({
    buttonOuter: {
        margin: 4,
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.75, 
        borderRadius: 13,  
    },
    buttonInner: {
        borderRadius: 10,  
        backgroundColor: "#4e0329",
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2
    },
    buttonText: {
        color: "#ddb52f", 
        textAlign: "center"
    }
});

export default PrimaryButton