import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function AuthLayout({ children , authentication=true}) {
    const navigate = useNavigate();
    const [loader , setLoader] = useState(true);
    const authStatus = useSelector((state)=>{
        return state.status
    })
    useEffect(()=>{
       // todo make it more easy
        if(authentication && authStatus!== authentication){
            navigate('/login')
            console.log(authentication);
            
        }
        else if (!authentication && authStatus !== authentication){
            navigate('/')
           
            

        }
        
        setLoader(false)
    },[authStatus,authentication,navigate ])

  return (
    loader ? <h1>Loading... </h1> : children
    
  )
}

export default AuthLayout