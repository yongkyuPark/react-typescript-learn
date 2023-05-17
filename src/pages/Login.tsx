import {useState, useEffect} from "react";
import { GoogleAuthProvider, 
         signInWithRedirect,
         GithubAuthProvider,
        } from 'firebase/auth';
import { auth } from "../Firebase";
import {useAuth} from "../context/authContext";
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {

    const { search } = useLocation()
    const queryParams = new URLSearchParams(search)
    const returnUrl = queryParams.get('returnUrl') || '/'
    const navigate = useNavigate()
    const {user} = useAuth()
    console.log(returnUrl)
    
    useEffect(() => {
        if(user) {
            navigate(returnUrl)
        } 
    }, [user, navigate, returnUrl])

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithRedirect(auth, provider);
    }

    function handleGitHubLogin() {
        const provider = new GithubAuthProvider();
        signInWithRedirect(auth, provider);
    }

    return (
        <div>
            <h1>Login 화면 입니다.</h1>
            <button onClick={handleGoogleLogin}>Googoe Login</button>
            <button onClick={handleGitHubLogin}>GitHub Login</button>
        </div> 
    ) 
}

export default Login;


