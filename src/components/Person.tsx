import { PersonProps } from './types'; 


// this component receives an object called person as a prop which contains first and last properties 

// Define shape of props the Person component expects


// Person component receives person prop from App
export const Person = ({name}: PersonProps) => { 
    // Destructure person object to extract first and last names 
        // can also do this in the parent component 
    const {first, last} = name; 
    return ( 
        <div>
            {first} {last}
        </div>
    ) 
}