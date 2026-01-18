export function getUsers(req, res) {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
}

export function createUser(req, res) {
  const user = req.body;

  if (!user.name || user.name.trim() === "") {
    res.status(400).json({ error: "User name is required" });
    return;
  }

  res.status(201).json({
    id: Date.now(),
    name: user.name,
  });
}

export function getUserById(req, res) {
  const userId = Number(req.params.id);

  if (!userId) {
    res.status(400).json({ error: "User ID is required" });
    return;
  }

  res.json({
    id: userId,
    name: userId === 1 ? "Alice" : "Bob",
  });
}
