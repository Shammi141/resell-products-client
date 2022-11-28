import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    //getting users info
    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully!')
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                .then(() =>{
                    navigate('/');
                })
                .catch(err => console.error(err));

                form.reset();
            })
            .catch(err => console.error(err));

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-xl text-center mt-5 font-bold text-blue-600'>SignUp Here</h2>

                    <form onSubmit={handelSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center mb-6'>Already have an account? <Link className='text-blue-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;