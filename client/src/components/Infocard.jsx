import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const InfoCard = ({ name }) => {
  const { clearUser } = useContext(TodoContext);

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700">Hi, {name}</span>
     
    </div>
  );
};

export default InfoCard;