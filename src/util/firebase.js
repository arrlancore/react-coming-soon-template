import firebase from 'firebase/app'
import firebaseDB from 'firebase/database'

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJCET_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}
firebase.initializeApp(config)

// Get a reference to the database service
// firebase.analytics()
var database = firebase.database()

export default database
