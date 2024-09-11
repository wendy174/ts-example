// Example of children props 
    // allows you to pass content between the opening and closing tags of a component in (app.js)

interface HeadingProps { 
    children: string; 
}


export const Heading = (props: HeadingProps) => { 
    return ( 
        <h2>{props.children}</h2>
    )
}