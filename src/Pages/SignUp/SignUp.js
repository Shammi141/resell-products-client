import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    //getting users info
    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userType = form.radio.value;

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
                    saveUser( name, email, userType);
                })
                .catch(err => console.error(err));

                form.reset();
            })
            .catch(err => console.error(err));
    }

    //for saving new users info in database
    const saveUser = (name, email, userType) =>{
        const user = {name, email, userType};
        fetch(`http://localhost:5000/users`, {
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
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-xl text-center mt-5 font-bold text-sky-600'>SignUp Here</h2>

                    <form onSubmit={handelSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered input-info" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered input-info" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered input-info" required />
                        </div>
                       
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Buyer</span>
                                <input type="radio" name="radio" value="buyer" className="radio radio-info" checked />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Seller</span>
                                <input type="radio" name="radio" value="seller" className="radio radio-info" checked />
                            </label>
                        </div>

                        <div className="form-control ">
                            <input className="btn btn-info text-white" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center mb-6'>Already have an account? <Link className='text-sky-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;