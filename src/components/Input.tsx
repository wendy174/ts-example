// onChange example with input 
    // interface normally needs two properties: value, handleChange event 
    // React.ChangeEvent<HTMLInputElement> indicates the type we expect
    // React.ChangeEvent needs to be specified in component and in app.js 

interface InputProps { 
    value: string; 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({value, handleChange}: InputProps) => { 
    return ( 
        <input type='text' value={value} onChange={handleChange}/>
    )
}