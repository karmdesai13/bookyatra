"use client";
import { useState } from 'react';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !username || !password || !confirmPassword) {
            setError('Please fill in all required fields');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        console.log('Registering:', { email, username, password, phoneNumber, subscribe });
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setPhoneNumber('');
        setSubscribe(false);
        setError('');
    };

    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className='text-7xl text-white mr-10'>Book<span className='text-blue-700'>Yatra</span></h1>
                    <h1 className="text-5xl m-2 font-bold text-white">Sign <span className='text-blue-700'>up</span> now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-gray-700 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="email" 
                                className="input input-bordered input-gray-200"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Username</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="username" 
                                className="input input-bordered input-gray-200"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="password" 
                                className="input input-bordered input-gray-200"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Confirm Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="confirm password" 
                                className="input input-bordered input-gray-200"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Phone Number</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="phone number"
                                className="input input-bordered input-gray-200"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text text-gray-300">Subscribe to newsletter</span>
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    checked={subscribe}
                                    onChange={(e) => setSubscribe(e.target.checked)}
                                />
                            </label>
                        </div>
                        {error && <p className="text-red-400">{error}</p>}
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-600 hover:bg-blue-700 text-white">Sign Up</button>
                        </div>
                        <div className="form-control mt-4 text-center">
                            <p className="text-gray-300">Already have an account? <a href="./LogIn" className="text-blue-500 hover:text-blue-300">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

