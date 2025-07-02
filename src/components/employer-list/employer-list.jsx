import EmployersListItem from '../components/employers-list-item/employers-list-item';
import './employer-list.css';


const EmpolyersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem/>
            <EmployersListItem/>
            <EmployersListItem/>
        </ul>
    )
}

export default EmpolyersList;