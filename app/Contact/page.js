"use client";
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Submitted contact form:', { name, email, subject, message });
        // Reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="hero min-h-screen" style={{ backgroundColor: '#0d3b66' }}>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">Contact Us</h1>
                    <p className="py-6 text-gray-200">Have questions or need assistance? Send us a message.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-4xl bg-gray-100 shadow-2xl p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Your name" 
                                className="input input-bordered"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                className="input input-bordered"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                className="input input-bordered"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea 
                                className="textarea textarea-bordered" 
                                placeholder="Your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
