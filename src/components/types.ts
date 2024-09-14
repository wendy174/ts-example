// Why difference in structure between PersonProps and PersonListProps? 
// Person renders for a single person first and last name, so it expects a single object 
// names from app.js is an array of objects where each object has the same properties
    // PersonList component is renders list of person, so it expects an array of objects where each object has the same strucutre as a single person 
    // names: { first: string; last: string; }[] syntax means its an array [] of objects ({ first: string; last: string; }). 
    // Person Props does not include [] because it handles only one person at a time 


// reusablity 
export type Name = { 
    first: string; 
    last: string; 
}

    
export interface PersonProps { 
    name: Name
}


// below can do the same above

// export interface PersonListProps { 
//     names: {
//         first: string
//         last: string
//     }[]
// }

export interface StatusProps { 
    // union of string literals 
    status: 'success' | 'loading' | "error"
}