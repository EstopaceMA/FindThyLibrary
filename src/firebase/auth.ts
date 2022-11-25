import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import User from '../models/user';
import app from './clientApp';
import { getDocument, setDocument } from './database';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWith = async (provider: GoogleAuthProvider) => {
    await signInWithPopup(auth, provider)
        .then((result) => {
            const userResult = result.user;
            const user = new User(userResult.uid, userResult.displayName, userResult.email, userResult.photoURL);

            setDocument("users", user.toJson(), userResult.uid);

            return true;
        })
        .catch((err) => err)
}

const signInWithGoogle = async () => signInWith(googleProvider)

const signOutAccount = async () => {
    await signOut(auth)
        .then(() => true)
        .catch((err) => err)
}

export { signOutAccount, signInWithGoogle, auth };