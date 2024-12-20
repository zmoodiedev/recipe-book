import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import './AddButton.css';


const AddButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="add" title="Add"><FontAwesomeIcon icon={faSquarePlus} /></button>
    )
}

export default AddButton;