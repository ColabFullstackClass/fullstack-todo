import Todo from "../model/todo.model.js";


export const addTodo = async (req, res) => {
  try {
    const { name, description } = req.body;
    const existing = await Todo.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: "Todo with this name already exists" });
    }
    const todo = new Todo({ name, description });
    await todo.save();

    res.status(201).json({ message: "Todo created", todo });
  } catch (err) {
    res.status(500).json({ message: "Error creating todo", error: err.message });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ isDeleted: false });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving todos", error: err.message });
  }
};

export const getTodoByStatus = async (req, res) => {
  try {
    const { status } = req.query;

    if (status !== "true" && status !== "false") {
      return res.status(400).json({ message: "Invalid status query. Use 'true' or 'false'." });
    }

    const todos = await Todo.find({ isCompleted: status === "true", isDeleted: false });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving todos by status", error: err.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    const todo = await Todo.findOneAndUpdate({ _id: id, isDeleted: false }, update, { new: true });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo updated", todo });
  } catch (err) {
    res.status(500).json({ message: "Error updating todo", error: err.message });
  }
};


export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { isDeleted: true },
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({ message: "Todo not found or already deleted" });
    }
    res.status(200).json({ message: "Todo deleted (soft)", todo });
  } catch (err) {
    res.status(500).json({ message: "Error deleting todo", error: err.message });
  }
};
