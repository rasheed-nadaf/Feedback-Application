import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/feedback";

function FeedbackForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(API_URL, formData);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="feedback-form">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Feedback" value={formData.message} onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FeedbackForm;
