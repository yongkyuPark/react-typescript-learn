import {useEffect} from "react";
import { GoogleAuthProvider, 
         GithubAuthProvider,
         signInWithPopup,
         fetchSignInMethodsForEmail,
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
        signInWithPopup(auth, provider).catch(function(error){
            alert(error.code);
        });
    }

    function handleGitHubLogin() {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
        .then(function(){
            alert("성공")
        })
        .catch(function(e){
            fetchSignInMethodsForEmail(auth,e.customData.email)
            .then((result)=>{
                if(result[0] === "google.com"){
                    const testVal = new GoogleAuthProvider()
                    testVal.setCustomParameters({login_hint: e.customData.email});
                    signInWithPopup(auth,testVal)
                    .then(function(result){
                        console.log(result);
                        // signInWithCredential(auth,result.credential).then()
                    })
                    .catch(function(e){
                        console.log(e.code);
                        if(e.code === "auth/popup-blocked"){
                            alert("팝업이 차단되었습니다. 차단을 풀어주세요.")
                        }
                    })
                }
            })
            .catch(function(e){
                console.log(e)
            })
            // if(error.email && error.credential && error.code === "auth/account-exists-with-different-credential"){
            //     alert(error.code) 
            // }
            
        });
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


