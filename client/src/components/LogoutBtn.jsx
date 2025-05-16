import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext'; 
const LogoutBtn = () => {
  const { clearUser } = useContext(TodoContext); 
  return (
    <button
      onClick={() => {
        clearUser();
      }}
      className="px-4 py-2 rounded-md text-base font-medium text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white transition-colors"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;