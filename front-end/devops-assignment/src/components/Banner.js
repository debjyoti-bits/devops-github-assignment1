import React from 'react';

const Banner = () => {
    return (
        // Full-height div for proper centering and background coverage
        <div className="h-screen w-full flex justify-center items-center bg-gray-800 text-white">
            <div
                className="banner-bg"
            >
                <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
                    <h1 className="heading-one text-4xl font-bold">Welcome to DevOps Assignment</h1>
                    <p className="heading-two text-lg mt-4">Building and Deploying with DevOps Best Practices</p>
                    <p className="heading-three">Developed By - Debjyoti Paul</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
