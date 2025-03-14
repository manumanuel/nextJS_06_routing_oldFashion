import { MongoClient } from "mongodb";

let client, db;
async function connectdb() {
  const client = await MongoClient.connect(
    "mongodb+srv://manuelmanu008:6W1jYv7l8tAVFx7r@cluster0.6nblf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  return client;
}

async function registerEmail(client, data) {
  db = client.db("newsletter");
  await db.collection("emails").insertOne(data);
}

async function EmailHandler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid format" });
      return;
    }

    try {
      client = await connectdb();
    } catch (error) {
      res.status(500).json({ message: "db connect error" });
      return;
    }

    try {
      await registerEmail(client, { email: userEmail });
      res.status(201).json({ message: "email registered" });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "insertion failed" });
      client.close();
      return;
    }
  }
}
export default EmailHandler;
