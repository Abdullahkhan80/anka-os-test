import { TodoItem } from './types';

export const mockTodoData: TodoItem[] = [
  { id: '1', title: 'Learn TypeScript', completed: false },
  { id: '2', title: 'Build a Todo App', completed: false },
  { id: '3', title: 'Test the App', completed: false }
];

export const toggleTodoCompletion = (id: string, todos: TodoItem[]): TodoItem[] => {
  return todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};