import React from "react";
import { NavLink, Link} from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import { faBars } from '@fortawesome/free-solid-svg-icons' 

export default function Header(props) {

    return(
        <header>
            <div className="inner">
                <h1>
                    <NavLink to='/'><img src={process.env.PUBLIC_URL + '/img/logo_main.png'} alt="a yoga" /></NavLink>   
                </h1>
                <nav>
                    <ul id="gnb">
                        <li>
                            <NavLink to='/department'>Department</NavLink>  
                        </li>
                        <li>
                            <NavLink to='/community'>Community</NavLink>
                        </li>
                        <li><NavLink to='/gallery'>Gallery</NavLink></li>
                        <li><NavLink to='/youtube'>Youtube</NavLink></li>
                        <li><NavLink to='/location'>Location</NavLink></li>       
                    </ul>
                </nav>
                <div className="until">
                    <NavLink to='/Member'>Member</NavLink>
                    <NavLink to='/location' className="connect">CONNECT<br/>WITH US</NavLink>
                </div>
                <div className="lines">
                    <div className="lines_line line1"></div>
                    <div className="lines_line line2"></div>
                    <div className="lines_line line3"></div>
                </div>

                {/* <FontAwesomeIcon icon={faBars} /> */}
            </div>
        </header>
    )
}