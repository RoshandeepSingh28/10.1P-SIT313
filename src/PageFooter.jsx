function Footer(){
    return(
        <div className="footer-bg">
        <footer>
            <div>
                <h2>Explore</h2>
                <ul>
                    <li>Home</li>
                    <li>Questions</li>
                    <li>Articles</li>
                    <li>Tutorials</li>
                </ul>
            </div>
            <div>
                <h2>Support</h2>
                <ul>
                    <li>FAQs</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h2>Stay connected</h2>
                <ul className="footer-img">
                    <li><img src="./images/instalogo.png" alt="Instagram Logo" /></li>
                    <li><img src="./images/facebooklogo.jpeg" alt="Facebook Logo" /></li>
                    <li><img src="./images/twitterlogo.jpeg" alt="Twitter Logo" /></li>
                </ul>
            </div>
        </footer>
        <h2>DEV@Deakin 2024</h2>
        <div className="footer-bg-last"> 
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Code of Conduct</p>
        </div>
        </div>
    )
}

export default Footer