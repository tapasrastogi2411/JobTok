import React from 'react'
import { View, Text } from 'react-native'
import ProfileNavBar from '../../components/profile'
import styles from './style'
import ProfileNavBar from '../../components/profile'
import ProfileHeader from '../../components/profile/header'

export default function ProfileScreen() {
    const currentUser = useSelector(state => state.auth.currentUser)
    console.log(currentUser)
    return (
        <View style = {styles.container}>
            <ProfileNavBar user = {currentUser}/>
            <ProfileHeader />
        </View>
    )
}
