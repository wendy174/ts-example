// Example of passing component as children props 

interface OscarProps { 
    children: React.ReactNode
}

export const Oscar = ({children}: OscarProps) => { 
    return ( 
        <div>{children}</div>
    )
}