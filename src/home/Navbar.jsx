import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <nav>
                <div className="logo-container">
                    {/* logo kamu */}
                </div>

                <div className="menu-container">
                    <ul className={open ? "active" : ""}>
                        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                        <li><a href="#app" onClick={() => setOpen(false)}>Project</a></li>
                        <li><a href="#service" onClick={() => setOpen(false)}>Service</a></li>
                        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
                    </ul>

                    <div className="mobile-menu" onClick={() => setOpen(!open)}>
                        <div className="bar-1"></div>
                        <div className="bar-2"></div>
                        <div className="bar-3"></div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;