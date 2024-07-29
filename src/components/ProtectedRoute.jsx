import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const ProtectedRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>Loading...</div>; // Puedes mostrar un spinner de carga aquí
    }

    if (!user) {
        return <Navigate to="/signin" replace />;
    }

    return children;
};

export default ProtectedRoute;
