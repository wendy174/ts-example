import { Person } from './Person'; 
import { PersonListProps } from './types'; 



export const PersonList = ({names}: PersonListProps) => { 
    return ( 
        <div>
            <h1>list of persons</h1>
            {names.map((person) => { 
                return (
                <Person key={person.first} person={person} />
                )
            } )}

        </div>
    )
}