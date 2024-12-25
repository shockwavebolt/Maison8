import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
      <nav className={`navBar ${isOpen ? "navBarExpand" : ""}`}>
        <div className="links">
          <a href="#section1">About</a>
          <a href="#section2">Selected Works</a>
          <a href="#section3">Start a Project</a>
        </div>
        <div className="hamburger-container">
          <button
            type="button"
            onClick={handleToggle}
            className={`hamburger ${isOpen ? "open" : ""}`}
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      <div className={`menu ${isOpen ? "menuOpen" : ""}`}>
        <a href="#section1">About</a>
        <a href="#section2">Selected Works</a>
        <a href="#section3">Start a Project</a>
      </div>
    </div>
  );
}

export default NavBar;
