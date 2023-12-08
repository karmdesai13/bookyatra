"use client";
import Header from "../header/page";


export default function About() {
    
    const teamMembers = [
        { name: 'Karm Desai', role: 'Lead Developer', imageUrl: "./images/Profile.png" },
        { name: 'Zainul Malik', role: 'Lead Developer', imageUrl: "./images/Profile.png" },
        { name: 'Prit Patel', role: 'Lead Developer', imageUrl: "./images/Profile.png" },
        { name: 'Mosmee Desai', role: 'Lead Developer', imageUrl: "./images/Profile2.png" },
        { name: 'Sourabh Thakur', role: 'Lead Developer', imageUrl: "./images/Profile.png" },
    ];

   

    return (
        <div className="about-us" >
            <div style={{ backgroundColor: '#0d253f' }} className="m-0">
            <Header/>
            
            <div className="hero min-h-screen" style={{ backgroundColor: '#0d253f' }}>
            
                <div className="hero-content text-center text-white">
                    
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">We are passionate about providing the best travel experience for our customers. Discover how we make your trips memorable.</p>
                    </div>
                </div>
            </div>
            </div>

            <div className="container mx-auto p-6">
                <div className="flex flex-wrap justify-center text-gray-800">
                    <div className="w-full lg:w-1/2 p-4">
                        <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
                        <p>To offer seamless and affordable travel solutions, enriching your journey with memorable experiences.</p>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                        <h2 className="text-3xl font-bold mb-2">Our Values</h2>
                        <ul className="list-disc list-inside">
                            <li>Customer Focus - We put your needs first.</li>
                            <li>Innovation - We embrace change and creativity.</li>
                            <li>Integrity - We believe in honesty and transparency.</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center p-4">
                    <h2 className="text-3xl font-bold mb-2">Meet the Team</h2>
                    <div className="flex flex-wrap justify-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="card w-96 bg-base-100 shadow-xl m-4">
                                <figure className="px-10 pt-10">
                                    <img src={member.imageUrl} alt={member.name} className="rounded-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{member.name}</h2>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    );
}
