import React , {useState} from 'react'
import { View, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { createPost } from '../../redux/actions'

export default function SavePostScreen(props) {
    // use this console log to check to see if it works
    // console.log(props.route.params.source)
    const [description, setDescription] = useState('')
    const [requestRunning, setRequestRunning] = useState(false)
    const navigation = useNavigation(props)

    // in redux, we dispatch actions
    const dispatch = useDispatch();
    const handleSavePost = () => {
        setRequestRunning(true)
        dispatch(createPost(description, props.route.params.source))
            .then(() => navigation.dispatch(StackActions.popToTop()))
            .catch(() => setRequestRunning(false))
    }
    if (requestRunning) {
        <View style = {styles.uploadingContainer}>
            <ActivityIndicator color = 'red' size = 'large'/>
        </View>
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.formContainer}>
                <TextInput
                    style = {styles.inputText}
                    maxLength={150}
                    multiline
                    onChangeText = {(text) => setDescription(text)}
                    placeholder="Summary of your elevator pitch"
                />
                <Image 
                    style = {styles.mediaPreview}
                    source = {{ uri: props.route.params.source }}
                />
            </View>
        <View style={styles.spacer}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack}
                    style = {styles.cancelButton}>
                    <Feather name="x" size ={24} color="black"/>
                    <Text style = {styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack}
                    style = {styles.postButton}>
                    <Feather name="corner-left-up" size ={24} color="black"/>
                    <Text style = {styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
