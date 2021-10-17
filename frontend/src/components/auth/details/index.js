import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './style'
import { Feather } from '@expo/vector-icons'
import {useDispatch} from 'react-redux'
import { register } from "../../../redux/actions";

export default function AuthDetails({ authPage, setDetailsPage }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // Have to dispatch action
    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch(login(email, password)).then(() => {

            console.log('Login was literally successfully')
        })
        .catch(() => {
            console.log('Unsuccessful login lol')
        }) 

    }
    // Handling the registration
    const handleRegister = () => {
        dispatch(register(email, password)).then(() => {

            console.log('REGISTER was literally successfully')
        })
        .catch(() => {
            console.log('Unsuccessful REGISTER lol')
        }) 

    }

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
                secureTextEntry
                style={styles.textInput}
            />

            <TouchableOpacity style={styles.button}
            onPress ={() => authPage == 0 ? handleLogin: handleRegister}>

                <Text style={styles.buttonText}> {authPage == 0 ? 'Sign in' : 'Sign up'}</Text>
            </TouchableOpacity>


            <Text></Text>

        </View>
    )
}