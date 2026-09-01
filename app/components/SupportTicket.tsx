import React from 'react';

interface SupportTicketProps {
  id: number;
  title: string;
  status: string;
}

const SupportTicket: React.FC<SupportTicketProps> = ({ id, title, status }) => {
  return (
    <div className="support-ticket">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">Status: {status}</p>
      <p className="text-sm text-gray-500">Ticket ID: {id}</p>
    </div>
  );
};

export default SupportTicket;
