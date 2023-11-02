import Link from "next/link";
function HomePage() {
    return (
        <div className="bg-gradient-to-r from-blue-300 to-pink-300 h-screen flex flex-col items-center p-8">
            {/* Header with logo, title, and navigation */}
            <header className="flex justify-between w-full items-center mb-6">
                
                <h1 className="text-3xl font-bold text-white mb-8">BookYatra</h1>
                <nav className="flex space-x-6">
                    <Link href="./flight" className="text-white transform transition-transform duration-300 hover:scale-110">Home</Link>
                    <Link href="./flight" className="text-white transform transition-transform duration-300 hover:scale-110">Flight Booking</Link>
                    <Link href="./hotel" className="text-white transform transition-transform duration-300 hover:scale-110">Hotel Booking</Link>
                    <Link href="./setting" className="text-white transform transition-transform duration-300 hover:scale-110">Setting</Link>
                    <Link href="./profile" className="text-white transform transition-transform duration-300 hover:scale-110">Profile</Link>
                </nav>
            </header>

            {/* Search section */}
            <div className="bg-white p-4 rounded-md shadow-md w-full mb-6 flex justify-between items-center">
                <input type="text" placeholder="Ex. Cities" className="border p-2 flex-1 rounded mr-4" />
                <button className="bg-blue-500 text-white p-2 rounded">Search</button>
            </div>

            {/* Content cards */}
            <div className="grid grid-cols-3 gap-6 w-full">
                {/* Each card now has hover animation */}
                {/* Flights card */}
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold mb-2">Flights</h3>
                    <span>BSCElce alica: Now 500</span>
                    {/* ... more flight details ... */}
                </div>

                {/* Hotels cards */}
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold mb-2">Hotels</h3>
                    <span>Ramada: Luxury Stay</span>
                    {/* ... more hotel details ... */}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold mb-2">Hotels</h3>
                    <span>Best Western: Comfortable Rooms</span>
                    {/* ... more hotel details ... */}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold mb-2">Hotels</h3>
                    <span>Holiday Express: Value for Money</span>
                    {/* ... more hotel details ... */}
                </div>

                {/* Contact card */}
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 col-span-3">
                    <h3 className="font-bold mb-2">Contact</h3>
                    <p>Get the best deals and offers. Reach out to us at: <a href="mailto:contact@bookyatra.com" className="text-blue-600 hover:text-blue-800">contact@bookyatra.com</a></p>
                </div>

                
            </div>

            
        </div>

    );
}

export default HomePage;
