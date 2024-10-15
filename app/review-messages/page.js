// app/reviews/page.js
"use client";
import Card from "@/components/Card";
import ReviewCard from "@/components/ReviewCard";
import { useEffect, useState } from "react";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/message");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch reviews");
        }
        const data = await response.json();

        // Ensure the data is an array
        setReviews(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        setError(error.message);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="mt-32 text-center ml-10">
      <h1 className="text-2xl ml-20">Customer Reviews</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : reviews.length === 0 ? (
        <p className="text-2xl text-center">No reviews available.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="mt-7">
              <ReviewCard>
                <p className="text-2xl font-semibold">
                  <strong>Email:</strong> {review.email}
                </p>
                <p className="text-2xl font-bold">
                  <strong>Message:</strong> {review.message}
                </p>
              </ReviewCard>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
