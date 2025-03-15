import { MongoClient } from "mongodb";

let db;
export async function connectDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://manuelmanu008:6W1jYv7l8tAVFx7r@cluster0.6nblf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  return client;
}

export async function registerEmail(client, data) {
  db = client.db("newsletter");
  await db.collection("emails").insertOne(data);
}
