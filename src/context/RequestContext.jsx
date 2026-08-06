import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_REQUESTS } from '../data/seedData';

const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem('nexus_project_requests');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        console.error('Failed to parse requests from localStorage:', e);
      }
    }
    return INITIAL_REQUESTS;
  });

  useEffect(() => {
    localStorage.setItem('nexus_project_requests', JSON.stringify(requests));
  }, [requests]);

  // Create new project request
  const submitProjectRequest = (formData) => {
    const newId = `REQ-${Math.floor(10000 + Math.random() * 90000)}`;
    const now = new Date().toISOString();
    
    const newRequest = {
      id: newId,
      ...formData,
      status: 'Pending',
      submittedAt: now,
      updatedAt: now,
      internalNotes: 'Yêu cầu mới gửi qua website.'
    };

    setRequests(prev => [newRequest, ...prev]);
    return newRequest;
  };

  // Update Status (Admin)
  const updateStatus = (requestId, newStatus) => {
    const now = new Date().toISOString();
    setRequests(prev =>
      prev.map(req =>
        req.id === requestId
          ? { ...req, status: newStatus, updatedAt: now }
          : req
      )
    );
  };

  // Update Internal Notes (Admin)
  const updateNotes = (requestId, notes) => {
    const now = new Date().toISOString();
    setRequests(prev =>
      prev.map(req =>
        req.id === requestId
          ? { ...req, internalNotes: notes, updatedAt: now }
          : req
      )
    );
  };

  // Delete Request (Admin)
  const deleteRequest = (requestId) => {
    setRequests(prev => prev.filter(req => req.id !== requestId));
  };

  // Reset to demo data
  const resetDemoData = () => {
    setRequests(INITIAL_REQUESTS);
    localStorage.setItem('nexus_project_requests', JSON.stringify(INITIAL_REQUESTS));
  };

  return (
    <RequestContext.Provider
      value={{
        requests,
        submitProjectRequest,
        updateStatus,
        updateNotes,
        deleteRequest,
        resetDemoData
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export const useRequests = () => {
  const context = useContext(RequestContext);
  if (!context) {
    throw new Error('useRequests must be used within a RequestProvider');
  }
  return context;
};
