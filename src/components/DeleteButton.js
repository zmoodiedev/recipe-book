import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './DeleteButton.css';


const AddButton = ({ action }) => {
    return (
        <button onClick={action} className="delete" title="Delete"><FontAwesomeIcon icon={faTrashCan} /></button>
    )
}

export default AddButton;