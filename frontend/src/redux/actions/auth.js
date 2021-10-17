// Code for authentication

// Import firebase
import firebase from 'firebase'
require('firebase/auth')

export const login = (email, password)  => new Promise((resolve, reject) => {

    console.log("Print statement 1 for login")


    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        resolve()
    })

        .catch(() => {

            reject()
        })
})

// Handling registration now, which is almost similar to login

export const register = (email, password)  => new Promise((resolve, reject) => {

    console.log("Print statement 1 for register")


    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        resolve()
    })

        .catch(() => {

            reject()
        })
})
