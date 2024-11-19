import React, { useState } from 'react';

function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch('http://localhost:5000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }), // Send email in the request body
            });

            const data = await response.json(); // Parse JSON response

            if (response.ok) {
                setMessage(data.message); // Display success message from the server
                setEmail(''); // Clear email field
            } else {
                setMessage(data.message || 'An error occurred. Please try again.'); // Handle server errors
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to subscribe. Please check your connection and try again.');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-signup">
                <label htmlFor="email">SIGN UP FOR OUR DAILY INSIDER</label>
                <input
                    type="email"
                    id="email"
                    className="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p className="message">{message}</p>} {/* Display server message */}
        </div>
    );
}

export default Form;
