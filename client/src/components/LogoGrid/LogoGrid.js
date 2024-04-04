import React from 'react';
import './LogoGrid.css';

const LogoGrid = () => {
    return (
        <div className="logo-grid-container">
            <div className="logo-grid-content">
                <div className="logo-grid-heading">
                    <h3 className="logo-grid-title">
                        Who's using Float UI?
                    </h3>
                    <p className="logo-grid-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim nibh nisl, vel egestas magna rhoncus at. Nunc elementum efficitur tortor in laoreet.
                    </p>
                </div>
                <div className="logo-grid-logos">
                    <ul className="logo-grid-grid">
                        {/* LOGO 1 */}
                        <li>
                            <img src="logo1.png" alt="Logo 1" />
                        </li>

                        {/* LOGO 2 */}
                        <li>
                            <img src="logo2.png" alt="Logo 2" />
                        </li>

                        {/* LOGO 3 */}
                        <li>
                            <img src="logo3.png" alt="Logo 3" />
                        </li>

                        {/* LOGO 4 */}
                        <li>
                            <img src="logo4.png" alt="Logo 4" />
                        </li>

                        {/* LOGO 5 */}
                        <li>
                            <img src="logo5.png" alt="Logo 5" />
                        </li>

                        {/* LOGO 6 */}
                        <li>
                            <img src="logo6.png" alt="Logo 6" />
                        </li>

                        {/* LOGO 7 */}
                        <li>
                            <img src="logo7.png" alt="Logo 7" />
                        </li>

                        {/* LOGO 8 */}
                        <li>
                            <img src="logo8.png" alt="Logo 8" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LogoGrid;
