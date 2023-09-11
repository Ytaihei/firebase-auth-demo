import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import Login from './Login';
import Logout from './Logout';
import { auth } from '../api/firebase.js';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? <Logout /> : <Login />}
      {user && <p>{user.displayName}</p>}
      {user && <img src={user.photoURL} alt=""/>}
    </>
  );
}

export default App;

