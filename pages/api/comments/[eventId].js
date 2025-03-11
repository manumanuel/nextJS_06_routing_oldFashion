function CommentsHandler(req, res) {
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
    };
    console.log(savedComment);
    res.status(200).json({ message: "success", data: savedComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "v1", name: "Fejo", text: "Rapper from kerala" },
      { id: "v2", name: "Dabzee", text: "Singer from kerala" },
    ];
    res.status(200).json({ data: dummyList });
  }
}
export default CommentsHandler;
