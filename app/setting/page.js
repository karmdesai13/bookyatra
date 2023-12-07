"use client";
import { useState } from 'react';
import Header from '../header/page';
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
        
    };

    return (
        <div className=" bg-gray-900 pt-14 pb-12">
            <Header />
        
            <div className="flex items-center justify-center" 
                style={{
                    backgroundImage: 'url("/images/settingsbd1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '250px', // This sets the height of the div
                }}>
                <div className="flex justify-center bg-cyan-600 border border-cyan-600 p-3 w-[10000px] shadow-md shadow-black">
                    <h1 className="text-3xl text-center font-semibold text-white">User Settings</h1>
                </div>
            </div>
            
            <div className="flex justify-center items-center mx-10 rounded-lg h-[500px] mt-14"
                    style={{
                        backgroundImage: 'url("/images/settingbg1.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                <div className="raise bg-cyan-600 p-6 rounded-md shadow-md shadow-black w-[300px] h-[330px] mr-14 hover:shadow-lg hover:shadow-black">
                    <form onSubmit={handleSubmit}>

                        {/* Username */}
                        <div className="mb-4">
                            <label className="block text-xl mb-2 " htmlFor="username">Username: </label>
                            <input 
                                type="text"
                                id="username"
                                name="username"
                                className="w-full p-2 border rounded-full shadow-md shadow-black text-black"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-xl mb-2" htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border rounded-full shadow-md shadow-black text-black"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4">
                            <label className="block text-xl mb-2" htmlFor="phoneNumber">Phone Number</label>
                            <input 
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="w-full p-2 border rounded-full shadow-md shadow-black text-black"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>
                </div>

                <div className="raise bg-cyan-600 p-6 rounded-md shadow-md shadow-black w-[300px] h-[330px] ml-14 hover:shadow-lg hover:shadow-black">
                    <form onSubmit={handleSubmit}>
                        {/* Language */}
                        <div className="mb-4">
                            <label className="block text-xl mb-2" htmlFor="language">Preferred Language</label>
                            <select 
                                id="language"
                                name="language"
                                className="w-full p-2 border rounded-full shadow-md shadow-black text-black"
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
                            <label className="block text-xl mb-2" htmlFor="timezone">Timezone</label>
                            <select 
                                id="timezone"
                                name="timezone"
                                className="w-full p-2 border rounded-full shadow-md shadow-black text-black"
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

                        
                        <div className="mb-4">
                            <label className="block text-xl mb-2" htmlFor="privacySetting">Profile Privacy</label>
                            <select 
                                id="privacySetting"
                                name="privacySetting"
                                className="w-full p-2 border rounded-full shadow-md shadow-black text-black"
                                value={formData.privacySetting}
                                onChange={handleInputChange}
                            >
                                <option>Public</option>
                                <option>Friends Only</option>
                                <option>Private</option>
                            </select>
                        </div>
                    </form>
                </div> 
            </div>
            <div className=' flex justify-center mt-10'>
                <button type="submit" className=" raise bg-cyan-600 text-white text-xl px-6 py-4 rounded shadow-black shadow-md hover:bg-cyan-400 ">
                            Save Changes
                </button>
            </div>
            

        </div>
    );
}

export default SettingsPage;

