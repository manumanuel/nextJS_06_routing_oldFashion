import { connectDB, registerEmail } from "../../components/helpers/db-utils";

let client;

async function EmailHandler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid format" });
      return;
    }

    try {
      client = await connectDB();
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
