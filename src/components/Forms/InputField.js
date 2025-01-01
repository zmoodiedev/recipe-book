import './InputField.css';

const InputField = ( { fieldLabel, id, name, value, onChange } ) => {

    return (
        <>
            <label htmlFor={name}>{fieldLabel}</label>
            <input
                type="text"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default InputField;