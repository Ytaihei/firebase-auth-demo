import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth);
    };

    return (
        <button onClick={handleLogout}>ログアウト</button>
    );
};

export default Logout;