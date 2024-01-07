import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="flex justify-center items-center flex-col mt-2 space-y-3">
      <h1>Please sign in to chat</h1>
      <button
        onClick={signInWithGoogle}
        className="flex items-center gap-2 bg-white dark:bg-neutral-800 border-neutral-600 px-3 py-2 rounded-lg border shadow-sm"
      >
        <FcGoogle size={24} />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
