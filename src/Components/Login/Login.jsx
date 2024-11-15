import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const navigate = useNavigate();
    const {loginUser, SignInWithGoogle} = useContext(AuthContext);
    const handleSignInWithGoogle = () => {
        SignInWithGoogle()
        .then((result) => {
            console.log(result.user);
            navigate("/")
        })
        .catch((error) => {
            console.log("ERROR", error);
        })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        event.target.reset();
        loginUser(email, password)
        .then((result) => {
            console.log(result.user);
            navigate("/")
        })
        .catch((error) => {
            console.log("ERROR", error);
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button onClick={handleSignInWithGoogle} className="btn">SignIn with Google</button>
                    <p className="pb-2 pl-6">New to this website! <Link className="text-blue-500" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;