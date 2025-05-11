
import clientPromise from "@/lib/mongodb";

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('test'); // Replace 'yourDatabaseName' with your actual database name

    const reviews = await db.collection("reviews").find({}).toArray();

    return new Response(JSON.stringify(reviews), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    // Return a JSON error response
    return new Response(JSON.stringify({ error: "Failed to fetch reviews" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
