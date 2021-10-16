import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import styles from "./style";
import { Feather } from '@expo/vector-icons';

export default function AuthMenu() {

    return (
        <View style={styles.container}>
            <View style={styles.containerMain}>

                <Text style={styles.headerText}>
                    Log in
                </Text>
                <TouchableOpacity style={styles.providerButton}>
                    <Feather name="user" size={24} color="black" />
                    <Text style={styles.providerButtonText}> Use Email</Text>
                    <View />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.containerBottomButton}>
                <Text> Dont have an account?<Text style={styles.containBottomButtonText}> Sign up</Text></Text>

            </TouchableOpacity>

        </View>
    )
}