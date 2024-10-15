// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://tijesunimiidowu16:pdBLyPZMjt1wYhlb@cluster0.5ggz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// In development mode, use a global variable so the MongoClient instance
// is not recreated on every request.
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new MongoClient instance for each request.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
