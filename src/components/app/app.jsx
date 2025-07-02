
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmpolyersList from '../../employer-list/employer-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import AppFillter from '../app-fillter/app-filter';
import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFillter/>
            </div>
            <EmpolyersList/>
            <EmployersAddForm/>
            
            
        </div>
    );
}

export default App; 