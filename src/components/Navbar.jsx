import "../Navbar.css";

function Navbar() {
    return (
        <div id="nav-bar-container">
            <a className="nav-bar-link" href="index.html">Start Bootstrap</a>
            <nav id="nav-bar-links-container">
                <a className="nav-bar-links" href="index.html">Home</a>
                <a className="nav-bar-links" href="index.html">About</a>
                <a className="nav-bar-links" href="index.html">Sample Post</a>
                <a className="nav-bar-links" href="index.html">Contact</a>
            </nav>
        </div>
    )
}

export default Navbar;