// this component receives an object called person as a prop which contains first and last properties 

// Define shape of props the Person component expects
interface PersonProps { 
    person: { 
        first: string; 
        last: string; 
    }
}

// Person component receives person prop from App
export const Person = ({person}: PersonProps) => { 
    // Destructure person object to extract first and last names 
    const {first, last} = person; 
    return ( 
        <div>
            {first} {last}
        </div>
    ) 
}