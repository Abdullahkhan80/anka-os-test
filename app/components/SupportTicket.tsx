import React from 'react';

interface SupportTicketProps {
  id: number;
  title: string;
  status: string;
}

const SupportTicket: React.FC<SupportTicketProps> = ({ id, title, status }) => {
  return (
    <div className="support-ticket">
      <h2>{title}</h2>
      <p>Status: {status}</p>
    </div>
  );
};

export default SupportTicket;
