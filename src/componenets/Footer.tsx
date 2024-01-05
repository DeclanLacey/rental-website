import "../styles/Footer.css"

function Footer() {



    return (
        <div>
            <footer className="footer">
                <div className="footer-inner-container">
                    <div>
                        <p className="bold-footer-text"> Lacey Properties © 2024 </p>
                        <p> Declan Lacey - Owner/Property Manager </p>
                    </div>
                    <div>
                        <p className="bold-footer-text"> Contact Us:</p>
                        <a className="email-link" href="mailto:lacey.properties.iowa@gmail.com"> Email: lacey.properties.iowa@gmail.com </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer