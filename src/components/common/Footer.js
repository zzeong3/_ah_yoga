import React from "react"
import { NavLink } from "react-router-dom";

export default function Footer() {
    return(
        <footer>
            <div className="inner">
                <div className="footer_cont">
                    <div className="area_footer">
                        <a href='#' className="footer_logo">
                            AH-YOGA
                        </a>
                        
                        <a href='#' className="link_copyright">
                            <span className="thumb_logo">
                                <img src={process.env.PUBLIC_URL + '/img/logo_main.png'} alt="a yoga" />
                            </span>
                            
                            <p className="txt">
                                2022 a-yoga<br />All rights reserved.
                            </p>
                        </a>
                    </div>
                    <div className="area_footer">
                        <ul className="footer_gnb">
                            <li>
                                <NavLink to='/department'>Department</NavLink>  
                            </li>
                            <li>
                                <NavLink to='/community'>Community</NavLink>
                            </li>
                            <li><NavLink to='/gallery'>Gallery</NavLink></li>
                            <li><NavLink to='/youtube'>Youtube</NavLink></li>
                            <li><NavLink to='/location'>Location</NavLink></li>    
                            <li><NavLink to='/member'>Member</NavLink></li>   
                        </ul>
                        <div className="area_link">
                            <a href="tel:+380962722100" className="footer_link">UA: +38 096 272 2100</a>
                            <a href="mailto:mail@halo-lab.com" className="footer_link">mail@halo-lab.com</a>
                        </div>
                    </div>
                    <div className="area_footer">
                        <strong className="tit_footer_sns">MORE LINK</strong>
                        <ul className="list_sns">
                            <li>
                                <a href='https://ms-my.facebook.com/studiogomin/posts/5011198698962527/' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + '/img/ico_sns1.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href='https://shop.29cm.co.kr/brand/11412' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + '/img/ico_sns2.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href='http://ahyoga.co.kr/category/magazine/43/' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + '/img/ico_sns3.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/ah__yoga/' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + '/img/ico_sns4.svg'} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href='http://ahyoga.co.kr/category/shop/42/' target='_blank'>
                                    <img src={process.env.PUBLIC_URL + '/img/ico_sns5.svg'} alt="" />
                                </a>
                            </li>
                        </ul>
                        <div className="area_stroe">
                            <strong>stroe.</strong>
                            <a href="https://smartstore.naver.com/ahyoga/" target='_blank'>
                                https://smartstore.naver.com/ahyoga/
                            </a>
                        </div>

                    </div>
                </div>
                <div className="lines_center">
                    <div className="line_center line1"></div>
                    <div className="line_center line2"></div>
                    <div className="line_center line3"></div>
                </div>
                <div className="line_etc line1"></div>
                <div className="line_etc line2"></div>
                <div className="line_etc line3"></div>
                
            </div>
        </footer>
    )
}