import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useParams } from 'react-router-dom';
import './Register.css';

const Register1 = () => {
    const navigate = useNavigate();
    const { eventId } = useParams();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ticketType, setTicketType] = useState('Standard');

    const [city, setCity] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [enrollmentNumber, setEnrollmentNumber] = useState('');

    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: username,
            email,
            password,
            city,
            collegeName,
            enrollmentNumber
        };

        axios.post(`http://localhost:5000/api/auth/signup`, userData)
            .then(response => {
                alert('Signup successful');
                localStorage.setItem('authToken', response.data.token);
                setIsRegistered(true);

                // Redirect to profile page after registration
                navigate('/profile');
            })
            .catch(error => {
                console.error('Error during registration:', error);
                alert('Error during registration');
            });
    };

    const handleGoogleSuccess = (response) => {
        const token = response.credential;

        axios.post(`http://localhost:5000/api/auth/google-signup`, { token })
            .then(response => {
                alert('Signup successful with Google');
                localStorage.setItem('authToken', response.data.token);
                setIsRegistered(true);

                // Redirect to profile page after Google signup
                navigate('/profile');
            })
            .catch(error => {
                console.error('Google signup error:', error);
                alert('Google signup error');
            });
    };

    const handleGoogleFailure = (error) => {
        console.error('Google signup failed:', error);
        alert('Google signup failed');
    };

    const initiatePayment = async () => {
        if (!eventId) {
            return alert("Event ID is required to initiate payment.");
        }

        try {
            const response = await axios.post('http://localhost:5000/api/create-checkout-session', {
                eventId,
                ticketType
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            const { sessionId } = response.data;
            const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
            await stripe.redirectToCheckout({ sessionId });
        } catch (error) {
            console.error('Error initiating payment:', error);
            alert('Error initiating payment.');
        }
    };

    return (
        <GoogleOAuthProvider clientId="528316752763-vukvoen52dr5mhpvllqpt0fet2c9oj3b.apps.googleusercontent.com">
            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    {/* New fields for city, college, and enrollment */}
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        required
                    />
                    <input
                        type="text"
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                        placeholder="College Name"
                        required
                    />
                    <input
                        type="text"
                        value={enrollmentNumber}
                        onChange={(e) => setEnrollmentNumber(e.target.value)}
                        placeholder="Enrollment Number"
                        required
                    />
                    <button type="submit" className="register-button">Register</button>
                </form>

                <div className="google-login-container">
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleFailure}
                        useOneTap
                    />
                </div>

                <div className="ticket-selection-container">
                    <label htmlFor="ticketType">Select Ticket Type:</label>
                    <select
                        id="ticketType"
                        value={ticketType}
                        onChange={(e) => setTicketType(e.target.value)}
                    >
                        <option value="Standard">Standard</option>
                        <option value="VIP">VIP</option>
                        <option value="Student">Student</option>
                    </select>
                </div>

                {eventId && isRegistered && (
                    <div className="payment-container">
                        <button onClick={initiatePayment} className="payment-button">
                            Proceed to Payment
                        </button>
                    </div>
                )}
            </div>
        </GoogleOAuthProvider>
    );
};

export default Register1;
