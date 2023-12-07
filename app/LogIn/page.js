"use client";
import { useState } from 'react';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }
        
        console.log('Logging in with', email, password);
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className='text-7xl text-white'>Book<span className='text-blue-700'>Yatra</span></h1>
                    <h1 className="text-5xl m-2 font-bold text-white">Login now!</h1>
                    
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
                            <label className="label">
                                <a href="#" className="label-text-alt text-gray-400 hover:text-gray-100">Forgot password?</a>
                            </label>
                        </div>
                        {error && <p className="text-red-400">{error}</p>}
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-600 hover:bg-blue-700 text-white">Login</button>
                        </div>
                        <div className="form-control mt-4 text-center">
                            <p className="text-gray-300">Don't have an account? <a href="./SignUp" className="text-blue-500 hover:text-blue-300">Sign up</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


