import React from "react"
import { NavLink, Link  } from "react-router-dom";

export default function Footer(props) {
    return(
        <footer className={props.type}>
            <div className="inner">
                <div className="area_footer">
                    <strong>

                    </strong>
                    <Link to=''>
                        <img alt=""/>
                        <p>
                            2022 a-yoga<br />All rights reserved
                        </p>
                    </Link>
                </div>
                <div className="area_footer">
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
                    <div className="area_link">
                        <a href="tel:+380962722100" class="footer_link">UA: +38 096 272 2100</a>
                        <a href="mailto:mail@halo-lab.com" class="footer_link">mail@halo-lab.com</a>
                    </div>
                </div>
                <div className="area_footer">
                    <input type="text" placeholder="Email address"/>
                    <div className="social_link">

                    </div>
                </div>
                
                
            </div>
        </footer>
    )
}