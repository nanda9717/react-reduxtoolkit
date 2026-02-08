// withAuth.js
import React from 'react';
import { Navigate } from 'react-router-dom'; // Use Navigate for redirection in functional components with React Router v6

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    // Logic to check if user is authenticated (e.g., check localStorage for a token)
    const isAuthenticated = !!localStorage.getItem('authToken'); 

    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/login" replace />;
    }

    // If authenticated, render the original component and pass all props through
    return <WrappedComponent {...props} />;
  };

  // Naming the new component for easier debugging in React DevTools
  AuthenticatedComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name})`;

  return AuthenticatedComponent;
};

export default withAuth;
