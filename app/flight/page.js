"use client"

import { useState } from 'react';

function FlightLookup() {
    const [searchTerm, setSearchTerm] = useState('');

    const flights = [
        {
            id: 1,
            airline: 'AirTrans',
            departure: 'New York',
            arrival: 'Paris',
            departureTime: '10:00 AM',
            arrivalTime: '8:00 PM',
            price: '$300'
        },
        {
            id: 2,
            airline: 'SkyLine',
            departure: 'Los Angeles',
            arrival: 'London',
            departureTime: '1:00 PM',
            arrivalTime: '10:00 AM',
            price: '$500'
        },
        // ... Add more flight data as needed
    ];

    const filteredFlights = flights.filter(flight => 
        flight.airline.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-purple-200 min-h-screen p-4">
            <h1 className="text-4xl font-bold text-center text-gray-700 mb-6">Flight Lookup</h1>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded-md shadow-md mb-6 flex justify-between items-center max-w-2xl mx-auto">
                <input 
                    type="text" 
                    placeholder="Search by airline..." 
                    className="border p-2 flex-1 rounded mr-4" 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button className="bg-blue-500 text-white p-2 rounded">Search</button>
            </div>

            {/* Flight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFlights.map(flight => (
                    <div key={flight.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <h2 className="text-xl font-bold mb-2">{flight.airline}</h2>
                        <div className="mb-2">
                            <span className="text-gray-500">{flight.departure}</span> 
                            <span className="mx-2 text-blue-500">→</span> 
                            <span className="text-gray-500">{flight.arrival}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-600">Departure: {flight.departureTime}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-600">Arrival: {flight.arrivalTime}</span>
                        </div>
                        <div className="font-bold text-blue-600 mb-2">{flight.price}</div>
                        <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-100">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FlightLookup;

