import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect('mongodb+srv://tijesunimiidowu16:6UQ7VSnvLIQKIprA@cluster0.brcmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  return client;
}

async function insertDocument(client, document) {
  const db = client.db();

  await db.collection('Review messages').insertOne(document)

}
async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    const reviewMessage = req.body.message;

    if (!userEmail || !userEmail.include("@") || !reviewMessage) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    let client;

    try {
      client = await connectDatabase()
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, { email: userEmail, message: reviewMessage });

      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    console.log(userEmail);
    res.status(201).json({ message: "Submitted!" });
  }
}

export default handler;
