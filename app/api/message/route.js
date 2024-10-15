import clientPromise from "@/lib/mongodb";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db();

    console.log("Connected to MongoDB");
    const messages = await db.collection("reviews").find({}).toArray();
    console.log("Fetched messages:", messages);

    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error); // Log the error
    return new Response(JSON.stringify({ error: "Failed to fetch messages" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const body = await req.json(); // Parse the JSON body
    const message = body;
    console.log("Saving message:", message);

    await db.collection("reviews").insertOne(message);
    return new Response(JSON.stringify({ message: "Message saved" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error saving message:", error); // Log the error
    return new Response(JSON.stringify({ error: "Failed to save message" }), {
      status: 500,
    });
  }
}
