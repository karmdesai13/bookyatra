"use client"

function FlightLookup() {
   const [searchTerm, setSearchTerm] = useState('');

    const flights = [
        {
            id: 1,
            airline: 'Oceanic Airlines',
            departure: 'New York',
            arrival: 'London',
            departureTime: 'April 15, 2024, at 10:00 AM',
            arrivalTime: 'April 15, 2024, at 10:00 PM',
            duration: '12 hours',
            departureAirport: 'John F. Kennedy International Airport, Terminal 4',
            arrivalAirport: 'Heathrow Airport, Terminal 5',
            gateInformation: 'Departure from Gate 22B, Arrival at Gate 18A',
            mealsAndBeverages: 'Choice of vegetarian or chicken meal, complimentary beverages including wine and beer',
            entertainment: 'Personal entertainment system with latest movies, TV shows, and music',
            wifiAvailability: 'High-speed Wi-Fi available for $10 per hour',
            carryOnAllowance: 'One bag up to 22 x 14 x 9 inches and 10 kg',
            checkedBaggageAllowance: 'Up to 2 bags, each not exceeding 23 kg and 158 cm in total dimensions',
            price: '$450',
            flightNumber: 'OA 456',
            aircraftType: 'Boeing 787 Dreamliner'
          },          
          {
            id: 2,
            airline: 'Atlantic Jet',
            departure: 'Los Angeles',
            arrival: 'Tokyo',
            departureTime: 'June 21, 2024, at 6:30 PM',
            arrivalTime: 'June 22, 2024, at 8:00 AM',
            duration: '13 hours 30 minutes',
            departureAirport: 'Los Angeles International Airport, Terminal 6',
            arrivalAirport: 'Narita International Airport, Terminal 2',
            gateInformation: 'Departure from Gate 33C, Arrival at Gate 47D',
            mealsAndBeverages: 'Gourmet three-course meal with vegan options, selection of fine wines',
            entertainment: 'Wide screen at every seat with access to international movies and games',
            wifiAvailability: 'Complimentary Wi-Fi throughout the flight',
            carryOnAllowance: 'One carry-on bag plus one personal item, up to 8 kg each',
            checkedBaggageAllowance: 'One bag free, up to 20 kg',
            price: '$750',
            flightNumber: 'AJ 789',
            aircraftType: 'Airbus A320'
          }
          ,
          {
            id: 3,
            airline: 'Global Airways',
            departure: 'Dubai ',
            arrival: 'Cairot',
            departureTime: 'September 10, 2024, at 11:00 AM',
            arrivalTime: 'September 10, 2024, at 3:00 PM',
            duration: '4 hours',
            departureAirport: 'Dubai International Airport, Terminal 3',
            arrivalAirport: 'Cairo International Airport, Terminal 1',
            gateInformation: 'Departure from Gate A10, Arrival at Gate B4',
            mealsAndBeverages: 'Array of Middle Eastern and international cuisine, complimentary soft drinks',
            entertainment: 'Over 200 channels of movies, TV shows, and music in multiple languages',
            wifiAvailability: 'Internet package available for purchase',
            carryOnAllowance: 'One piece of carry-on, maximum 7 kg',
            checkedBaggageAllowance: 'Two pieces, each not exceeding 30 kg',
            price: '$320',
            flightNumber: 'GA 303',
            aircraftType: 'Airbus A380'
          }
          ,
          {
            id: 4,
            airline: 'Sky Connect',
            departure: 'Singapore',
            arrival: 'Kuala Lumpur',
            departureTime: 'December 15, 2024, at 5:45 AM',
            arrivalTime: 'December 15, 2024, at 10:15 AM',
            duration: '4 hours 30 minutes',
            departureAirport: 'Singapore Changi Airport, Terminal 2',
            arrivalAirport: 'Kuala Lumpur International Airport, Terminal M',
            gateInformation: 'Departure from Gate E2, Arrival at Gate H5',
            mealsAndBeverages: 'Continental breakfast with coffee and tea service',
            entertainment: 'Selection of Asian and Western movies and music',
            wifiAvailability: 'Internet available for a small fee',
            carryOnAllowance: 'Standard carry-on bag up to 9 kg',
            checkedBaggage: 'Up to 2 pieces of checked baggage, each not exceeding 23 kg',
            price: '$550',
            flightNumber: 'NS 198',
            aircraftType: 'Boeing 777'
          },
          {
            id: 5,
            airline: 'Northern Star Airlines',
            departure: 'Toronto',
            arrival: 'Frankfurt',
            departureTime: 'November 5, 2024, at 9:00 PM',
            arrivalTime: 'November 6, 2024, at 7:00 AM',
            duration: '10 hours',
            departureAirport: 'Toronto Pearson International Airport, Terminal 1',
            arrivalAirport: 'Frankfurt Airport, Terminal 2',
            gateInformation: 'Departure from Gate C3, Arrival at Gate Z9',
            mealsAndBeverages: 'Dinner and breakfast service with a choice of international cuisines, including a vegetarian option, and a selection of beverages',
            entertainment: 'On-demand movies, TV shows, and music channels, including childrens entertainment options',
            wifiAvailability: 'On-board Wi-Fi for streaming and browsing, charges applicable',
            carryOnAllowance: 'One carry-on bag up to 10 kg and one personal item',
            checkedBaggageAllowance: 'Up to 2 pieces of checked baggage, each not exceeding 23 kg',
            price: '$550',
            flightNumber: 'NS 198',
            aircraftType: 'Boeing 777'
          }
          ,
    ];

    const filteredFlights = flights.filter(flight => 
        flight.airline.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const backgroundImages = {
        '1': './images/flights/flight1.png',
        '2': './images/flights/flight2.png',
        '3': './images/flights/flight3.png',
        '4': './images/flights/flight4.png',
        '5': './images/flights/flight5.png',
    };

    const FlightDetailsModal = ({ flight, onClose }) => {
        if (!flight) return null;
    
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-xl flex items-center justify-center z-50">
                <div key={flight.id} className="rounded-lg h-auto w-[900px] shadow-lg shadow-black p-6 hover:shadow-xl hover:shadow-white transform hover:-translate-y-1 transition-all duration-300"
                style={{
                    backgroundImage: url("${backgroundImages[flight.id]}"),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <h2 className="text-3xl text-white text-center font-semibold mb-2">{flight.airline}</h2>
                    <div className="mb-2">
                        <span className="text-gray-200">{flight.departure}</span> 
                        <span className="mx-2 text-gray-200">→</span> 
                        <span className="text-gray-200">{flight.arrival}</span>
                    </div>
                    <div className="mb-2">
                        <span className="text-gray-200">Departure: {flight.departureTime}</span>
                    </div>
                    <div className=' border rounded-lg bg-gray-900 bg-opacity-75 p-3'>
                        <div className="mb-2">
                            <span className="text-gray-200">Arrival: {flight.arrivalTime}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-200">Duration: {flight.duration}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-200">Flight Number: {flight.flightNumber}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-200">Aircraft Type: {flight.aircraftType}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-200">Meals and Beverages: {flight.mealsAndBeverages}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-200">Entertainment: {flight.entertainment}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-200">Wi-Fi Availability: {flight.wifiAvailability}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-200">Carry-on Allowance: {flight.carryOnAllowance}</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-gray-200">Checked Baggage Allowance: {flight.checkedBaggageAllowance}</span>
                        </div>
                    </div>
                    <div className="flex justify-between border bg-gray-900 bg-opacity-75 p-3 rounded-lg mt-3">
                        <div className="font-semibold text-3xl text-teal-300 mt-2 ml-3">{flight.price}</div>
                        <button onClick={onClose}
                        className="text-blue-600 border border-blue-600 px-4 py-2 mr-3 rounded hover:bg-blue-100">Close</button>
                    </div>
                </div>
            </div>

        );
    };
    

    const [selectedFlight, setSelectedFlight] = useState(null);

    const openModal = (flight) => {
        setSelectedFlight(flight);
    };

    const closeModal = () => {
        setSelectedFlight(null);
    };

    return (
        <div className="bg-gray-900 min-h-screen pt-4 pb-8">
           

            <div className='p-5'            
            style={{
                    backgroundImage: 'url("/images/runway.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '250px', 
                }}>
                     <Header />
                
                <div className='flex justify-between items-center mt-10'>
                
                    <h1 className="text-4xl font-semibold text-center text-white ml-[450px]">Flight Lookup</h1>

                    
                    <div className="mr-[300px]">
                        <input 
                            type="text" 
                            placeholder="Search by airline..." 
                            className="border p-2 text-black rounded-md mr-4 w-[450px]" 
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            
            <div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ml-14">
                <FlightDetailsModal flight={selectedFlight} onClose={closeModal} />
                    {filteredFlights.map(flight => (
                        <div key={flight.id} className="bg-white rounded-lg w-[460px] shadow-md shadow-white p-6 hover:shadow-xl hover:shadow-white transform hover:-translate-y-1 transition-all duration-300"
                        style={{
                            backgroundImage: url("${backgroundImages[flight.id]}"),
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '250px', 
                        }}>
                            <h2 className="text-xl text-white font-bold mb-2">{flight.airline}</h2>
                            <div className="mb-2">
                                <span className="text-gray-200">{flight.departure}</span> 
                                <span className="mx-2 text-gray-200">→</span> 
                                <span className="text-gray-200">{flight.arrival}</span>
                            </div>
                            <div className="mb-2">
                                <span className="text-gray-200">Departure: {flight.departureTime}</span>
                            </div>
                            <div className="mb-2">
                                <span className="text-gray-200">Arrival: {flight.arrivalTime}</span>
                            </div>
                            <div className="flex justify-between border bg-gray-900 bg-opacity-75 p-3 rounded-lg mt-3">
                                <div className="font-semibold text-3xl text-teal-300 mt-2 ml-3">{flight.price}</div>
                                <button onClick={() => openModal(flight)}
                                className="text-blue-600 border border-blue-600 px-4 py-2 mr-3 rounded hover:bg-blue-100">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
}

export default FlightLookup;

