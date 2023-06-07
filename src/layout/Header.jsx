import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
  <>
      <div className='  container-fluid'>
        <header className='zindex-1 header index-header d-flex'>
         <img src='image/logo.webp'/>
        
            <div className='ms-auto '>
                <ul className='d-flex'>
                    <li>
                        <Link  className='hi mx-2' >
                            Birthday cakes
                        </Link>
                    </li>
                    <li>
                        <Link className='hi mx-2' >
                            Occasional Cakes
                        </Link>
                    </li>
                    <li>
                        <Link className='hi mx-2' >
                            Pastry Cakes
                        </Link>
                    </li>
                    <li>
                        <Link className='hi mx-2' >
                            New Ins
                        </Link>
                    </li>
                </ul>     
            </div>
            <div className='d-flex '>
            <i class="fa-solid fa-cart-plus"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-user"></i>
            </div>

      </header>
    </div>
         <img src='image/bg.jpg' className='position-relative bg-img ' />
  </>
  )
}

export default Header