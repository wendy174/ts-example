import { PersonProps } from './types'; 

// This component receives an object called person as a prop which contains first and last properties 

// Interface defines shape of props the Person component expects

// Person component receives person prop from App
export const Person = ({name}: PersonProps) => { 
    // Destructure person object to extract first and last names 

    const {first, last} = name; 
    return ( 
        <div>
            {first} {last}
        </div>
    ) 
}