import { Auth } from '../components/Auth';
import './Login.css';

const Login = () => {



    return (
        <div id="login" className="container">
            <div className="login-wrap">
                <h1>Login</h1>
                <Auth />
            </div>
        </div>
    )
}

export default Login;