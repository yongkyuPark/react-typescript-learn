import React from "react";
import {useAuth} from "../context/authContext";
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            // 로그아웃 성공 시 실행할 코드
            // 예: 로그아웃 성공 메시지 표시 등
            navigate('/');

        })
        .catch((error) => {
            // 로그아웃 실패 시 실행할 코드
            // 예: 에러 메시지 표시 등
            alert("로그아웃 에러")
        });

    return <h1>Logout 화면 입니다.</h1>
    
}

export default Logout;