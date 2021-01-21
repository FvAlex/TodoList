import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const Task = (props) => {

    const delMsg = () => Alert.alert(
        "Suppression tâche",
        "Es-tu vraiment sûr ou alors t'es un petit peu con?",
        [
            {
                text: "Oui",
                onPress: () => props.deleteTask(props.id)
            }, 
            {
                text: "Non",
                onPress: () => console.log("Annulation de la suppression"),
                style: "cancel"
            }
        ],
        { cancelable: false }
    )

    return (
        <View style={styles.task}>
            <Text >{props.title} </Text>
            <TouchableOpacity onPress={delMsg}>
                <MaterialCommunityIcons name="delete-variant" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    task: {
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'white',
        width: 300,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
      },
})
