import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import './AddButton.css';


const AddButton = ({ action }) => {
    return (
        <button onClick={action} className="add" title="Add"><FontAwesomeIcon icon={faSquarePlus} /></button>
    )
}

export default AddButton;