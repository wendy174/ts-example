// Example of optional props 
    // make a prop optional with ? in interface meaning you don't need to pass it in
// Example of default value props 
    // age has default value of 30 


interface Greet2Props { 
    name: string; 
    age?: number; 
    isAdult: boolean; 
 }

export const Greet2 = ({name, age=30, isAdult}: Greet2Props) => { 
    
    return ( 
        <div>
            <h2>Greet2 example of optional props with age not passed in:</h2>
            <h2>Welcome {name}</h2>
            <h2>Age: {age}</h2>
            {isAdult && <p>This is visible</p>}
        </div>
    )
}