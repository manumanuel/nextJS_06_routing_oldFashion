function EmailHandler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid format" });
      return;
    }
    res.status(201).json({ message: "email registered" });
  }
}
export default EmailHandler;
