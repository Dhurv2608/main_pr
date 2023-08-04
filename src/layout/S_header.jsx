import React from 'react'
import { Link } from 'react-router-dom'

const S_header = () => {
    return (
        <>
            <div className='  container-fluid bg_color'>
                <header className='zindex-1 header index-header S_header d-flex mx-auto'>
                <Link to='/' className='hi mx-2' >
                <img src='image/logo.webp' className='logo' />
                                </Link>

                    <div className='ms-auto '>
                        <ul className='d-flex'>
                            <li>
                                <Link to='/Designer Cakes' className='hi mx-2' >
                                Designer Cakes
                                </Link>
                            </li>
                            <li>
                                <Link to='/Birthday Cakes' className='hi mx-2' >
                                    Birthday cakes
                                </Link>
                            </li>
                            <li>
                                <Link to='/Occasional Cakes' className='hi mx-2' >
                                    Occasional Cakes
                                </Link>
                            </li>
                            <li>
                                <Link to='/Pastry Cakes' className='hi mx-2' >
                                    Pastry Cakes
                                </Link>
                            </li>
                            <li>
                                <Link to='/New Ins' className='hi animate-charcter mx-2' >
                                    New Ins
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='d-flex  ms-5'>
                    <Link to='/cart'>
                            <i class="fa-solid fa-cart-plus mx-2  text-dark" ></i>
                        </Link>
                        <Link to='/heart'>
                        <i class="fa-regular fa-heart  mx-2  text-dark"> </i>
                        </Link>
                        <Link to='/user'>
                        <i class="fa-regular fa-user  mx-2 text-dark"></i>

                        </Link>
                    </div>

                </header>
            </div>
        </>
    )
}

export default S_header