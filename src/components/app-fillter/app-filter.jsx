import './app-fillter.css';

const AppFillter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Все сотрудники       
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    На повышение        
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    З/П боьше 100$       
            </button>
        </div>
    )
}

export default AppFillter;