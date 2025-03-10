function CommentsHandler(req, res) {
  if (req.method === "POST") {
    const { name, emailId, text } = req.body.comment;
    if (!name || name.trim() == "" || !text || text.trim() == "") {
      res.status(422).json({ message: "Invalid inputs" });
      return;
    }
    const savedComment = {
      id: Date.now().toString(),
      name: name,
      text: text,
    };
    console.log(savedComment);
    res.status(200).json({ message: "success", data: savedComment });
  }

  if (req.method === "GET") {
  }
}
export default CommentsHandler;
