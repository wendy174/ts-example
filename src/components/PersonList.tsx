import { Name } from './types'; 

interface PersonListProps { 
    names: Name[]
}


export const PersonList = ({names}: PersonListProps) => { 
    return ( 
        <div>
            <h1>list of persons</h1>
            {names.map((name) => { 
                return (
                <h2 key={name.first}>
                    {name.first} {name.last}
                </h2>
                )
            } )}

        </div>
    )
}