import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form action="">
                    <div className='input-group'>
                        <label htmlFor="email">email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id='email' name='email' placeholder='Enter email address' className='border-2' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="email" id='email' name='email' placeholder='Enter email address' className='border-2' />
                    </div>
                    <button className='cursor-pointer bg-amber-300 p-2 rounded-xl'>Login</button>
                </form>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </main>
    )
}

export default Login