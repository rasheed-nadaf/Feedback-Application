import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/feedback";

function FeedbackList() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            const response = await axios.get(API_URL);
            setFeedbacks(response.data);
        };
        fetchFeedback();
    }, []);

    return (
        <div className="feedback-list">
            <h3>All Feedback</h3>
            {feedbacks.map((fb) => (
                <div key={fb.id} className="feedback-item">
                    <strong>{fb.name}</strong>: {fb.message} <small>({fb.email})</small>
                </div>
            ))}
        </div>
    );
}

export default FeedbackList;
