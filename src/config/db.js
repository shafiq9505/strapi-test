
//firebase environment
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyDSVlGdxIEVfqiVQIRwEQW8SAdUGl3-Fvg",
    authDomain: "vuefirebase-f8a9a.firebaseapp.com",
    databaseURL: "https://vuefirebase-f8a9a.firebaseio.com",
    projectId: "vuefirebase-f8a9a",
    storageBucket: "vuefirebase-f8a9a.appspot.com",
    messagingSenderId: "91301553886"
}

let app = Firebase.initializeApp(config)
export const db = app.database()