import React from 'react';
import './Footer.css';
import data from '../data';

const Footer = props => {
    return (
        <footer className="mac_footer">
            <div className="container">
                <div className="foot_menu-block">
                    <ul className="footer_menu">
                        {data.map((item, index)=> {
                            return (
                                <li key={index}>
                                    <a href="" className="footer_item" onClick={(e) => props.opened(e, item.id)}>
                                        <img src={item.img} alt={item.title} className="reflect"/>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="footer_menu footer_social">
                        <li>
                            <a href="#" className="footer_item inst">
                                <img src="img/instagram-icon.png" alt="" className="reflect"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer_item vk">
                                <img src="img/vk-icon.png" alt="" className="reflect"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer_item fb">
                                <img src="img/fb.png" alt="" className="reflect"/>
                            </a>
                        </li>
                    </ul>
                    <div className="add_white_radial"></div>
                    {/*не трогать!!!! это ебучая белая полоска под серой панелью*/}
                </div>
            </div>
            <div className="footer_border"></div>
        </footer>
    );
};

export default Footer;