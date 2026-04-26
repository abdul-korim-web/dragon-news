import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export const registerAction =async (e)=>{

    e.preventDefault()
    const formData = new FormData(e.target);
  const userData = Object.fromEntries(formData.entries());
 const { data, error } = await authClient.signUp.email(userData);
 if (data) {
   
        toast.success("register success")
 }
 if (error) {
     toast.error(error?.message)
     
    
 }
  

}