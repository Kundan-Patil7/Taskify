import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import axiosInstance from '../utils/axiosInstance';
import toast from 'react-hot-toast';

const AllTodo = ({ userId }) => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axiosInstance.get(`/todo?userId=${userId}`);
        if (response.status === 200) {
          setTodos(response.data);
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch todos');
        toast.error(err.message || 'Failed to fetch todos');
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`/todo/${id}`);
      if (response.status === 200) {
        setTodos((prev) => prev.filter((todo) => todo._id !== id));
        toast.success('Todo deleted successfully!');
      }
    } catch (err) {
      toast.error(err.message || 'Failed to delete todo');
    }
  };

  const handleComplete = async (id) => {
    try {
      const response = await axiosInstance.put(`/todo/${id}`, { isCompleted: true });
      if (response.status === 200) {
        setTodos((prev) =>
          prev.map((todo) => (todo._id === id ? { ...todo, isCompleted: true } : todo))
        );
        toast.success('Todo marked as complete!');
      }
    } catch (err) {
      toast.error(err.message || 'Failed to update todo');
    }
  };

  const navigateToEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center py-8">Error: {error}</p>;
  }

  if (todos.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 mb-4">No todos found. Create one!</p>
        <button
          onClick={() => navigate('/create')}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Create Todo
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">Your Todos</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className={`flex justify-between items-center p-4 rounded-md shadow-sm ${
              todo.isCompleted ? 'bg-green-100' : 'bg-gray-100'
            }`}
          >
            <div className="flex-1">
              <h3 className={`font-semibold text-lg ${todo.isCompleted ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                {todo.title}
              </h3>
              <p className={`text-sm ${todo.isCompleted ? 'text-gray-400' : 'text-gray-500'}`}>
                {todo.description}
              </p>
              <div className="flex items-center mt-2 space-x-4">
                <span className="text-sm text-gray-500">
                  Due: {new Date(todo.dueDate).toLocaleDateString()}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  todo.priority === 'high' ? 'bg-red-100 text-red-800' :
                  todo.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {todo.priority} priority
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {!todo.isCompleted && (
                <button
                  onClick={() => handleComplete(todo._id)}
                  className="p-2 text-green-500 hover:text-green-700 hover:bg-green-50 rounded-full"
                  title="Mark complete"
                >
                  <FaCheck size={18} />
                </button>
              )}
              <button
                onClick={() => navigateToEdit(todo._id)}
                className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-full"
                title="Edit"
              >
                <FaEdit size={18} />
              </button>
              <button
                onClick={() => handleDelete(todo._id)}
                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
                title="Delete"
              >
                <FaTrash size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTodo;