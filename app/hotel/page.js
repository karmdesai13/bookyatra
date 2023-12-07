"use client";
import { useState } from 'react';
import Header from '../header/page';

export default function HotelLookup() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedHotel, setSelectedHotel] = useState(null);

    
    const hotels = [
        {
            name: 'Hotel Grandeur',
            location: 'Paris, France',
            amenities: ['pool', 'gym', 'spa'],
            price: '$120/night',
            rooms: [
                { type: 'Standard', price: '$120/night', description: 'One king-size bed, en-suite bathroom.' },
                { type: 'Deluxe', price: '$150/night', description: 'One king-size bed, en-suite bathroom, city views.' },
                { type: 'Suite', price: '$200/night', description: 'Separate living area, king-size bed, luxury bathroom amenities.' },
            ],
            reviews: [
                { user: 'Alice', comment: 'Fantastic stay with wonderful amenities.' },
                { user: 'Bob', comment: 'Very comfortable and well located.' },
                { user: 'Carlos', comment: 'The spa is top-notch, and the staff was incredibly accommodating.' },
                { user: 'Diana', comment: 'Loved the interior design and the luxurious feel of the place.' },
                { user: 'Evan', comment: 'Perfect location for sightseeing and the pool area is a great place to relax.' }
              ],
              stats: [
                { title: 'Total Bookings', value: '800', desc: 'Last Month' },
                { title: 'Average Rate', value: '$120/night', desc: 'Based on recent bookings' },
                { title: 'Guest Satisfaction', value: '92%', desc: 'Based on feedback' }
            ],
            rating: 4.5
        },
        {
            name: 'Sunny Resort',
            location: 'Maldives',
            amenities: ['beach', 'gym', 'spa'],
            price: '$300/night',
            rooms: [
                { type: 'Standard', price: '$120/night', description: 'One king-size bed, en-suite bathroom.' },
                { type: 'Deluxe', price: '$150/night', description: 'One king-size bed, en-suite bathroom, city views.' },
                { type: 'Suite', price: '$200/night', description: 'Separate living area, king-size bed, luxury bathroom amenities.' },
            ],
            reviews: [
                { user: 'Fiona', comment: 'An unforgettable beachfront experience. Waking up to the sound of the ocean was divine.' },
                { user: 'George', comment: 'The view from our room was stunning, and the beach access is unbeatable.' },
                { user: 'Hannah', comment: 'Exquisite resort with the most relaxing atmosphere.' },
                { user: 'Ivan', comment: 'Ideal for our honeymoon, private and romantic.' },
                { user: 'Julia', comment: 'Service was exceptional and the food was delicious. Highly recommend the seafood!' }
              ],
              stats: [
                { title: 'Total Bookings', value: '1K', desc: 'Last Month' },
                { title: 'Average Rate', value: '$300/night', desc: 'Based on recent bookings' },
                { title: 'Guest Satisfaction', value: '96%', desc: 'Based on feedback' }
            ],
            rating: 4.0
        },
        {
            name: 'Mountain Retreat',
            location: 'Himalayas',
            amenities: ['hiking', 'pool', 'spa'],
            price: '$80/night',
            rooms: [
                { type: 'Standard', price: '$120/night', description: 'One king-size bed, en-suite bathroom.' },
                { type: 'Deluxe', price: '$150/night', description: 'One king-size bed, en-suite bathroom, city views.' },
                { type: 'Suite', price: '$200/night', description: 'Separate living area, king-size bed, luxury bathroom amenities.' },
            ],
            reviews: [
                { user: 'Kevin', comment: 'Perfect for a quiet getaway in nature. The hiking trails were an adventure.' },
                { user: 'Lila', comment: 'The mountain views are breathtaking. A very serene and peaceful stay.' },
                { user: 'Mason', comment: 'A true retreat. Disconnect from the world and enjoy the tranquility.' },
                { user: 'Nora', comment: 'Cozy rooms and warm hospitality, felt like a home away from home.' },
                { user: 'Oliver', comment: 'The nights are silent and the sky full of stars. Absolutely magical.' }
              ],
              stats: [
                { title: 'Total Bookings', value: '500', desc: 'Last Month' },
                { title: 'Average Rate', value: '$80/night', desc: 'Based on recent bookings' },
                { title: 'Guest Satisfaction', value: '90%', desc: 'Based on feedback' }
            ],
            rating: 4.0
        },
    ];

    const handleViewDetails = (hotelName) => {
        const hotel = hotels.find(h => h.name === hotelName);
        setSelectedHotel(hotel);
    };

    
    function renderAmenities(amenities) {
        return amenities.map((amenity, index) => (
            
            <span key={index} className='m-2'>
            
                <img src={`./images/Amenities/${amenity}.png`} alt={amenity} className='h-40 mb-6
                    transition-transform hover:scale-110 duration-300' />
                <p>{amenity}</p>
            </span>
        ));
    }

    function renderRooms(rooms) {
        return rooms.map((room, index) => (
            <div key={index} className=' p-4 rounded-lg my-2  border-slate-900 border-2'>
                <h3 className='font-bold'>{room.type} - {room.price}</h3>
                <p>{room.description}</p>
                <span key={index} className='m-2'>
                <img src={`./images/Rooms/${room.type}.png`} alt={rooms} className='h-30 w-[500px] ml-[50px] max-w-xl 
                    transition-transform hover:scale-105 duration-300' />
            </span>
            </div>
        ));
    }

    function renderStats(stats) {
        return stats.map((stat, index) => (
            <div key={index} className="stat">
                <div className="stat-title">{stat.title}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-desc">{stat.desc}</div>
            </div>
        ));
    }

    function renderReviews(reviews) {
        return reviews.map((review, index) => (
            <div key={index} className='border-t border-gray-500 mt-2 pt-2'>
                <p className='text-sm'>{review.comment}</p>
                <p className='text-sm font-semibold'>{review.user}</p>
            </div>
        ));
    }

    function renderRating(rating) {
        return (
            <div className='flex justify-center items-center'>
                <span className=' font-semibold text-3xl'>{rating}</span>
                <div className="rating m-2">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 rating-half bg-orange-400"  />
</div>
            </div>
        );
    }

    

    if (selectedHotel) {
        return (
            <div className='  bg-gray-900 flex flex-col items-center justify-center min-h-screen' >
                <div className='text-center p-5 w-full max-w-4xl bg-white rounded-lg shadow-xl'>
                    <h1 className='text-5xl font-bold text-gray-800 mb-4'>{selectedHotel.name}</h1>
                    <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                    <img src="./images/HotelCard.png" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                    <img src="./images/HotelCard2.png" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                    <img src="./images/HotelCard3.png" className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                    <img src="./images/HotelCard.png" className="w-full" />
                    </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-sm">1</a> 
                    <a href="#item2" className="btn btn-sm">2</a> 
                    <a href="#item3" className="btn btn-sm">3</a> 
                    <a href="#item4" className="btn btn-sm">4</a>
                </div>
                    <div className='flex items-center justify-center my-2'>
                        {renderRating(selectedHotel.rating)}
                    </div>
                    <p className='text-xl text-gray-600'>{selectedHotel.location}</p>
                    <p className='text-lg text-gray-800 font-semibold my-2'>Starting at {selectedHotel.price}</p>
                    
                    <div className='my-4'>
                    <h2 className='text-3xl font-bold text-black mb-3'>Rooms</h2> 
                    <div className='flex flex-wrap justify-center gap-4'>
                        {renderRooms(selectedHotel.rooms)}
                    </div>
                </div>
    
                    <div className='my-4'>
                        <h2 className='text-3xl font-bold text-gray-800 mb-3'>Amenities</h2>
                        <div className='flex flex-wrap justify-center'>
                            {renderAmenities(selectedHotel.amenities)}
                        </div>
                    </div>
    
                    <div className='my-4'>
                        <h2 className='text-3xl font-bold text-gray-800 mb-3'>Reviews</h2>
                        <div className='space-y-2'>
                            {renderReviews(selectedHotel.reviews)}
                        </div>
                    </div>
                    <div className='my-4'>
                    <div className="stats shadow">
                    {renderStats(selectedHotel.stats)}
                    </div>
                    </div>
                    <div>
                    <button onClick={() => setSelectedHotel(null)} className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Back to list
                    </button>
                    </div>
  
                    </div>

                    
                    
                </div>
            
        );
    }
    
    

    return (
        <div className="flex  flex-col items-center py-8"
        style={{
            backgroundImage: 'url("/images/HotelBg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Header/>

          
            

            <div className="p-5 bg-slate-800 w-full max-w-7xl rounded-lg shadow-lg mb-8 flex justify-between items-center">
            <input
            type="text"
            placeholder="Search for a hotel..."
            className="border-2 border-black p-2 flex-1 rounded-lg mr-6 focus:border-blue-500 focus:outline-none transition-border duration-300" 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-2 px-5 rounded-lg transform transition-transform duration-300 hover:scale-105">Search</button>
            </div>

            

        
            <div className="w-full flex space-x-6 justify-center items-center">
                
                {hotels.map((hotel, index) => (
                    <div key={index} className="bg-slate-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-xl hover:scale-105 text-center">
                        <h3 className="font-bold text-white mb-4 text-2xl underline">{hotel.name}</h3>
                        <img src='./images/HotelCard.png' className='w-full h-60 mx-auto m-4'/>
                        <p className="text-white mb-4 text-lg">Located in {hotel.location}.</p>
                        <p className="text-white mb-4 text-lg">Amenities include {hotel.amenities}.</p>
                        <div className="text-white text-lg mb-4">Starting at {hotel.price}</div>
                        <button
                            onClick={() => handleViewDetails(hotel.name)}
                            className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            

            

        </div>
    );
}



