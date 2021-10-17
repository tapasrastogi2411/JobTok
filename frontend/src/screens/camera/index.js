import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
export default function CameraScreen() {

    
    const [cameraRef, setCameraRef] = useState(null)
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
    const [cameraFlash, setCameraFlash] = useState(Camera.Constants.Flash.off)
    const [isCameraReady, setIsCameraReady] = useState(false)
    const isFocused = useIsFocused()

    const recordVideo = async () => {
        if (cameraRef) {
            try {
                const options = {maxDuration: 120, quality: Camera.Constants.VideoQuality['480']}
                const videoRecordPromise = cameraRef.recordAsync(options)
                if (videoRecordPromise) {
                    const data = await videoRecordPromise;
                    const source = data.uri
                }
            } catch (error) {
                console.warn(error)
            }
        }
    }

    const stopVideo = async () => {
        if (cameraRef) {
            cameraRef.stopRecording()
        }
    }

    return (
        <View style = {styles.container}>
            {isFocused ?
            <Camera
                ref = {ref => setCameraRef(ref)}
                style = {styles.camera}
                ratio = {'16:9'}
                type = {CameraType}
                flashMode = {cameraFlash}
                onCameraReady = {() => setIsCameraReady(true)}
            />
            : null}

            <View style = {styles.bottomBarContainer}>
                <View style ={{ flex:1 }}></View>

                <View style={styles.recordButtonContainer}>
                    <TouchableOpacity
                        disabled={!isCameraReady}
                        onLongPress={() => recordVideo()}
                        onPressOut={() => stopVideo()}
                        style = {styles.recordButton}
                    />
                </View>

                <View style = {{flex: 1}}>
                    <TouchableOpacity
                        style = {styles.galleryButton}>
                            {galleryItems[0] == undefined ?
                            <></>
                        :
                        <Image
                            styles = {styles.galleryImageButton}
                            source = {{uri: galleryItems[0].uri}}
                        />}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
