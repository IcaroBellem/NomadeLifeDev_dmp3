import { db } from '../firebase/config'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signOut,} from 'firebase/auth'
import {useState, useEffect } from 'react'

import React from 'react'

export const useAuthentication = () =>{
   const [error, serError] = useState(null)
   const [loading, setLoading] = useState(null)
   const [cancelled, setCancelled] = useState(false)

}