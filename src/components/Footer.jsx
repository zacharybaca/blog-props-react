import "../Footer.css";

function Footer() {
    return (
            <footer id="footer">
                <div id="image-container">
                    <img src="/src/assets/twitter.png" alt="twitter logo" />
                    <img src="/src/assets/facebook.png" alt="facebook logo" />
                    <img src="/src/assets/github.png" alt="github logo" />
                </div>
               
               <div id="page-info">
                    <p>Copyright ©️ Your Website 2023</p>
               </div>
            </footer>
    )
}

export default Footer;