import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function SavePostScreen(props) {
    // use this console log to check to see if it works
    // console.log(props.route.params.source)
    return (
        <View style = {styles.container}>
            <View>
                <TextInput
                    style = {styles.inputText}
                    maxLength={150}
                    multiline
                    placeholder="Summary of your elevator pitch"
                />
            </View>
        </View>
    )
}
