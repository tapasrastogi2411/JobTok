import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../screens/auth/styles'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator();
const EmptyScreen = () => {

    return <View></View>
}

export default function HomeScreen() {

    return (
    <Tab.Navigator>
        <Tab.Screen
        name = "feed"
        component = {EmptyScreen}
        />
    </Tab.Navigator>
    )
}