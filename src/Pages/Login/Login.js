import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { login, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('');


    const from = location.state?.from?.pathname || '/';

    if(token) {
        navigate(from, { replace: true });

    }

    // for google login 
    const handelGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const name = user.displayName;
                const email = user.email;
                const userType = 'buyer';
                saveUser(name, email, userType);
            })
            .catch(err => {
                console.error(err);
            });
    }

    const saveUser = (name, email, userType) => {
        const user = { name, email, userType };
        fetch(`https://resell-products-server.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
        navigate('/');

    }

    //getting users info
    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
        .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(email);
                form.reset();
            })
        .catch(err => console.error(err));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-xl text-center mt-5 font-bold text-sky-600'>Login Here</h2>

                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control ">
                            <input className="btn btn-info text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-6'>New to this site? <Link className='text-sky-600 font-bold' to='/signup'>Sign Up</Link></p>

                    <div className="divider">OR</div>

                    <button onClick={handelGoogleSignIn} class="btn btn-outline btn-info mx-8 mb-4">Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;