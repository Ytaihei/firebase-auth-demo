import { TwitterAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";

const Login = () => {
    const signInX = () => {
        const provider = new TwitterAuthProvider();
        const auth = getAuth();
        signInWithRedirect(auth, provider);
    };

    return (
        <button onClick={signInX}>Xでログイン</button>
    );
};

export default Login;