"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import './page.css';

const Registration = () => {
    

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        gender: '',
        branch: '',
        year: '',
        email: '',
        address: '',
        residence: '',
        phone: '',
        profile_pic: 'NA',
      });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    console.log('formData:', formData)



  return (
    
      <div className="register">
        <div className="register-in">
            <div className="register-card">
                <div className="register-card-in">
                    <div className="register-card-in-one">
                        <div className="register-card-in-one-header">
                            <h1>Signup for the portal</h1>
                        </div>
                        <div className="register-card-in-one-one">
                            <div className="register-card-in-one-one-one">
                                <input 
                                    className='register-card-in-one-one-one-input'
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="register-card-in-one-one-two">
                                <input 
                                    className='register-card-in-one-one-two-input'
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="register-card-in-one-two">
                            <div className="register-card-in-one-two-one">
                                <input 
                                    className='register-card-in-one-two-one-input'
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="register-card-in-one-two-two">
                                <input 
                                className='register-card-in-one-two-two-input'
                                type="text"
                                name="email"
                                placeholder='Email'
                                />

                            </div>
                        </div>

                        <div className="register-card-in-one-three">
                            <div className="register-card-in-one-three-one">
                                <select
                                    className='register-card-in-one-three-one-input'
                                    name="gender"
                                >

                                    <option value="">Select Gender</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>

                                </select>
                            </div>
                            <div className="register-card-in-one-three-three">
                            <input 
                                    className='register-card-in-one-four-two-input'
                                    type="text"
                                    name="phone"
                                    placeholder="Mobile Number"
                                    required
                                />
                            </div>
                        </div>

                        <div className="register-card-in-one-four">
                    

                    
                            
                        </div>

                        <div className="register-card-in-one-six">
                            <div className="register-card-in-one-six-one">
                                <select
                                        className='register-card-in-one-six-one-input'
                                        name="address"
                                        required
                                    >
                                    <option value="">Select Your State / Union Territory</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option> 
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttarakhand">Uttarakhand</option> 
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadra and Nagar Haveli and Daman & Diu">Dadra and Nagar Haveli and Daman & Diu</option>
                                    <option value="The Government of NCT of Delhi">The Government of NCT of Delhi</option>
                                    <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                    <option value="Ladakh">Ladakh</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    </select>
                            </div>
                            <div className="register-card-in-one-six-two">
                        

                            </div>
                        
                        </div>

                        <div className="register-card-in-one-five">
                            <button className='register-card-in-one-five-button'>Register</button>
                            <Link className='register-card-in-one-five-link' href='/login' >Login instead</Link>
                        </div>
                    </div>
                    <div className="register-card-in-two">
                        <div className="register-card-in-two-in">
                        <img src='https://infinitylearn.com/surge/wp-content/uploads/2024/08/DALL%C2%B7E-2024-08-06-14.20.23-An-image-celebrating-Handloom-Day-featuring-vibrant-and-traditional-Indian-handloom-textiles.-The-image-includes-a-weaver-working-on-a-loom-colorful-.webp' alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
  )
}

export default Registration