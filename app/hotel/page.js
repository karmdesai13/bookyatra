"use client";
import { useState } from 'react';

export default function HotelLookup() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="bg-gradient-to-br from-blue-400 to-pink-400 h-screen flex flex-col items-center py-8">
            {/* App Title */}
            <h1 className="text-5xl font-bold text-white mb-10">PlanYatra</h1>

            {/* Search Bar */}
            <div className="bg-white p-6 w-full max-w-2xl rounded-lg shadow-lg mb-8 flex justify-between items-center">
                <input 
                    type="text" 
                    placeholder="Search for a hotel..." 
                    className="border-2 border-gray-300 p-2 flex-1 rounded-lg mr-6 focus:border-blue-500 focus:outline-none transition-border duration-300" 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button className="bg-blue-500 text-white p-2 px-5 rounded-lg transform transition-transform duration-300 hover:scale-105">Search</button>
            </div>

            {/* Hotel List */}
            <div className="w-full max-w-2xl space-y-6">
                {/* Sample Hotel Cards */}
                {['Hotel Grandeur', 'Sunny Resort', 'Mountain Retreat'].map((hotelName, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-xl hover:scale-105">
                        <h3 className="font-bold mb-4 text-xl">{hotelName}</h3>
                        <p className="text-gray-600 mb-4">Located in {["Paris, France", "Maldives", "Himalayas"][index]}.</p>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Starting at {["$120/night", "$300/night", "$80/night"][index]}</span>
                            <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


