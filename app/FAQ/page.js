"use client";

export default function FAQ() {
    const faqs = [
        { question: 'How can I find the best flight deals?', answer: 'Use our search filters to compare prices and find the best deals for your travel dates.' },
        { question: 'What information is available for hotels?', answer: 'We provide detailed information on amenities, location, pricing, and guest reviews.' },
        { question: 'Can I find international hotel listings?', answer: 'Yes, we feature hotels from all around the world.' },
        { question: 'How up-to-date is the flight information?', answer: 'We update our flight information regularly to ensure accuracy.' },
        { question: 'Are there any additional fees?', answer: 'We do not charge any fees. We provide information to help you make the best travel decisions.' },
        { question: 'How can I contact a hotel directly?', answer: 'Hotel contact details are provided on each listing for your convenience.' },
    ];

    return (
        <div className="faq-page min-h-screen bg-gray-100">
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h1>
                <div className="faq-content">
                    {faqs.map((faq, index) => (
                        <div key={index} className="collapse collapse-plus bg-white mb-2">
                            <input type="radio" name="faq-accordion" id={`faq-${index}`} className="peer" /> 
                            <div className="collapse-title text-xl font-medium">
                                <label htmlFor={`faq-${index}`} className="cursor-pointer">
                                    {faq.question}
                                </label>
                            </div>
                            <div className="collapse-content"> 
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="bg-gray-200 text-gray-700 p-4 text-center mt-6">
                <p>&copy; {new Date().getFullYear()} BookYatra. All rights reserved.</p>
                <p>For more information, contact us at info@bookyatra.com</p>
            </footer>
        </div>
    );
}


