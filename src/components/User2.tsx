// Type assertion example 
import { useState } from 'react'; 

interface AuthUser2 { 
    name: string; 
    email: string; 
}

export const User2 = () => { 

    const [user, setUser] = useState<AuthUser2>({} as AuthUser2) 
    // user is either null or AuthUser
    
    const handleLogin = () => {
        useState({
            name: 'Wendy', 
            email: 'miz@gmail.com'
    })
    }; 

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>Example of type assertion</div>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}