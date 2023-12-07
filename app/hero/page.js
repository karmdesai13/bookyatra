"use client"
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import Header from "../header/page";

function Hero() {

    const Card = ({ imageSrc, hotelName, address, price, rating }) => {
        return (
            <div className="bg-gray-100 w-80 m-4 rounded-xl transition-transform hover:scale-105 duration-300 hover:shadow-lg">
                <img src={imageSrc} alt={hotelName} className="w-full h-40 object-cover rounded-t-xl"/>
                <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800">{hotelName}</h2>
                    <p className="text-sm text-gray-600">Address: {address}</p>
                    <p className="text-sm text-gray-600">Price: {price}/night</p>
                    <p className="text-sm text-gray-600">Rating: {rating}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="  bg-slate-900 flex flex-col items-center p-8" 
        >
            
            <Header/>
            <h1 className='text-7xl mb-3 ml-2 font-bold'>
                    <span className='text-white'>Book</span>
                    <span className='text-blue-500'>Yatra</span>
                </h1>

                <TypeAnimation className="text-white"
      sequence={[
        
        'We help to find the best flight for you !',
        1000, 
        'We help to find the best hotel for you !',
        1000,

        
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
            

            
            

            
            <div className="flex flex-col m-4 p-4 w-[1300px] rounded-lg shadow-lg"
     style={{
         backgroundImage: 'linear-gradient(to right bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.1)), url("/images/Air3.png")',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundBlendMode: 'lighten'
     }}>

    <div className="p-6 text-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Discover Your Perfect Flight</h1>
        <p>Explore a wide range of flight options for your journey. Check departure times, airline choices, pricing, and availability in one place. Plan your trip with ease and comfort.</p>
    </div>

    <div className="flex flex-row justify-center space-x-4 mt-4">
        
        <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition duration-300 rounded-lg overflow-hidden hover:scale-105">
            <img src="./images/Plane.png" alt="Plane Image" className="w-full h-32 object-cover"/>
            <ul className="p-4 text-gray-800">
                <li className="font-bold">Flight No : OA 456</li>
                <li>Departure:April 15, 2024, at 10:00 AM</li>
                <li>Arrival: April 15, 2024, at 10:00 PM</li>
                <li>Price: $450</li>
                <li>From: New York</li>
                <li>To: London</li>
            </ul>
        </div>
        <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition duration-300 rounded-lg overflow-hidden hover:scale-105">
            <img src="./images/Plane.png" alt="Plane Image" className="w-full h-32 object-cover"/>
            <ul className="p-4 text-gray-800">
                <li className="font-bold">Flight No :  AJ 789</li>
                <li>Departure: June 21, 2024, at 6:30 PM</li>
                <li>Arrival: June 22, 2024, at 8:00 AM</li>
                <li>$750</li>
                <li>From: Los Angeles</li>
                <li>To: Tokyo</li>
            </ul>
        </div>
        <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition duration-300 rounded-lg overflow-hidden hover:scale-105">
            <img src="./images/Plane.png" alt="Plane Image" className="w-full h-32 object-cover"/>
            <ul className="p-4 text-gray-800">
                <li className="font-bold">Flight No :  GA 303</li>
                <li>Departure: September 10, 2024, at 11:00 AM</li>
                <li>Arrival: September 10, 2024, at 3:00 PM</li>
                <li>Price: $320</li>
                <li>From: Dubai </li>
                <li>To: Cairot</li>
            </ul>
        </div>
    </div>
    <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-5 px-4 rounded">
           <Link href="./flight" className="cursor-pointer"> More Flights</Link> 
        </button>
    </div>
</div>


            
            <div className="text-white font-bold w-[1300px] flex flex-col m-4 p-4 rounded-lg"
     style={{
         backgroundImage: 'linear-gradient(to right bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.2)),url("/images/hotel.png")',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
     }}>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Find Your Ideal Hotel</h2>
                <p className="text-gray-900">Discover your perfect stay from a selection of hotels...</p>

    <div className="flex flex-row justify-center space-x-4 mb-4">
        <Card 
            imageSrc="./images/Hotel.png"
            hotelName="Hotel Grandeur"
            address="Paris, France"
            price="$120"
            rating="4.5/5"
        />
        <Card 
            imageSrc="./images/Hotel.png"
            hotelName="Sunny Resort"
            address="Maldives"
            price="$300"
            rating="4/5"
        />
        <Card 
            imageSrc="./images/Hotel.png"
            hotelName="Mountain Retreat"
            address="Himalayas,India"
            price="$80"
            rating="4.5/5"
        />
        
    </div>

    <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <Link href="./hotel" className="cursor-pointer"> More Hotels</Link> 
        </button>
    </div>
</div>

    
            <footer className="footer p-10 bg-gray-900 text-white  border-t border-white ">
            <aside className="footer-title">
                <p>BookYatra Ltd.<br/>Discovering the world made easy.</p>
            </aside> 

            <nav>
                <header className="footer-title">Explore</header> 
                <a href="./About" className="link link-hover">About us</a> 
                <Link href="./flight" className="text-white hover:underline">Flight Booking</Link>
                <Link href="./hotel" className="text-white hover:underline">Hotel Booking</Link>
                <a href="./Contact" className="link link-hover">Contact</a> 
                <a href="./FAQ" className="link link-hover">FAQs</a>
            </nav>

            <nav>
                <header className="footer-title">Connect</header>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
                    <a href="https://facebook.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
                    <a href="https://instagram.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </nav>

            <nav>
                <header className="footer-title">Legal</header> 
                <Link href="./Terms" className="link link-hover">Terms of use</Link> 
                
                
            </nav>

            
        </footer>
 




            


            
        </div>

    );
}

export default Hero;
