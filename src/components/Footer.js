import "./Footer.css";

const Footer = () => {

    const currentYear = () => { 
        var dateobj = new Date();  
        var dateObject = dateobj.getFullYear(); 
        
        // Printing current year  
        return dateObject; 
    } 

    return (
        <footer>
            <div className="footer-content container">
            © Zach Moodie <span id="currentYear">{currentYear()}</span>
            </div>
        </footer>
    )
}

export default Footer;