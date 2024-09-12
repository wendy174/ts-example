// Click event 
    // button accepts click event as prop 

interface ButtonProps { 
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void // no parameters and returns nothing 
    // capture event with type React.MouseEvent
}


export const Button = ({handleClick}: ButtonProps) => { 
    return <button onClick={handleClick}>Click</button> 
}