// Example of useState types

import { useState } from 'react'; 
export const Login = () => { 

    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false); // type inference is ok in state 

    const handleLogin = () => {setIsLoggedIn(true)}; 
    const handleLogout = () => {setIsLoggedIn(false)}; 


    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User is {isLoggedIn ? 'Logged in' : 'Logged out'}</p>

        </div>
    )
}