import React from 'react';
import { Link } from 'react-router-dom';

const OurRatings = () => {
    return (
        <div className='my-24 '>
            <h2 className='font-bold text-5xl mb-10 text-center text-cyan-800'>Raise Your Hand To Save The World</h2>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left px-12 ">
                        <h1 className="text-4xl font-bold text-cyan-700">Help Helpless To Find Happiness </h1>
                        <p className="py-8 ">We have a vision to help helpless people by sending their necessary things (cloths, foods, medicines, money so on). You can contribute as you can to help those people and be a member of us. <br />
                        <p className='font-bold my-3'>Your simple steps can save ones life also a family.</p></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered input-info" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered input-info" />
                            </div>
                            <select className="select select-info w-full max-w-xs">
                                <option disabled selected>Select payment system</option>
                                <option>Bkash</option>
                                <option>Roket</option>
                                <option>Vise Card</option>
                                <option>By Bank</option>
                            </select>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered input-info" />
                                <label className="label">
                                    <span>Email Us: <Link href="#" className="label-text-alt link link-hover">reseller@buyer.com</Link></span>
                                    
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurRatings;