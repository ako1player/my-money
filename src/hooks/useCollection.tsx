import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection:any) => {
  const [documents, setDocuments] = useState<any>();
  const [error, setError] = useState<null | any>(null)

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    const unsubscribe = ref.onSnapshot(snapshot => {
      let results:any = []
      snapshot.docs.forEach(doc => {
        console.log(doc)
        results.push({...doc.data(), id: doc.id})
      });
      
      // update state
      setDocuments(results)
      console.log(documents)
      setError(null)
    }, error => {
      console.log(error)
      setError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection])

  return { documents, error }
}