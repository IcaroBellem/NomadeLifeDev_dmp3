import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore'

export const useFetchDocuments = (docColletion, uid, search = null) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        async function loadData() {
            if (cancelled) {
                return
            }

            setLoading(true)
            const collectionRef = collection(db, docColletion)

            try {
                let q

                if (search) {
                    q = query(
                        collectionRef,
                        where("tags", "array-contains", search),
                        orderBy("createAt", "desc")
                    )
                } else {
                    q = query(collectionRef, orderBy("createAt", "desc"))
                }

                const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                    setDocuments(
                        QuerySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                    setLoading(false)
                })

                return () => unsubscribe()
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }

        loadData()

        return () => setCancelled(true)
    }, [docColletion, uid, search, cancelled])

    return {
        documents,
        loading,
        error
    }
}
