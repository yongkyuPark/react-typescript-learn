import React, { useState, useEffect } from "react"
import { useAuth } from "../context/authContext";
import { auth } from "../Firebase"
import { useLocation, useNavigate ,Link} from "react-router-dom";

export default function Nav() {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) return
        setLoading(false)
    }, [user, loading])

    const { pathname } = useLocation();
    const navigate = useNavigate()

    const handleLogout = async () => await auth.signOut()
        .then(() => navigate('/'))

    if (!user && pathname === '/login') return <></>

    return (
        <>
            <nav>
                <Link to="/">Home</Link> | {"  "}
                <Link to="/event">Event</Link> | {"  "}
                {!user && <Link to="/login">Login</Link>}
                {user && <Link to="" onClick={handleLogout}>Logout</Link>}
            </nav>
        </>
    )
}