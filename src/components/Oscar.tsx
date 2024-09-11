//example of passing component as children props 

interface OscarProps { 
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => { 
    return ( 
        <div>{props.children}</div>
    )
}