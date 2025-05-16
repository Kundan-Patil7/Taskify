import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authStyles } from '../styles/auth';
import log from '../assets/log.png';
import pattern from '../assets/bg.jpg';
import axiosInstance from '../utils/axiosInstance';
import toast from 'react-hot-toast';
import { TodoContext } from '../context/Todocontext';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { loginUser } = useContext(TodoContext);

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate form
        const newErrors = {};
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const response = await axiosInstance.post('/auth/login', formData);
            loginUser(response.data.user, response.data.token);
            toast.success('Login successful!');
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
            setErrors({ submit: errorMessage });
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center p-4 bg-gray-50'>
            {/* Background pattern for large screens only */}
            <div className='hidden md:block fixed inset-0 z-0'>
                <img
                    src={pattern}
                    alt="background"
                    className='w-full h-full object-cover opacity-20'
                />
            </div>

            {/* Form container */}
            <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-200 z-10'>
                <div className='flex justify-center mb-6'>
                    <img className='h-16' src={log} alt="Logo" />
                </div>

                <h1 className='text-2xl font-bold text-center mb-6'>Login</h1>

                {errors.submit && (
                    <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
                        {errors.submit}
                    </div>
                )}

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`${authStyles.input} ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Email"
                        />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`${authStyles.input} ${errors.password ? 'border-red-500' : ''}`}
                            placeholder="Password"
                        />
                        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className={`${authStyles.button} ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className='text-center text-sm text-gray-600 mt-4'>
                    Don't have an account?{' '}
                    <NavLink to="/signup" className={authStyles.link}>
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;