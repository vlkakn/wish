import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

const credentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_AP_ID
}

const app = initializeApp(credentials)
const auth = getAuth()

export default app

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function logout() {
  return signOut(auth)
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unSub
  }, [])
  return currentUser
}
