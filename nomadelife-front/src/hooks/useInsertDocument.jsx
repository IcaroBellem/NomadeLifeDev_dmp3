import { useState, useEffect, useReducer } from 'react'
import { db } from '../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const initialState = {
    loading: null,
    error: null
}

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "INSERT_DOC":
            return { loadin: false, error: null }
        case "ERROR":
            return { loading: false, error: null }
        default:
            return state
    }
}

export const useInsertDocument = (docColletion) => {
    const [response, dispath] = useReducer(insertReducer, initialState)
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispath = (action) => {
        if (!cancelled) {
            dispath(action)
        }
    }

    const insertDocument = async (document) => {
        checkReducerBeforeDispatch({ type: "LOADING" })

        try {
            const newDocument = { ...document, createAt: Timestamp.now() }
            const insertDocument = await addDoc(
                collection(db, dbColletion),
                newDocument
            )

            checkCancelBeforeDispath({
                type: "INSERT_DOC",
                payload: insertDocument
            })
        }catch(error){
            checkCancelBeforeDispath({
                type:"ERROR",
                payload:error.message
            })
        }    
    }
    useEffect(() => {
        return () => setCancelled(true)
    },[])

    return{
        insertDocument,
        response
    }
}