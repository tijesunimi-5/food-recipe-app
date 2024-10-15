'use client'
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

const page = () => {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/message");
        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        const data = await response.json();
        setMessage(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <div className="mt-20 text-center w-[510px]">
        <h1 className="text-3xl">Review Messages</h1>


        {messages.map((message) => {
          <div key={message._id}>
            <Card>
              <div className="w-[400px]">
                <h1>{message.email}</h1>
                <p>{message.message}</p>
              </div>
            </Card>
          </div>;
        })}
      </div>
    </div>
  );
};

export default page;
