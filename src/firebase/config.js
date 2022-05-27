import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBtvDsDRvUXAGexWcTljuhEYLE3rUlELlk',
  authDomain: 'iot-project-3c354.firebaseapp.com',
  databaseURL: 'https://iot-project-3c354-default-rtdb.firebaseio.com',
  projectId: 'iot-project-3c354',
  storageBucket: 'iot-project-3c354.appspot.com',
  messagingSenderId: '247184102341',
  appId: '1:247184102341:web:e37f258aa38d109ffcf1ac',
  measurementId: 'G-7F2ZFMSW7Y',
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
