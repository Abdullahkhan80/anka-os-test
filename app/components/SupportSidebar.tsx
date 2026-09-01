import React from 'react';

const SupportSidebar = () => {
  return (
    <aside className="support-sidebar">
      <nav>
        <ul className="space-y-2">
          <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a></li>
          <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Tickets</a></li>
          <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</a></li>
          <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Reports</a></li>
          <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Help</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SupportSidebar;
