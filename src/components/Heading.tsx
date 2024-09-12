// Example of children props 
    // allows you to pass content between the opening and closing tags of a component in (app.js)

interface HeadingProps { 
    children: string; 
}


export const Heading = ({children}: HeadingProps) => { 
    return ( 
        <h2>{children}</h2>
    )
}