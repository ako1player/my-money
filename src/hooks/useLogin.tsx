import { useAuthContext } from "./useAuthContext"
import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";

export const useLogin = () =>{
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState<any | null>();
    const [isPending, setIsPending] = useState(false);
    const {dispatch}:any = useAuthContext();

    const login = async (email:string, password:string) =>{
        setError(null);
        setIsPending(true);

        //sign the user out
        try{
            const res = await projectAuth.signInWithEmailAndPassword(email, password);

            //dispatch login action
            dispatch({type: 'LOGIN', payload: res.user})

            //update state
            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }
        } catch(err:any){
            if(!isCancelled){
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() =>{
        return ()=> setIsCancelled(true);
    },[])

    return { login, error, isPending}

}