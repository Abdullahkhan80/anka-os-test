import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white dark:bg-black rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-black dark:text-white mb-4">To-Do List</h1>
        <div className="flex w-full mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul className="w-full">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center p-2 border-b border-gray-200">
              <span className="text-black dark:text-white">{task}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
