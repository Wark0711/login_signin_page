import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [uname, setUname] = useState('')
    const [mail, setMail] = useState('')
    const [pword, setPword] = useState('')
    const [repeatpword, setRepeatPword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
    })

    async function showData() {
        if (!fname || !lname || !mail || !pword || !uname) {
            console.log("Nothing");
            setError(true)
            return false
        }

        else if (repeatpword !== pword) {
            alert('Check for password similarity')
        }

        else if (pword.length < 6) {
            alert('Keep password length at least 6')
        }
        
        else {
            let result = await fetch('http://localhost:5000/register', {
                method: 'POST',
                body: JSON.stringify({
                    firstName: fname,
                    lastName: lname,
                    email: mail,
                    username: uname,
                    password: pword
                }),
                headers: { 'Content-Type': 'application/json' }
            })
            result = await result.json()
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
        }
    }

    return (
        <div className='Signin'>
            <h2>Welcome, Sign in to create New Account</h2>
            <div>
                {/* <label htmlFor="name">Enter First Name: </label> */}
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder='Enter First Name' />
                <div id='span'>
                    {error && !fname && <span>Enter valid first name</span>}
                </div>
            </div>
            <div>
                {/* <label htmlFor="name">Enter Last Name: </label> */}
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Enter Last Name' />
                <div id='span'>
                    {error && !lname && <span>Enter valid last name</span>}
                </div>
            </div>
            <div>
                {/* <label htmlFor="mail">Enter Email ID: </label> */}
                <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Enter Email' />
                <div id='span'>
                    {error && !mail && <span>Enter valid email</span>}
                </div>
            </div>
            <div>
                {/* <label htmlFor="name">Enter Username: </label> */}
                <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} placeholder='Enter Username' />
                <div id='span'>
                    {error && !uname && <span>Enter valid username</span>}
                </div>
            </div>
            <div>
                {/* <label htmlFor="pword">Enter Password: </label> */}
                <input type="password" value={pword} onChange={(e) => setPword(e.target.value)} placeholder='Enter Password' />
                <div id='span'>
                    {error && !pword && <span>Enter valid password</span>}
                </div>
            </div>
            <div>
                {/* <label htmlFor="pword">Repeat Password: </label> */}
                <input type="password" value={repeatpword} onChange={(e) => setRepeatPword(e.target.value)} placeholder='Repeat Password' />
                <div id='span'>
                    {error && !repeatpword && <span>Repeat valid password</span>}
                </div>
            </div>
            <div className="sign-btn">
                <button onClick={() => showData()}>Sign Up</button>
            </div>
        </div>
    )
}

export default Signin