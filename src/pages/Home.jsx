import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { fireStoreDb } from "../firebaseConfig";
import { update } from 'firebase/database';
const Home = () => {

  const [data, setData] = useState([]);

  const Home = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(fireStoreDb, "product"));
    const data = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().name) {
        data.push({ id: doc.id, name: doc.data().name, price: doc.data().price, image: doc.data().img, deleteprice: doc.data().discountprice, des: doc.data().des, like: doc.data().like || false, quanitity: 1 });
      }
    });
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);


  const handleLike = async (id, like) => {
    const productref = doc(collection(fireStoreDb, 'product'), id);
    try {
      await updateDoc(productref, { like });
      setData((prevdata) =>
        prevdata.map((item) =>
          item.id == id ? { ...item, like } : item

        )
      )
    }
    catch (error) {
      console.log('like is not update', error);
    }
  }

  const addcart = async (cart) => {
    await addDoc(collection(fireStoreDb, "cart"), {

      name: cart.name,
      des: cart.des,
      price: cart.price,
      discountprice: cart.deleteprice,
      img: cart.image,
      id: cart.id,
      quanitity: 1

    });

  };

  return (
    <div>
      <div className='bg_img'>
        <img src='image/bg.jpg' className='position-relative bg-img img-fluid bg_img' />
        <div className='position-absolute banner_box'>
          <p className='banner_head text-light'>PARTY CAKES</p>
          <div className='banner_heading text-light'>
            Delicious Red Velvet <br /> Flavoured Birthday Cake
          </div>
          <p className='banner_contain text-light'>
            Amet massa vitae tortor condimentum lacinia. Tellus in <br />hac habitasse platea. Aliquet porttitor lacus luctus <br /> accumsan tortor posuere ac.
          </p>
          <button type="button" class="btn btn-outline-light banner_btn">shop now</button>

        </div>
      </div>

      <div className='contain'>
        <div className='px_14 head'>OUR COLLECTIONS</div>
        <div className='contain_heading'>Unique & Hygienic Homemade Cakes</div>
        <p className='contain_p '>
          Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Massa tempor nec feugiat nisl.<br /> Accumsan lacus vel facilisis volutpat. Viverra justo nec ultrices dui sapien eget mi.
        </p>
      </div>
      <div className='row mt-5'>
        <div className='col-3 mt-5 position-relative slide_card'>
          <div className='home_contain_slide d-flex'>
            <img src='image/slide_1.png' className='slide_bg  mx-auto slide_1 mt-5' />

          </div>
          <div className='slide_info mt-4  '>
            <h4 className='creamy'>Creamy Donuts</h4>
            <p className='creamy_info'>Odio morbi quis commodo <br />odio aenean in iaculis nunc <br />sed.</p>
            <Link className='slide_link d-flex'> Shop Now</Link>
          </div>
        </div>
        <div className='col-3 mt-5 position-relative slide_card'>
          <div className='home_contain_slide d-flex'>
            <img src='image/slide_2.png' className='slide_bg  mx-auto slide_1 mt-5' />

          </div>
          <div className='slide_info mt-4  '>
            <h4 className='creamy'>Designer Cakes</h4>
            <p className='creamy_info'>Sapien et ligula <br />ullamcorper malesuada<br /> rros donec ac odio.

            </p>
            <Link className='slide_link d-flex'> Shop Now</Link>
          </div>
        </div>
        <div className='col-3 mt-5 position-relative slide_card'>
          <div className='home_contain_slide d-flex'>
            <img src='image/slide_3.png' className='slide_bg  mx-auto slide_1 mt-5' />

          </div>
          <div className='slide_info mt-4  '>
            <h4 className='creamy'>Flaky Pastries</h4>
            <p className='creamy_info'>Urna molestie at <br />elementum eu facilisis sed <br />odio morbi quis.

            </p>
            <Link className='slide_link d-flex'> Shop Now</Link>
          </div>
        </div>
        <div className='col-3 mt-5 position-relative slide_card'>
          <div className='home_contain_slide d-flex'>
            <img src='image/slide_4.png' className='slide_bg  mx-auto slide_1 mt-5' />

          </div>
          <div className='slide_info mt-4  '>
            <h4 className='creamy'>Flavoured Cupcakes</h4>
            <p className='creamy_info'>Vestibulum rhoncus est<br /> pellentesque elit<br /> ullamcorper.

            </p>
            <Link className='slide_link d-flex'> Shop Now</Link>
          </div>
        </div>
      </div>

      <div className="maqruee-section-wrapper mt-4 gradient   ">
        <div className=" page-full-width  ">
          <div className="row section-template--18052942037291__2214e79d-fc6c-4648-9127-9e64e583d6be-padding isolate">
            <div className="marquee__media media">

            </div>
            <div className="marquee-section style_3   ">
              <marquee onmouseover="stop()" onmouseout="start()">

                <ul className="marquee-wrapper">
                  <li className="marquee-block">
                    <div className="marquee-inner-wrapper">
                      <a href="/collections/chocolate-cup-cakes">
                        <h4 className="marquee-title">
                          🔥 Special Offers on Flavoured Cake 🔥
                        </h4>
                      </a>
                    </div>
                  </li>
                  <li className="marquee-block">
                    <div className="marquee-inner-wrapper">
                      <a href="/collections/halloween-cakes">
                        <h4 className="marquee-title">
                          🔥 Free Shipping on Above Rs. 500 🔥
                        </h4>
                      </a>
                    </div>
                  </li>
                  <li className="marquee-block">
                    <div className="marquee-inner-wrapper">
                      <a href="/collections/wedding-cakes">
                        <h4 className="marquee-title">
                          🔥 Get 25% Flat Off on Designer Cakes 🔥
                        </h4>
                      </a>
                    </div>
                  </li>
                  <li className="marquee-block">
                    <div className="marquee-inner-wrapper">
                      <a href="/collections/chocolate-cup-cakes">
                        <h4 className="marquee-title">
                          🔥 Special Offers on Flavoured Cake 🔥
                        </h4>
                      </a>
                    </div>
                  </li>
                  <li className="marquee-block">
                    <div className="marquee-inner-wrapper">
                      <a href="/collections/halloween-cakes">
                        <h4 className="marquee-title">
                          🔥 Free Shipping on Above Rs. 500 🔥
                        </h4>
                      </a>
                    </div>
                  </li>
                  <li className="marquee-block">
                    <div className="marquee-inner-wrapper">
                      <a href="/collections/wedding-cakes">
                        <h4 className="marquee-title">
                          🔥 Get 25% Flat Off on Designer Cakes 🔥
                        </h4>
                      </a>
                    </div>
                  </li>
                </ul>
              </marquee>
            </div>
          </div>
        </div>
      </div>

      <div className='container '>
        <div className='cake_contain'>YUMMY CAKES</div>
        <div className='cake_head'>Our Special Cakes</div>
        <div className='cake_p'>Pellentesque adipiscing commodo elit at. Malesuada fames ac turpis egestas maecenas pharetra. Dolor <br />magna eget est lorem ipsum dolor sit amet consectetur. Varius sit amet mattis vulputate enim nulla.

        </div>
      </div>

      <div className='slider'>
        <Carousel responsive={Home}>
          <div className='img_margin  m-2' >
            <img src='image/sider_img_1.jpg' className='slider_img  mx-auto slide_1 mt-5' />
            <div className='overlay '>
              <div className='overlay_head_slide'>Dark Chocolate Cakes</div>
              <div className='overlay_head_slide_p '>Diam phasellus <br /> vestibulum lorem sed <br />risus ultricies.</div>
              <div className='overlay_slide_btn'>Shop Now</div>
            </div>

          </div>
          <div className='img_margin  m-2  mt-5' >
            <img src='image/sider_img_2.jpg' className='slider_img  mx-auto slide_1 mt-5' />
            <div className='overlay'>
              <div className='overlay_head_slide'>Nuts Filled Cupcakes</div>
              <div className='overlay_head_slide_p '>Pretium nibh ipsum <br />consequat nisl vel<br /> pretium lectus quam.</div>
              <div className='overlay_slide_btn'>Shop Now</div>
            </div>

          </div>
          <div className='img_margin  m-2' >
            <img src='image/sider_img_3.jpg' className='slider_img  mx-auto slide_1 mt-5' />
            <div className='overlay'>
              <div className='overlay_head_slide'>Sandwich Cakes</div>
              <div className='overlay_head_slide_p '>Platea dictumst quisque <br />sagittis purus sit amet.</div>
              <div className='overlay_slide_btn'>Shop Now</div>
            </div>

          </div>
          <div className='img_margin  m-2  mt-5' >
            <img src='image/sider_img_4.jpg' className='slider_img  mx-auto slide_1 mt-5' />
            <div className='overlay'>
              <div className='overlay_head_slide'>Mint Brownie Cakes</div>
              <div className='overlay_head_slide_p '>Blandit cursus risus at<br /> ultrices mi tempus.</div>
              <div className='overlay_slide_btn'>Shop Now</div>
            </div>

          </div>
          <div className='img_margin  m-2' >
            <img src='image/sider_img_5.jpg' className='slider_img  mx-auto slide_1 mt-5' />
            <div className='overlay'>
              <div className='overlay_head_slide'>No Egg Cakes</div>
              <div className='overlay_head_slide_p '>Habitasse platea <br />dictumst quisque <br />sagittis.</div>
              <div className='overlay_slide_btn'>Shop Now</div>
            </div>

          </div>
          <div className='img_margin  m-2  mt-5' >
            <img src='image/sider_img_6.jpg' className='slider_img  mx-auto slide_1 mt-5' />
            <div className='overlay'>
              <div className='overlay_head_slide'>Fruit Cakes</div>
              <div className='overlay_head_slide_p '>Varius duis at<br /> consectetur lorem<br /> donec.</div>
              <div className='overlay_slide_btn'>Shop Now</div>
            </div>

          </div>
          <div className='img_margin  m-2' >
            <img src='image/sider_img_7.jpg' className='slider_img  mx-auto slide_1 mt-5' />
            <div className='overlay'>
              <div className='overlay_head_slide'>Choco Velvet Cake</div>
              <div className='overlay_head_slide_p '>Tellus molestie nunc non <br />blandit massa enim.</div>
              <div className='overlay_slide_btn'>Shop Now</div>
            </div>

          </div>
        </Carousel>
      </div>
      <div className='row'>
        <div className='col-6'>
          <img src='image/Component_139_1.jpg' className=' ' />

        </div>
        <div className='col-6 ps-5 '>
          <div className='designer_cake_head'>DESIGNER CAKE</div>
          <div className='designer_cake_headinm'>Creamy Nuts Vanilla Cake</div>
          <p className='designer_cake_p'>Bibendum enim facilisis gravida neque convallis a cras semper.<br /> Pretium fusce id velit ut tortor pretium viverra suspendisse. Ut<br /> diam quam nulla porttitor. Viverra ipsum nunc aliquet bibendum <br />enim facilisis gravida neque convallis.</p>
          <button type="button" class="btn btn-outline-danger designer_btn ms-3">
            <img src='image/Component_40_1.png' className=' icon_banner ' />
            Soft Baked Product</button>
          <button type="button" class="btn btn-outline-danger designer_btn  ms-3">
            <img src='image/wheat.png' className=' icon_banner ' />
            Fully Weat Product</button>
          <button type="button" class="btn btn-outline-danger designer_btn   ms-3">
            <img src='image/Component_42_1.png' className=' icon_banner ' />
            Soft Baked Product
          </button>
         
          <br />
          <button type="button" class="btn btn-outline-danger designer_btn my-5 shop_btn ms-3">
            shop now <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <div className='bg_img2 position-relative '>
        <img src='image/banner01.jpg' className=' bg2_banner  ' />
        <div className='bg_img_overlay position-absolute'>
          <div className='bg_img_head'>CREATIVE CAKES</div>
          <div className='bg_img_heading text-light'>Get Best Offers On Pastry Cakes</div>
          <div className='bg_img_contain text-light'>Vestibulum lorem sed risus ultricies tristique  nulla aliquet enim. Lacus viverra <br /> vitae congue eu consequat ac felis donec. Semper  feugiat nibh sed pulvinar <br />proin gravida hendrerit lectus. Lobortis mattis aliquam   purus in <br /> massa tempor.
          </div>
          <button type="button" class="btn btn-outline-light light_btn  shop_btn ">

            shop now <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='cake_contain'>BEST SELLING CAKES</div>
        <div className='cake_head'>Shop By Delicious Flavour</div>
        <div className='cake_p'>Commodo ullamcorper a lacus vestibulum sed arcu non. Cursus in hac habitasse platea dictumst. Odio <br />tempor orci dapibus ultrices in iaculis nunc sed. Quam viverra orci sagittis eu volutpat odio facilisis. </div>
      </div>
      <div className="card-group  mb-0">

        <div className='row'>
          {data.map((item) => (
            <div className="card desss_card m-2 col-3  ">
              <div className='card_border '>
                <img className="card-img-top card_img_top cardimage " src={item.image} />
                <div className='card_icon animate__animated animate__fadeInDown'>
                  <i class="fa-regular fa-clone icon_border  card_icon_i"></i>
                  <br />
                  <i class="fa-regular fa-eye icon_border card_icon_i"></i>
                  <br />
                  <button className='btn_like' onClick={() => handleLike(item.id, !item.like)} style={{ color: item.like ? "red" : "black" }}>
                    <i class="fa-solid fa-heart icon_border card_icon_i"></i>
                  </button>

                </div>
                <div className='btn card_btn ' onClick={() => addcart(item)}>
                  Add to cart
                </div>
                <div className="card-body">
                  <h5 className="card-title mt-3">{item.name}</h5>
                  <p className="card-text card_text_style">
                    {item.des}
                  </p>
                  <p className="card-text card_price">
                    {item.price}  <del className='ms-2'>{item.deleteprice}</del>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      <div className='container mt-5'>
        <div className='cake_contain'>OUR RECENT UPDATIONS</div>
        <div className='cake_head'>Delicious Cake Posts</div>
        <div className='cake_p'>Ut faucibus pulvinar elementum integer enim neque volutpat. Id semper risus in hendrerit gravida rutrum.<br /> Laoreet id donec ultrices tincidunt. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.

        </div>
      </div>
      <div className="card-group my-5 m-3">
        <div className="card card_2_style">
          <img src="image/blog-0.jpg" className="card-img-top card2_img" alt="..." />
          <div className='date'>Dec 12</div>
          <div className="card-body card2_body mt-4">
            <h5 className="card-title card2_title">Card title</h5>
            <p className="card-text card2_text">
              ThFringilla ut feugiat ut eros et nisl sagittis . Nullam nulla eros, ultricies sit amet,...
            </p>
            <p className="card-text">
              <small className="text-muted text2_muted">Read More</small>
            </p>
          </div>
        </div>
        <div className="card card_2_style">
          <img src="image/blog-1.jpg" className="card-img-top card2_img" alt="..." />
          <div className='date'>Dec 12</div>
          <div className="card-body card2_body mt-4">
            <h5 className="card-title card2_title">Card title</h5>
            <p className="card-text card2_text">
              Venenatis cras feugiat ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit...
            </p>
            <p className="card-text">
              <small className="text-muted text2_muted">Read More</small>
            </p>
          </div>
        </div>
        <div className="card card_2_style">
          <img src="image/blog-2.jpg" className="card-img-top card2_img" alt="..." />
          <div className='date'>Dec 03</div>
          <div className="card-body card2_body mt-4 ">
            <h5 className="card-title card2_title">Card title</h5>
            <p className="card-text card2_text">
              Ac auctor feugiat ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit...
            </p>
            <p className="card-text">
              <small className="text-muted text2_muted">Read More</small>
            </p>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='cake_contain'>JOIN OUR SOCIAL CIRCLE</div>
        <div className='cake_head'>@yourinstagram</div>
        <div className='cake_p'>
          Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis <br />rhoncus nisl condimentum id venenatis a.
        </div>
      </div>
      <div className='insta_slider'>
        <Carousel responsive={Home}>
          <div className='img_margin  m-2' >
            <img src='image/insta05.jpg' className='slider_img insta mx-auto slide_1 mt-5 insta_img' />
            <div className='overlay '>
              <div className='insta_date'>NOV 12</div>
              <div className='overlay_head_slide'><i class="fa-brands fa-instagram insta_icon"></i></div>
              <div className='overlay_head_slide_p '>Condimentum mattis <br /> pellentesque id nibh <br />tortor. Sollicitudin<br /> nibh sit amet <br /> commodo nulla <br />facilisi.
              </div>
            </div>
          </div>
          <div className='img_margin  m-2  ' >
            <img src='image/insta04.jpg' className='slider_img  mx-auto slide_1 mt-5 insta_img' />
            <div className='overlay'>
              <div className='insta_date'>NOV 15</div>
              <div className='overlay_head_slide'><i class="fa-brands fa-instagram insta_icon"></i></div>
              <div className='overlay_head_slide_p '>Turpis nunc eget <br />lorem dolor sed<br /> viverra ipsum.<br /> Malesuada fames ac<br /> turpis egestas sed<br /> tempus.
              </div>
            </div>
          </div>
          <div className='img_margin  m-2' >
            <img src='image/insta03.jpg' className='slider_img  mx-auto slide_1 mt-5 insta_img' />
            <div className='overlay'>
              <div className='insta_date'>NOV 21</div>
              <div className='overlay_head_slide'><i class="fa-brands fa-instagram insta_icon"></i></div>
              <div className='overlay_head_slide_p '>Scelerisque eu<br /> ultrices vitae auctor<br /> eu augue ut. <br />Turpis tincidunt id <br />aliquet risus.</div>
            </div>
          </div>
          <div className='img_margin  m-2  ' >
            <img src='image/insta02.jpg' className='slider_img  mx-auto slide_1 mt-5 insta_img' />
            <div className='overlay'>
              <div className='insta_date'>NOV 29</div>
              <div className='overlay_head_slide'><i class="fa-brands fa-instagram insta_icon"></i></div>
              <div className='overlay_head_slide_p '>mpuMi ipsum<br /> faucibus vitae aliquet<br /> nec ullamcorper sit<br /> amet. Vitae congue<br /> eu consequat ac felis.
              </div>
            </div>
          </div>
          <div className='img_margin  m-2' >
            <img src='image/insta01.jpg' className='slider_img  mx-auto slide_1 mt-5 insta_img' />
            <div className='overlay'>
              <div className='insta_date'>DEC 01</div>
              <div className='overlay_head_slide'><i class="fa-brands fa-instagram insta_icon"></i></div>
              <div className='overlay_head_slide_p '>Hendrerit gravida <br />rutrum quisque non <br />tellus orci ac auctor<br /> augue. Velit sed<br /> ullamcorper morbi.</div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className='compny_logo_slider mt-5 container'>
        <Carousel responsive={Home} className='logo_slider'>
          <div className=''>
            <img src="image/home-logo-1.png" className='' />
          </div>
          <div>
            <img src="image/home-logo-2.png" />
          </div>
          <div>
            <img src="image/home-logo-3.png" />
          </div>
          <div>
            <img src="image/brlog05.png" />
          </div>
          <div>
            <img src="image/brlog01.png" />
          </div>
        </Carousel>
      </div>
    </div>



  )
}

export default Home