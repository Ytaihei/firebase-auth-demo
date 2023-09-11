import { signOut } from "firebase/auth";
import { auth } from '../api/firebase.js';

const Logout = () => {
    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <button onClick={handleLogout}>ログアウト</button>
    );
};

export default Logout;