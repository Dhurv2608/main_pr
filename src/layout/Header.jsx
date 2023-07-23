import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className='  container-fluid navbar-expand-lg navbar-light bg-light'>
                <header className='zindex-1 header index-header d-flex mx-auto'>
                    <Link to='/' className=' ' >
                        <img src='image/logo.webp' className='' />
                    </Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='d-flex mb-2 mb-lg-0 lg-d-block pb-2'>
                            <li className='nav-item'>
                                <Link to='/Designer Cakes' className='hi mx-2 nav-link ' >
                                    Designer Cakes
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Birthday Cakes' className='hi mx-2 nav-link' >
                                    Birthday cakes
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Occasional Cakes' className='hi mx-2 nav-link' >
                                    Occasional Cakes
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Pastry Cakes' className='hi mx-2 nav-link' >
                                    Pastry Cakes
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/New Ins' className='hi animate-charcter mx-2 nav-link' >
                                    New Ins
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='d-flex ms-5 header_icon'>
                        <Link to='/cart'>
                            <i class="fa-solid fa-cart-plus mx-2 " ></i>
                        </Link>
                        <i class="fa-regular fa-heart  mx-2 "> </i>
                        <i class="fa-regular fa-user  mx-2"></i>
                    </div>
                </header>
            </div>






        </>
    )
}

export default Header