import { useAuth } from "../context/authContext";
import {Navigate, useLocation} from "react-router-dom";
function AuthPage({children}: {children: JSX.Element}) {
    const {pathname} = useLocation();
    const auth = useAuth();
    if(auth?.user === null) return (<Navigate to={`/login?returnUrl=${pathname}`} state={{'from':pathname}} replace/>)
    return children;
}

export default AuthPage;