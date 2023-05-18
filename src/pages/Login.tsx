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
            console.log("성공")
        })
        .catch(function(e){
            // firebase는 기본적으로 구글계정을 기준으로 작동하기 때문에
            // 깃허브 계정으로 로그인 시 깃허브 계정이 구글계정과 동일할 경우 처리를 해줘야함
            fetchSignInMethodsForEmail(auth,e.customData.email)
            .then((result)=>{
                if(result[0] === "google.com"){
                    if (window.confirm("깃허브 계정과 구글 계정이 같아 구글 계정으로 로그인됩니다. 로그인 하시겠습니까?")) {
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


