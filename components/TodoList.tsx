import React from 'react';
import TodoItem from './TodoItem';
import { TodoItem as TodoItemType } from '../src/types';

interface TodoListProps {
  items: TodoItemType[];
  onToggle: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onToggle }) => {
  return (
    <div className="todo-list">
      {items.map(item => (
        <TodoItem key={item.id} item={item} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;