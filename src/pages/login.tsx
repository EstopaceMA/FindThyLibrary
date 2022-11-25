import { signInWithGoogle } from "../firebase/auth";

const Login = () => {

    const handleSignInWithGoogle = () => signInWithGoogle();

    return (
        <div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex={-1} role="dialog" id="modalSignin">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h2 className="fw-bold mb-0">Hi there!</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body p-5 pt-0">
                    <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" onClick={handleSignInWithGoogle}>
                        Continue with Google
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Login;