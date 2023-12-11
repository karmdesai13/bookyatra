"use client";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebaseConfig';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password || !confirmPassword) {
            setError('Please fill in all required fields');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        try {
            
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Registered successfully', userCredential.user);

            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
        } catch (error) {
            console.error('Error registering:', error);
            setError(error.message);
        }
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
                        {error && <p className="text-red-400">{error}</p>}
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-600 hover:bg-blue-700 text-white">Sign Up</button>
                        </div>
                        <div className="form-control mt-4 text-center">
                            <p className="text-gray-300">After completing sign up....Log In</p>
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
