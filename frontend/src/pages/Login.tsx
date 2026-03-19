import { useState, type FormEvent } from 'react';
import cgLogo from '../assets/images/cg-logo.png';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatusMessage('Authenticating...');

        try {
            // Note: Update the port (5000) if your C# API runs on a different port!
            const response = await fetch('http://localhost:5110/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            
            if (response.ok) {
                setStatusMessage('Login successful! Welcome back.');
                // In a real app, you would save data.token to localStorage here
            } else {
                setStatusMessage(data.message || 'Invalid credentials.');
            }
        } catch (error) {
            setStatusMessage('Error connecting to the server. Is the backend running?');
        }
    };

    return (
        <div className="border p-4 mx-auto my-5 auth-form-container bg-white shadow-sm rounded">
            <div className="text-center">
                <img src={cgLogo} alt="Christian Gawriyah Logo" className="img-fluid auth-logo mb-3" />
                <h2 className="mt-3 h3">Log in</h2>
            </div>

            {statusMessage && (
                <div className={`alert ${statusMessage.includes('successful') ? 'alert-success' : 'alert-danger'} text-center`} role="alert">
                    {statusMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="pt-4">
                <div className="form-floating mb-3">
                    <input type="email" name="email" id="email" placeholder="Email address" className="form-control" value={formData.email} onChange={handleChange} required />
                    <label htmlFor="email">Email address</label>
                </div>
                
                <div className="form-floating mb-4">
                    <input type="password" name="password" id="password" placeholder="Password" className="form-control" value={formData.password} onChange={handleChange} required />
                    <label htmlFor="password">Password</label>
                </div>

                <a href="#" className="d-block mb-3 text-decoration-none">Forgot password?</a>
                <button type="submit" className="btn btn-secondary w-25">Log in</button>

                <p className="h5 my-3">If you don't have an account yet, <a href="#" className="text-decoration-none">register here</a></p>

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

export default Login;