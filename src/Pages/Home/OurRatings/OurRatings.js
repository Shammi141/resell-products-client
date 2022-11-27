import React from 'react';

const OurRatings = () => {
    return (
        <div className='my-20 '>
            <h2 className='font-bold text-4xl my-10 text-center text-blue-600'>Give Us Your Precious Ratings</h2>
            <div className="stats shadow flex items-center gap-5">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">15.6K</div>
                    <div className="stat-desc text-blue-700">31% latest</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title ">Total Views</div>
                    <div className="stat-value text-secondary">1.1M</div>
                    <div className="stat-desc text-blue-700">21% latest viewers</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLvEbdTKi1aFGjX-KzX6lb9EzTRcURDZ7_w&usqp=CAU" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="stat-title">Satisfied</div>
                    <div className="stat-value">87%</div>
                    <div className="stat-desc text-blue-700">13 New are coming</div>
                </div>

            </div>
        </div>
    );
};

export default OurRatings;