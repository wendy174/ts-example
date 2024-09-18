// Example of using useState when initial value type will differ from future value 

import { useState } from 'react'; 

interface AuthUser { 
    name: string; 
    email: string; 
}

export const User = () => { 

    const [user, setUser] = useState<AuthUser | null>(null) 
    // user is either null or AuthUser
    
    const handleLogin = () => {
        useState({
            name: 'Wendy', 
            email: 'miz@gmail.com'
    })
    }; 
    const handleLogout = () => {setUser(null)}; 

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}