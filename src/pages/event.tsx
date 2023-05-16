import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"


const Event = () => {
    const { user,providerData } = useAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    console.log(user)
    console.log(providerData);


    useEffect(() => {
        if (!user) {
            navigate('/login?returnUrl=/event')
        } else {
            setLoading(false)
        }
    }, [user, navigate, loading])

    return (
        <div>
            <h1>{user && providerData && providerData.email}</h1>
        </div> 
    )
}

export default Event;