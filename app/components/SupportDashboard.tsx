import React from 'react';
import SupportSidebar from './SupportSidebar';
import SupportTicket from './SupportTicket';

const SupportDashboard = () => {
  return (
    <div className="support-dashboard">
      <SupportSidebar />
      <div className="support-content">
        <h1 className="text-2xl font-bold mb-4">Support Dashboard</h1>
        <div className="tickets grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SupportTicket id={1} title="Issue with login" status="Open" />
          <SupportTicket id={2} title="Payment not processed" status="Pending" />
          <SupportTicket id={3} title="Feature request" status="Closed" />
        </div>
      </div>
    </div>
  );
};

export default SupportDashboard;
