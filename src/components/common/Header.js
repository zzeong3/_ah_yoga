import React from "react";
import { NavLink, Link  } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import { faBars } from '@fortawesome/free-solid-svg-icons' 

export default function Header(props) {

    let url = ' ';
    props.type === 'main'
        ? (url = process.env.PUBLIC_URL + '/img/logo_main.png')
        : (url = process.env.PUBLIC_URL + '/img/logo_main.png');

    return(
        <header className={props.type}>
            <div className="inner">
                <h1>
                    <Link to='/'>
                        <img src={url} alt="logo" />
                    </Link>
                </h1>
                <nav>
                    <ul id="gnb">
                        <li>
                            <NavLink to='/' activeClassName="on">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/department' activeClassName="on">Department</NavLink>  
                        </li>
                        <li>
                            <NavLink to='/community' activeClassName="on">Community</NavLink>
                        </li>
                        <li><NavLink to='/gallery' activeClassName="on">Gallery</NavLink></li>
                        <li><NavLink to='/youtube' activeClassName="on">Youtube</NavLink></li>
                        <li><NavLink to='/location' activeClassName="on">Location</NavLink></li>       
                    </ul>
                </nav>
                <div className="until">
                    <NavLink to='/Member' activeClassName="on">Member</NavLink>
                    <NavLink to='/location' activeClassName="on" className="connect">CONNECT<br/>WITH US</NavLink>
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