import React, { createContext, useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const accessToken = localStorage.getItem("token");
            
            if (!accessToken) {
                setLoading(false);
                return;
            }

            try {
                const response = await axiosInstance.get('/auth/profile');
                setUser(response.data);
                setIsLoggedIn(true);
                if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }
                console.log("User data:", response.data);
            } catch (error) {
                console.error("User not authenticated:", error);
                clearUser();
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const clearUser = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("token");
    };

    const loginUser = (userData, token) => {
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem("token", token);
    };

    const value = {
        user,
        isLoggedIn,
        loading,
        setUser,
        clearUser,
        loginUser
    };

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;