import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [uname, setUname] = useState('')
    const [pword, setPword] = useState('')
    const navigate = useNavigate()

    async function handleLogin() {
        let result = await fetch('http://localhost:5000/login', {
            method: "POST",
            body: JSON.stringify({
                username: uname, 
                password: pword}),
            headers: {
                'Content-Type' : "application/json"
            }
        })
        result = await result.json()

        if (result.username) {
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
        } else {
            console.log(result);
            alert('Enter Correct Details')
        }
    }

    return (
        <div className='Login'>
            <h2>Login to your Account</h2>
            <div>
                {/* <label htmlFor="name">Enter Username: </label> */}
                <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} placeholder='Enter Username' />
            </div>
            <div>
                {/* <label htmlFor="pword">Enter Password: </label> */}
                <input type="password" value={pword} onChange={(e) => setPword(e.target.value)} placeholder='Enter Password' />
            </div>
            <div className="log-btn">
                <button onClick={() => handleLogin()}>Login</button>
            </div>
        </div>
    )
}

export default Login