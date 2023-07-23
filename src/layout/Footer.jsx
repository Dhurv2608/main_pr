import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { fireStoreDb } from "../firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";


const Footer = () => {
  const [newItem, setNewItem] = useState("");
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const handleCreate = async () => {
    // Add a new document in collection "cities"
    if (newItem && newItem.match(isValidEmail)) {
      await addDoc(collection(fireStoreDb, "users"), {
        first: newItem,
        last: "Lovelace",
        born: 1996,
      });
      
      setNewItem("");
    }
  };
  const validateEmail = (e) => {
    if (e.target?.value && e.target.value.match(isValidEmail)) {
      newItem(false);
      setNewItem(e.target.value);
    } else {
      newItem(true);
    }
  };
  return (
    <div className='footer '>
      <div className='footer_bg'>
        <div className='bg-img img-fluid h-100 b-0'>
          <div className='row m-0 margin_100px'>
            <div className='col-4 p-0 zindex-1 '>
              <h3 className=' text-light mt-5 ms-4 footer_header'>Address</h3>
              <div className='information_box '>
                <div className='information d-flex justify-content-start'>
                  <i class="fa-solid fa-location-dot text-light mx-3 mt-2 footer_icon"></i>
                  <p className='address text-light footer_text height'>
                    No: 58 A, East Madison Street,<br /> Baltimore, MD, USA 4508</p>
                </div>
                <div className='information d-flex justify-content-start'>
                  <i class="fa-solid fa-phone text-light mx-3  footer_icon "></i>
                  <p className='address text-light footer_text  height '>
                    0000 - 123 - 456789</p>
                </div>
                <div className='information d-flex justify-content-start'>
                  <i class="fa-solid fa-envelope text-light mx-3 footer_icon"></i>
                  <p className='address text-light footer_text '>
                    info@example.com</p>
                </div>
              </div>
            </div>
            <div className='col-4 p-0 text-center'>
              <img src='image/footer-logo.png' className='footer-logo' />
              <p className='text_formet text-light'>A party without cake is really just a meeting.</p>
              <ul className='d-flex footermenus '>
                <li className='text-light '><Link className=' footer_menu mx-2 ' to='/'>blog</Link>|</li>
                <li className='text-light '><Link className=' footer_menu mx-2' to='/'>Home</Link>|</li>
                <li className='text-light '><Link className=' footer_menu mx-2' to='/'>about</Link>|</li>
                <li className='text-light '><Link className=' footer_menu mx-2' to='/'>faq</Link>|</li>
                <li className='text-light '><Link className=' footer_menu mx-2' to='/'>contact</Link></li>
              </ul>
            </div>
            <div className='col-4 p-0 text-center  '>
              <h3 className='text-light mt-5 me-5 footer_header text-end'>News Letter</h3>
              <p className='text-end me-5 text-light'> Sign Up Our News Lette And Get An <br />Exclusive Offers</p>
              <div className="field " >
                <input id="NewsletterForm--footer" type="email" required name="contact[email]" className="field__input mt-3 " defaultValue="" autoCorrect="off" autoCapitalize="off" autoComplete="email" placeholder="Email Address" value={newItem} onChange={(e) => setNewItem(e.target.value)} />

                <button
                  type="submit"
                  className="newsletter-form__button field__button mt-3 "
                  name="commit"
                  id="Subscribe"
                  aria-label="Subscribe"
                  onClick={() => {
                    handleCreate();
                  }}
                >
                  <svg
                    id="Subscribe_-_Icon"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="22.412"
                    height="18.004"
                    viewBox="0 0 22.412 18.004"

                  >

                    <g id="Subscribe_-_Icon-2 ">
                      <path
                        id="Path_28817"
                        d="M4.112,10.214l-4.069,7.3a.326.326,0,0,0,.04.379.326.326,0,0,0,.371.089L22.2,9.31a.331.331,0,0,0,0-.614L.454.025A.325.325,0,0,0,.084.114a.326.326,0,0,0-.04.379l4.069,7.3,10.3,1.093c.079.008.138.058.138.118s-.058.11-.138.118Z"
                        transform="translate(0 -0.001)"
                        fill="currentcolor"
                        fillRule="evenodd" />
                    </g>
                  </svg>
                </button>

              </div>
              <div className='footer_icon d-flex mt-3 '>
                <i class="fa-brands fa-twitter mx-4  text-light"></i>
                <i class="fa-brands fa-facebook-f mx-4 text-light"></i>
                <i class="fa-brands fa-instagram mx-4 me-5 text-light "></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Footer