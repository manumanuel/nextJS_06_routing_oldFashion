import { MongoClient } from "mongodb";
async function CommentsHandler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://manuelmanu008:6W1jYv7l8tAVFx7r@cluster0.6nblf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
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
    console.log(savedComment);
    const result = await db.collection("comments").insertOne(savedComment);
    //console.log(result);
    client.close();
    savedComment.id = result.insertedId;
    res.status(200).json({ message: "success", data: savedComment });
  }

  if (req.method === "GET") {
    /*  const dummyList = [
      { id: "v1", name: "Fejo", text: "Rapper from kerala" },
      { id: "v2", name: "Dabzee", text: "Singer from kerala" },
    ];
    res.status(200).json({ data: dummyList }); */

    const allComments = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({ data: allComments });
  }
}
export default CommentsHandler;
