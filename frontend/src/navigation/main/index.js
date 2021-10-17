import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { userAuthStateListener } from '../../redux/actions'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../../screens/auth'
import HomeScreen from '../home'


const Stack = createStackNavigator()
export default function Route() {

    // Use hooks here
    const currentUserObj = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userAuthStateListener);

    }, [])

    console.log(currentUserObj)

    if (!currentUserObj.loaded) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {currentUserObj.currentUser == null ?
                        <Stack.Screen name="auth" component={AuthScreen} options={{ headerShown: false }} />
                        :
                        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
                        
                    }

                    

                </Stack.Navigator>
                <Text></Text>
            </NavigationContainer>
        )
    }


    return (

        <View>
            <Text></Text>
        </View>
    )
}