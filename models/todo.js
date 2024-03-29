const todos = [
  {todo: 'Feed Dogs', done: true},
  {todo: 'Learn Express', done: false},
  {todo: 'Buy Milk', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function getOne(id) {
  return todos[id];
}

function getAll() {
  return todos;
}

function create(todo){
  todos.push(todo);
}

function deleteOne(id){
  todos.splice(id,1);
}

function update(id, todo){
  todos[id] = todo;
}