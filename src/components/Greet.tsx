
// Passing in props 
    // Define structure of props in the component that will recieve it 
        // You can either use interface or type to define structure 
        // interface --> for more complex apps 
        // type --> simple apps 
    // 
interface GreetProps { 
   name: string; 
   age: number; 
   isAdult: boolean; 
}

export const Greet = ({name, age, isAdult}: GreetProps) => { 
    return ( 
        <div>
            <h2>Welcome {name}</h2>
            <h2>Age: {age}</h2>
            {isAdult && <p>This is visible</p>}
        </div>
    )
}