import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/feedback"; // Backend URL

function FeedbackApp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [feedbackList, setFeedbackList] = useState([]);

    // Fetch feedback from backend
    const fetchFeedback = async () => {
        try {
            const response = await axios.get(API_URL);
            setFeedbackList(response.data);
        } catch (error) {
            console.error("Error fetching feedback:", error);
        }
    };

    // Fetch feedback when component loads
    useEffect(() => {
        fetchFeedback();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFeedback = { name, email, message };
        try {
            const response = await axios.post(API_URL, newFeedback);
            setFeedbackList([response.data, ...feedbackList]); // Update UI instantly
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error submitting feedback:", error);
        }
    };

    return (
        <div className="container">
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea placeholder="Your Feedback" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type="submit">Submit</button>
            </form>

            <h3>All Feedback</h3>
            <ul>
                {feedbackList.map((feedback) => (
                    <li key={feedback.id} className="feedback-item">
                        <div className="feedback-header">
                            <strong>{feedback.name}</strong> <span>{new Date(feedback.timestamp).toLocaleString()}</span>
                        </div>
                        <p>{feedback.message}</p>
                        <small>{feedback.email}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeedbackApp;
