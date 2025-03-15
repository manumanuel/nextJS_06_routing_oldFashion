import { connectDB } from "../../../components/helpers/db-utils";

async function CommentsHandler(req, res) {
  const client = await connectDB();
  const db = client.db("newsletter");

  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { name, email, text } = req.body;
    if (!name || name.trim() == "" || !text || text.trim() == "") {
      res.status(422).json({ message: "Invalid inputs" });
      return;
    }
    const savedComment = {
      id: Date.now().toString(),
      name,
      text,
      eventId,
    };
    try {
      const result = await db.collection("comments").insertOne(savedComment);
      savedComment.id = result.insertedId;
      res.status(200).json({ message: "success", data: savedComment });
    } catch (error) {
      res.status(500).json({ message: "insertion failed" });
    }
    client.close();
  }

  if (req.method === "GET") {
    /*  const dummyList = [
      { id: "v1", name: "Fejo", text: "Rapper from kerala" },
      { id: "v2", name: "Dabzee", text: "Singer from kerala" },
    ];
    res.status(200).json({ data: dummyList }); */

    const allComments = await db
      .collection("comments")
      .find({ eventId: eventId }) //for filtering, no filter filter needs either pass {} or keep it blank
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({ data: allComments });
  }
  client.close();
}
export default CommentsHandler;
