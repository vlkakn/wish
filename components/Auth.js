import React, { useRef, useState } from 'react'
import { signup, logout, useAuth } from '../firebase/client'

export default function Auth() {
  const [loading, setLoading] = useState()
  const currentUser = useAuth()

  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSignup() {
    setLoading(true)
    try {
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert('error!')
    }
    setLoading(false)
  }
  async function handleSignout() {
    setLoading(true)
    try {
      await logout()
    } catch {
      alert('Error!')
    }
    setLoading(false)
  }

  return (
    <div className="mt-10">
      <div>Current User : {currentUser?.email} </div>
      <div>
        <input ref={emailRef} placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
      </div>
      <button
        disabled={loading || currentUser}
        className="bg-blue-600 text-white px-2 py-1 rounded mt-4"
        onClick={handleSignup}
      >
        Sign Up
      </button>

      <button
        disabled={loading || !currentUser}
        className="bg-blue-600 text-white px-2 py-1 rounded m-4"
        onClick={handleSignout}
      >
        Sign Out
      </button>
    </div>
  )
}
