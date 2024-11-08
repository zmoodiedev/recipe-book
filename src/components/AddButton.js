import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import './AddButton.css';


const AddButton = () => {
    return (
        <button className="add"><FontAwesomeIcon icon={faSquarePlus} /></button>
    )
}

export default AddButton;