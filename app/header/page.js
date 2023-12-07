const Header = () => {
  return (
    <header className=" flex justify-between  w-full items-center mb-6 ">
                
                <img src="./images/icon.png" alt="Logo" className="w-24 h-24 rounded-2xl"/>
                <nav className="flex space-x-4  ">
                    <Link href="./hero" className="text-white transform transition-transform duration-300 hover:scale-110">Home</Link>
                    <Link href="./flight" className="text-white transform transition-transform duration-300 hover:scale-110">Flight Booking</Link>
                    <Link href="./hotel" className="text-white transform transition-transform duration-300 hover:scale-110">Hotel Booking</Link>
                    <Link href="./setting" className="text-white transform transition-transform duration-300 hover:scale-110">Setting</Link>
                    <Link href="./LogIn" className="text-white transform transition-transform duration-300 hover:scale-110">LogIn</Link>
                </nav>
            </header>
          
    
  )
}

export default Header;
