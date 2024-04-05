import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup =()=>{

    const [loading,setLoading] =useState(false);
    // eslint-disable-next-line no-unused-vars
    const {authUser,setAuthUser}=useAuthContext()
    
    const signup = async ({fullName,userName,password,confirmPassword,gender})=>{
        const success = handleInputErrors({fullName,userName,password,confirmPassword,gender})
        
        if(!success) return;

        try {
            const res = await fetch("/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
            })
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            
            console.log(data)

            //here we save user to localstorage 
            //context, we we refresh it we get value from local storeare and see that user is logged in or not
            localStorage.setItem("Chat-User",JSON.stringify(data))
            setAuthUser(data)
            
        } catch (error) {
            toast.error(error.message)
            
        }
        finally{
            setLoading(false)
        }
    }
    return {loading,signup};

    
}
export default useSignup;

function handleInputErrors({fullName,userName,password,confirmPassword,gender}){
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error('Please fill all fields')
        return false;
    }

    if(password!=confirmPassword){
        toast.error('Password is not match')
        return false
    }
    if(password.length<6){
        toast.error('Password must be at least 6 Characters ')
        return false;
    }
    return true
}