const todos = [];

const getAllToDo = (req, res) => {
    res.json(todos);
  };

const addTask = (req, res) => {
console.log("body=>", req.body);
const new_task = { id: todos.length + 1, ...req.body};
todos.push(new_task);
res.status(201).json(todos);
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const {name} = req.body;
    const indx = todos.findIndex((item) => item.id == id);
    if (indx === -1) return res.sendStatus(404);
    todos[indx] = { ...todos[indx], name: name};
    res.json(todos);
  };

const deleteTask = (req, res) => {
const { id } = req.params;
const task = todos.filter((item) => item.id == id);
if (!task) return res.sendStatus(404);
todos.splice(task, 1);
res.status(200).json("Deleted");
};

module.exports = {
    getAllToDo,
    addTask,
    updateTask,
    deleteTask
}

