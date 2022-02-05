import React from "react";
import './Login.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Context as AuthContext} from '../../Context/AuthContext';
 
function Login() {
    const {setToken} = React.useContext(AuthContext)

    const handleSubmit = evt => {
        evt.preventDefault()

        const {user_mail, user_password} =  evt.target.elements;

        fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: user_mail.value.trim(),
                password: user_password.value.trim()
            })
        })
        .then(response => response.json())
        .then(data => setToken(data?.token))
    }
    
    return <div className="login">
        <div className="login--inner">
            <form className="login-form" onSubmit={handleSubmit}>
                <TextField name="user_mail" type={"email"} label="Email" variant="outlined" sx={{ mb: 3 }} defaultValue={"eve.holt@reqres.in"} />

                <TextField name="user_password" type={"password"} label="Password" variant="outlined" sx={{ mb: 3 }} defaultValue={"cityslicka"} />

                <Button type="submit" variant="contained">Log in</Button>
            </form>
        </div>
    </div>
}

export default Login;