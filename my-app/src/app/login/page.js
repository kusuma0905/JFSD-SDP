"use client"
import React, { useState } from 'react'
import Link from 'next/link'

import './page.css'

function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log(e)
    }

    
  return (

    <div className="login">
        <div className="login-in">
            <div className="login-card">
                <div className="login-card-in">
                    <div className="login-card-in-one">
                        <div className="login-card-in-one-header">
                            <h1>Login to get Started</h1>
                        </div>
                        <div className="login-card-in-one-one">
                            <form className='login-card-in-one-one-in' onSubmit={handleSubmit}>
                                <div className="login-card-in-one-one-one">
                                    <input 
                                        type='text'
                                        name='username'
                                        placeholder='Username'
                                    />
                                </div>
                                <div className="login-card-in-one-one-two">
                                    <input 
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                    />
                                </div>
                                <div className="login-card-in-one-one-three">
                                    <button type='submit'>Login</button>
                                    <Link href='/register' >Not registered? click here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="login-card-in-two">
                        <div className="login-card-in-two-in">
                            <img src='https://infinitylearn.com/surge/wp-content/uploads/2024/08/DALL%C2%B7E-2024-08-06-14.20.23-An-image-celebrating-Handloom-Day-featuring-vibrant-and-traditional-Indian-handloom-textiles.-The-image-includes-a-weaver-working-on-a-loom-colorful-.webp' alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login