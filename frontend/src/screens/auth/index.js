import React from "react";
import { View, Text } from 'react-native'
import AuthMenu from "../../components/auth/menu";
import styles from "./styles";
import { useState } from 'react';

export default function AuthScreen() {

    const[authPage, setAuthPage] = useState(0)

    return (
        <View style ={styles.container}>
            
            <AuthMenu authPage = {authPage} setAuthPage = {setAuthPage} />
        </View>
    )
}