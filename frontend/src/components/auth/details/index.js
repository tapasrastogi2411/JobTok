import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './style'
import { Feather } from '@expo/vector-icons'

export default function AuthDetails({ authPage, setDetailsPage }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>

            
            <TouchableOpacity onPress={() => { setDetailsPage(false); }}>

                <Feather name="arrow-left" size={24} color='black' />

            </TouchableOpacity>

            <TextInput
                onChangeText={(text) => setEmail(text)}
                placeholder='Email'
                style={styles.textInput}
            />
            <Text></Text>

            <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder='Password'
                style={styles.textInput}
            />

            <TouchableOpacity style={styles.button}>

                <Text style={styles.buttonText}> {authPage == 0 ? 'Sign in' : 'Sign up'}</Text>
            </TouchableOpacity>


            <Text></Text>

        </View>
    )
}