import { TwitterAuthProvider } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { auth } from '../api/firebase.js';

const Login = () => {
    const signInX = () => {
        const provider = new TwitterAuthProvider();
        signInWithRedirect(auth, provider);
    };

    return (
        <button onClick={signInX}>Xでログイン</button>
    );
};

export default Login;