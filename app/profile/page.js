
function ProfilePage() {
   const userProfile = {
        avatar: 'https://via.placeholder.com/150?text=Cartoon+Avatar', 
        username: 'JohnDoe123',
        email: 'john.doe@example.com',
        plannedHotels: [
            'Grand Hilton Hotel, New York',
            'Marriott, San Francisco',
            'Le Meridian, Paris'
        ],
        plannedFlights: [
            'New York to San Francisco - Flight #12345',
            'San Francisco to Paris - Flight #67890'
        ]
    };

    return (
        <div className="bg-purple-100 min-h-screen p-4">
            <div className="bg-white p-6 rounded-md shadow-md max-w-2xl mx-auto">
                <div className="text-center mb-6">
                    <img src={userProfile.avatar} alt="User Cartoon Avatar" className="w-32 h-32 mx-auto rounded-full mb-4"/>
                    <h1 className="text-2xl font-bold mb-2">{userProfile.username}</h1>
                    <p className="text-gray-600">{userProfile.email}</p>
                </div>
                
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Planned Hotels</h2>
                    <ul className="list-disc pl-5">
                        {userProfile.plannedHotels.map((hotel, index) => (
                            <li key={index} className="text-gray-700 mb-2">{hotel}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Planned Flights</h2>
                    <ul className="list-disc pl-5">
                        {userProfile.plannedFlights.map((flight, index) => (
                            <li key={index} className="text-gray-700 mb-2">{flight}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
       
}

export default ProfilePage;
