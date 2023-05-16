import {Outlet} from "react-router-dom"
import { AuthProvider } from "./context/authContext";
import Nav from "./components/Nav";

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <Nav/>
                <Outlet />
            </div>
        </AuthProvider>
    );
}

export default App;
