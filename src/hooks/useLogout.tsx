import { useAuthContext } from "./useAuthContext"
import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";

export const useLogout = () =>{
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState<any | null>();
    const [isPending, setIsPending] = useState(false);
    const {dispatch}:any = useAuthContext();

    const logout = async () =>{
        setError(null);
        setIsPending(true);

        //sign the user out
        try{
            await projectAuth.signOut();

            //dispatch logout action
            dispatch({type: 'LOGOUT'})

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

    return { logout, error, isPending}

}