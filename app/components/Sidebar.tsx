import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 w-64">
      <ul className="space-y-2">
        <li><a href="#" className="block p-2 hover:bg-gray-300">Dashboard</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-300">Settings</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-300">Profile</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;