import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', street: '', city: '',
        country: 'India', state: '', postcode: '', password: '', confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('https://core.mainotp.in/includes/api.php',
                new URLSearchParams({
                    action: 'AddClient',
                    username: 'M7RGUVuHF8tdbOrqactl6hanAARQhai3',
                    password: 'U1ZExMaxKOmz0Pi2DcmGYunowkDnggNL',
                    firstname: formData.firstName,
                    lastname: formData.lastName,
                    email: formData.email,
                    address1: formData.street,
                    city: formData.city,
                    state: formData.state,
                    postcode: formData.postcode,
                    country: formData.country,
                    phonenumber: formData.phone,
                    password2: formData.password,
                    clientip: '1.2.3.4',
                    responsetype: 'json'
                }),
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }
            );

            if (response.data.success) {
                setSuccess('Registration successful!');
            } else {
                setError(response.data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl m-[50px]">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && <p className="text-green-500 text-center">{success}</p>}
                <form onSubmit={handleRegister}>
            {/* <!-- Personal Information --> */}
            <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
                            <label className="block text-gray-700 text-sm font-bold">First Name *</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold">Last Name *</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                        </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
                            <label className="block text-gray-700 text-sm font-bold">Email Address *</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold">Phone Number *</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                        </div>
            </div>
            
            {/* <!-- Billing Address --> */}
            <h3 class="text-lg font-semibold text-gray-800 mt-6">Billing Address</h3>
            <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
                            <label className="block text-gray-700 text-sm font-bold">Street Address *</label>
                            <input type="text" name="street" value={formData.street} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold">City *</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                        </div>
            </div>
            
            <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <label class="block text-gray-700 text-sm font-bold">Country *</label>
                    <select class="w-full p-2 border border-gray-300 rounded mt-1">
                        <option>India</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold">State *</label>
                    <select class="w-full p-2 border border-gray-300 rounded mt-1">
                        <option>Gujarat</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold">Postcode *</label>
                    <input type="text" class="w-full p-2 border border-gray-300 rounded mt-1" required />
                </div>
            </div>
            
            {/* <!-- Account Security --> */}
            <h3 class="text-lg font-semibold text-gray-800 mt-6">Account Security</h3>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label class="block text-gray-700 text-sm font-bold">Password *</label>
                    <input type="password" class="w-full p-2 border border-gray-300 rounded mt-1" required />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold">Confirm Password *</label>
                    <input type="password" class="w-full p-2 border border-gray-300 rounded mt-1" required />
                </div>
            </div>
            
            <div class="mb-4">
                <button type="button" class="bg-gray-200 text-gray-700 py-2 px-4 rounded">Generate Password</button>
            </div>
            
            {/* <!-- Mailing List --> */}
            <h3 class="text-lg font-semibold text-gray-800 mt-6">Join our mailing list</h3>
            <div class="mb-6 flex items-center">
                <span class="mr-4">Receive Emails:</span>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                </label>
            </div>
            
            <button class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Register</button>
            
            <p class="text-center text-sm text-gray-600 mt-4">Already registered with us? <a href="#" class="text-green-500">Sign In</a> or <a href="#" class="text-green-500">Reset Password</a></p>
        </form>
    </div>
</div>
  )
}

export default Register;