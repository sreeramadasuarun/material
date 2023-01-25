import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../login/auth'


const Login = () => {

    const { login } = useAuth()
    const [name, setname] = useState("")
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <h1>Login</h1>

            <label>Username</label>

            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder='enter username'
            />
            <button onClick={() => {
                login(name);
                navigate("/Movies", { replace: true })
            }}>Login</button>
        </React.Fragment>
    )
}


export default Login;