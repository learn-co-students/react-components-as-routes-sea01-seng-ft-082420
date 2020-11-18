import React from 'react';

const Login = () => {
    return (
        <form>
            <h1>Login</h1>
            <>
                <input type="text" name="username" placeholder="Username" />
                <label htmlFor="username">Username</label>
            </>
            <>
                <input type="password" name="password" placeholder="Password" />
                 <label htmlFor="password">Password</label>
            </>
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login;