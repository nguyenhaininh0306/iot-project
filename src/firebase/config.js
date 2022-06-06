import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyC2Z_z9lKwmLXNXt4zHXaQE35i6JXT9B-g',
  authDomain: 'project-iot-a320a.firebaseapp.com',
  databaseURL: 'https://project-iot-a320a-default-rtdb.firebaseio.com',
  projectId: 'project-iot-a320a',
  storageBucket: 'project-iot-a320a.appspot.com',
  messagingSenderId: '121224023431',
  appId: '1:121224023431:web:52ff19e058299de3a11722',
  measurementId: 'G-3MVYYRPQM1',
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
