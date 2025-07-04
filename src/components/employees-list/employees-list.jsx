import EmployersListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';


const EmpolyersList = ({data, onDelete, onToggleProp}) => {

        const elements = data.map(item => {
            const {id, ...itemProps} = item
            return (
                <EmployersListItem 
                    key={id} 
                    {...itemProps} 
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle') )}/>
            )
        })
        console.log(elements);
        
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmpolyersList;