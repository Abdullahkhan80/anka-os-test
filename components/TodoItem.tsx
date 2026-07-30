import React from 'react';
import { TodoItem as TodoItemType } from '../src/types';

interface TodoItemProps {
  item: TodoItemType;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onToggle }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />
      <span>{item.title}</span>
    </div>
  );
};

export default TodoItem;