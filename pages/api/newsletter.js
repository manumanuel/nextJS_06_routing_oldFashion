import { MongoClient } from "mongodb";

function EmailHandler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid format" });
      return;
    }
    MongoClient.connect('mongodb+srv://manuelmanu008:<db_password>@cluster0.6nblf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    res.status(201).json({ message: "email registered" });
    
  }
}
export default EmailHandler;
