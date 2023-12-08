import Header from "../header/page";
export default function TermsOfUse() {
    return(
   <div className="terms-of-use-page min-h-screen bg-gray-800">
    <Header/>
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-white mb-6">Terms of Use</h1>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p>By accessing and using the BookYatra website, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>

                    <h2 className="text-2xl font-semibold mb-4 mt-6">2. User Obligations</h2>
                    <p>You are responsible for ensuring that your use of the website complies with all laws, rules, and regulations applicable to you.</p>

                    <h2 className="text-2xl font-semibold mb-4 mt-6">3. Intellectual Property Rights</h2>
                    <p>All contents of the site, including but not limited to text, design, and images, are owned by BookYatra or its content providers.</p>

                    <h2 className="text-2xl font-semibold mb-4 mt-6">4. Disclaimer of Warranties</h2>
                   <p>The website and its content are provided on an &quot;as is&quot; basis. BookYatra makes no warranties regarding the accuracy or completeness of any content.</p>

                    <h2 className="text-2xl font-semibold mb-4 mt-6">5. Limitation of Liability</h2>
                    <p>BookYatra will not be liable for any indirect, incidental, or punitive damages arising out of your use or inability to use the website.</p>

                    <h2 className="text-2xl font-semibold mb-4 mt-6">6. Governing Law</h2>
                    <p>These terms are governed by the laws of the jurisdiction in which BookYatra is located, without regard to its conflict of law provisions.</p>

                    <h2 className="text-2xl font-semibold mb-4 mt-6">7. Amendments to Terms</h2>
                    <p>We may update these Terms of Use from time to time. We encourage you to periodically review this page for the latest information on our terms.</p>

                    <h2 className="text-2xl font-semibold mb-4 mt-6">8. Contact Information</h2>
                    <p>For any questions about these Terms, please contact us at support@bookyatra.com.</p>
                </div>
            </div>
        </div>
    );

}
