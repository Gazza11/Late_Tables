import React from 'react'
import{
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Button,
    ColorPropType,
} from 'react-native'
import { icons, SIZES, COLORS} from "../constants"

const UserPage = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.userPageStyle}>
                <Text>Account Details</Text>
                <Text>Username: AlySmith</Text>
                <Text>Email Address: aly.smith@fanduel.com</Text>
            </View>
            {/* <Button
                    onPress={}
                    title="Edit"
                    color= {COLORS.primary}
                    accessibilityLabel="Edit information"
                /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    userPageStyle: {    
        flex: 1,
        alignItems: "center",
        width: '95%',
        padding: 15,
        justifyContent: "center",
    },
});

export default UserPage