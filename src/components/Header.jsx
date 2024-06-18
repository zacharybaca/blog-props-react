import "../Header.css";
import Navbar from "./Navbar";

function Header() {
    return (
        <div id="nav-header-container">
            <div id="nav-container">
                <Navbar />
            </div>
        <div id="header-container">
            <header>
                <h1 id="heading-text">Clean Blog</h1>
                <h4 id="header-subtext">A Blog Theme by Start Bootstrap</h4>
            </header>
        </div>
        </div>
    )
}

export default Header;