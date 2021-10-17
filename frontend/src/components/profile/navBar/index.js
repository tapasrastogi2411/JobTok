import React from 'react'
import { View, Text, TouchableOpacityBase } from 'react-native'
import styles from '../styles'

export default function ProfileNavBar({user}) {
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Feather name = "search" size = {20} />
            </TouchableOpacity>
                <Text>{user.dispalyName}</Text>
            <TouchableOpacity>
                <Feather name = "menu" size = {24} />
            </TouchableOpacity>
        </View>
    )
}
