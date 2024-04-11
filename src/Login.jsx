import React, { useState } from "react";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    function handleUsernameInputChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordInputChange(e) {
        setPassword(e.target.value);
    }

    function handleLoginButton() {

        if (username.length > 3  && password.length > 3) {
            setLoggedIn(true);
        } else {
            alert("Invalid username or password!");
        }
    }

    return (
        <>
            {loggedIn ? (
                <p>You are logged in!</p>
            ) : (
                <>
                    <input onChange={handleUsernameInputChange} type="text" name="username" value={username} placeholder="Username" />
                    <input onChange={handlePasswordInputChange} type="password" name="password" value={password} placeholder="Password" />
                    <button onClick={handleLoginButton} disabled={!username || !password}>Login</button>
                </>
            )}
        </>
    );
}
