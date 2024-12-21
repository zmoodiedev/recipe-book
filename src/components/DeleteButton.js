import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './DeleteButton.css';


const AddButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="delete" title="Delete"><FontAwesomeIcon icon={faTrashCan} /></button>
    )
}

export default AddButton;