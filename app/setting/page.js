"use client";
import { useState } from 'react';

function SettingsPage() {
    const [formData, setFormData] = useState({
        username: 'JohnDoe123',
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
        language: 'English',
        timezone: 'GMT',
        privacySetting: 'Public',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Settings:', formData);
        // TODO: Save data to server or local storage
    };

    return (
        <div className="bg-purple-200 min-h-screen p-4">
            <h1 className="text-4xl font-bold text-center text-white mb-6">User Settings</h1>

            <div className="bg-white p-6 rounded-md shadow-md max-w-3xl mx-auto">
                <form onSubmit={handleSubmit}>

                    {/* Username */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            className="w-full p-2 border rounded"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border rounded"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Phone Number</label>
                        <input 
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="w-full p-2 border rounded"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Language */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="language">Preferred Language</label>
                        <select 
                            id="language"
                            name="language"
                            className="w-full p-2 border rounded"
                            value={formData.language}
                            onChange={handleInputChange}
                        >
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                            <option>Mandarin</option>
                        </select>
                    </div>

                    {/* Timezone */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="timezone">Timezone</label>
                        <select 
                            id="timezone"
                            name="timezone"
                            className="w-full p-2 border rounded"
                            value={formData.timezone}
                            onChange={handleInputChange}
                        >
                            <option>GMT</option>
                            <option>PST</option>
                            <option>EST</option>
                            <option>CST</option>
                            <option>IST</option>
                        </select>
                    </div>

                    {/* Privacy Setting */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="privacySetting">Profile Privacy</label>
                        <select 
                            id="privacySetting"
                            name="privacySetting"
                            className="w-full p-2 border rounded"
                            value={formData.privacySetting}
                            onChange={handleInputChange}
                        >
                            <option>Public</option>
                            <option>Friends Only</option>
                            <option>Private</option>
                        </select>
                    </div>

                    <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                        Save Changes
                    </button>

                </form>
            </div>
        </div>
    );
}

export default SettingsPage;
