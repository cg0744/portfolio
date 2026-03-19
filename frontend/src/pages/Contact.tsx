import { useState, type FormEvent } from 'react';
import cgLogo from '../assets/images/cg-logo.png';

const Contact = () => {
    // 1. Setup State for our form inputs
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [statusMessage, setStatusMessage] = useState('');

    // 2. Handle typing in the inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Handle Form Submission to C# Backend
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault(); // Prevents the page from reloading
        setStatusMessage('Sending...');

        try {
            // Note: Update the port (5000) if your C# API runs on a different port!
            const response = await fetch('http://localhost:5110/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                setStatusMessage(data.message); // The success message from C#
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            } else {
                setStatusMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatusMessage('Error connecting to the server. Is the backend running?');
        }
    };

    return (
        <div className="border p-4 mx-auto my-5 auth-form-container bg-white shadow-sm rounded">
            <div className="text-center">
                <img src={cgLogo} alt="Christian Gawriyah Logo" className="img-fluid auth-logo mb-3" />
                <h2 className="mt-3 h4">Get in touch</h2>
            </div>

            {/* Status Message Display */}
            {statusMessage && (
                <div className={`alert ${statusMessage.includes('Thank you') ? 'alert-success' : 'alert-info'} text-center`} role="alert">
                    {statusMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="pt-3">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-3">
                        <div className="form-floating">
                            <input type="text" name="name" id="name" placeholder="Name" className="form-control" value={formData.name} onChange={handleChange} required />
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-6 mb-3">
                        <div className="form-floating">
                            <input type="email" name="email" id="email" placeholder="Email address" className="form-control" value={formData.email} onChange={handleChange} required />
                            <label htmlFor="email">Email address</label>
                        </div>
                    </div>
                </div>

                <div className="col-12 mb-3">
                    <div className="form-floating">
                        <textarea name="message" id="message" placeholder="Your message" className="form-control" style={{ height: '150px' }} value={formData.message} onChange={handleChange} required></textarea>
                        <label htmlFor="message">Your message</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-secondary w-25">Send</button>

                <div className="row text-center mt-4">
                    <div className="col-12 col-sm-6 text-end">
                        <a href="#" className="text-dark text-decoration-none">Privacy</a>
                    </div>
                    <div className="col-12 col-sm-6 text-start">
                        <a href="#" className="text-dark text-decoration-none">Cookies</a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;