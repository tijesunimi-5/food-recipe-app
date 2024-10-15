import { MongoClient } from "mongodb";

//Function to connect to Mongodb
async function connectToDatabase() {
  const uri =
    "mongodb+srv://tijesunimiidowu16:pdBLyPZMjt1wYhlb@cluster0.5ggz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}

export async function POST(req) {
  try {
    //Parse the incoming req body
    const { email, message } = await req.json();

    //Validate input
    if (!email || !message) {
      console.error("Validation error: Email and message required");
      return new Response(
        JSON.stringify({ error: "Email and message are required." }),
        { status: 400 }
      );
    }

    //Connect to the database
    const client = await connectToDatabase();
    const db = client.db();

    console.log("Connected to MongoDB");

    const result = await db.collection("reviews").insertOne({ email, message });

    // Check if the insertion was successful
    if (result.insertedCount === 1) {
      console.log("Database operation successful");
    } else {
      console.error("Failed to insert review into the database.");
      return new Response(
        JSON.stringify({ error: "Failed to submit review." }),
        { status: 500 }
      );
    }

    console.log("Database operation successful");

    //Close the database connection
    await client.close();
    console.log("MongoDB connection closed");

    //Return a success response
    return new Response(
      JSON.stringify({ message: "Review submitted successfully." }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response(JSON.stringify({ error: "Failed to submit review." }), {
      status: 500,
    });
  }
}
