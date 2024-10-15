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
      return new Response(
        JSON.stringify({ error: "Email and message are required." }),
        { status: 400 }
      );
    }

    //Connect to the database
    const client = await connectToDatabase();
    const db = client.db();
    const collection = db.collection("reviews");

    //Insert the email and message into the collection
    const result = await collection.insertOne({ email, message });

    //Close the database connection
    client.close();

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
