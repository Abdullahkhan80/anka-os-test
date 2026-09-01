import React from 'react';
import SupportSidebar from './SupportSidebar';
import SupportTicket from './SupportTicket';

const SupportDashboard = () => {
  return (
    <div className="support-dashboard">
      <SupportSidebar />
      <div className="support-content">
        <h1>Support Dashboard</h1>
        <div className="tickets">
          <SupportTicket id={1} title="Issue with login" status="Open" />
          <SupportTicket id={2} title="Payment not processed" status="Pending" />
          <SupportTicket id={3} title="Feature request" status="Closed" />
        </div>
      </div>
    </div>
  );
};

export default SupportDashboard;
