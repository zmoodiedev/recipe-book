import './GoogleButton.css';

const GoogleButton = ({ onClick }) => {


    return (
        <button className="gsi-material-button" onClick={onClick}>
        <div className="gsi-material-button-state"></div>
        <div className="gsi-material-button-content-wrapper">
            <div className="gsi-material-button-icon">
            <img src={require('../assets/images/google.svg').default} alt="Google" />
            </div>
            <span className="gsi-material-button-contents">Sign in with Google</span>
            <span style={{ display: "none" }}>Sign in with Google</span>
        </div>
        </button>
    )
}

export default GoogleButton;