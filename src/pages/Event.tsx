import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"


const Event = () => {
    const { user,providerData } = useAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        if (!user) {
            navigate('/login?returnUrl=/event')
        } else {
            setLoading(false)
        }
    }, [user, loading, navigate])

    console.log(providerData)

    return (
        <div>
            <h1>{user && providerData && providerData.providerId}</h1>
            <h2>{user && providerData && providerData.email}</h2>
        </div> 
    )
}

export default Event;