import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { buttonStyles } from '../../../styles'
import styles from './styles'

export default function ProfileHeader() {
    return (
        <View style = {styles.container}>
            <Avatar.Icon size={80} icon={"account"}/>
            <Text style = {style.emailText}>{user.email}</Text>
            <View style= {styles.counterContainer}>
                <View styles={styles.counterItemContainer}>
                    <Text style = {styles.counterNumberText}>0</Text>
                    <Text style = {styles.counterLabelText}>Followers</Text>
                </View>

                <View styles={styles.counterItemContainer}>
                    <Text style = {styles.counterNumberText}>0</Text>
                    <Text style = {styles.counterLabelText}>Followers</Text>
                </View>

                <View styles={styles.counterItemContainer}>
                    <Text style = {styles.counterNumberText}>0</Text>
                    <Text style = {styles.counterLabelText}>Likes</Text>
                </View>
            </View>
            <TouchableOpacity styles = {buttonStyles.grayOutlinedButton}>
                <Text>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    )
}
