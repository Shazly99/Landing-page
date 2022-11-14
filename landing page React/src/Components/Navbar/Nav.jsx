import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    // scroll smooth
    const [navbar, setNavbar] = useState(true);
    const changeNavbar = () => {
        (window.scrollY >= 60) ? setNavbar(false) : setNavbar(true);

    }
    window.addEventListener('scroll', changeNavbar);

    // add new class 
    const [btnState, setBtnState] = useState(false);
    const [indexBtn, setIndex] = useState(false);
    function handelClick(i, nav) {
        // console.log(nav);
        // if (nav ==="home") {
        //     setBtnState(true)
        // }
        setIndex(i);
        setBtnState(true)
    }
    let activeClass = btnState ? 'active' : null;
    return (
        <>
            <nav style={{ zIndex: 888 }} className={navbar ? 'navbar-Scroll navbar navbar-expand-sm' : ' navbar navbar-expand-sm'} >
                <div className="container">
                    <Link className="navbar-brand" to={''}>START REACT</Link>
                    <button className="nav__btn navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        MENU<i class="navbar-icon fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse d-sm-none" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            {
                                ['home', 'portfolio', 'about', 'contact'].map((nav, index) => (

                                    <li className="nav-item" key={index}>
                                        <Link
                                            onClick={() => handelClick(index, nav)}
                                            className={`nav-link ${indexBtn === index && activeClass}`}
                                            to={nav == 'home' ? '' : nav} 
                                            aria-current="page"
                                            >
                                            <span className='active_hover'>{nav.toLocaleUpperCase()}</span>
                                            <span className="visually-hidden">(current)</span>
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav