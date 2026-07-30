import React, { useState } from 'react';
import TodoList from '../../components/TodoList';
import AddTodoForm from '../../components/AddTodoForm';
import { mockTodoData, toggleTodoCompletion } from '../../src/data';
import { TodoItem } from '../../src/types';

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(mockTodoData);

  const handleToggle = (id: string) => {
    setTodos(toggleTodoCompletion(id, todos));
  };

  const handleAdd = (title: string) => {
    const newTodo: TodoItem = {
      id: (todos.length + 1).toString(),
      title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="todo-page">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={handleAdd} />
      <TodoList items={todos} onToggle={handleToggle} />
    </div>
  );
};

export default TodoPage;