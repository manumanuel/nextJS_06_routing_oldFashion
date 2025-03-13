import { MongoClient } from "mongodb";

async function EmailHandler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid format" });
      return;
    }
    const client = await MongoClient.connect(
      "mongodb+srv://manuelmanu008:6W1jYv7l8tAVFx7r@cluster0.6nblf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db("newsletter");
    await db.collection("emails").insertOne({ email: userEmail });
    client.close();

    res.status(201).json({ message: "email registered" });
  }
}
export default EmailHandler;
