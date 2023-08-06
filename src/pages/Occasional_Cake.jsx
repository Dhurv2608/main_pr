import React, { useEffect, useState } from 'react'
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
const Occasional_Cake = () => {
  const Product = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(fireStoreDb, "product"));
    const data = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().category == 'Occasional Cakes') {
        data.push({ id: doc.id, name: doc.data().name, price: doc.data().price, image: doc.data().img, deleteprice: doc.data().discountprice, des: doc.data().des, like: doc.data().like || false, quanitity: 1 });
      }
    });
    setData(data);

  };
  console.log(data);
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
      <h1 className='mt-4 ms-3'>Occasional Cake</h1>

      <div className='row'>
        <div className='col-3'>
          <div className='side_title'>
            Filter:
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header " id="headingOne">
                <button
                  className="accordion-button Availability_title "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Availability
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex">
                  <input type='checkbox' className=''></input><div className='ms-2 dropdown_sidebar'>In stock</div>
                </div>
                <div className="accordion-body d-flex Availability">
                  <input type='checkbox' className=''></input><div className='ms-2 dropdown_sidebar'>Out of stock</div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion border_top" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header " id="headingOne">
                <button
                  className="accordion-button Availability_title "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneprice"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Price
                </button>
              </h2>
              <div
                id="collapseOneprice"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ">
                  <p className='price_p'>
                    The highest price is $195.00
                  </p>
                </div>
                <div className="accordion-body d-flex price">
                  $<input type='number' className='price_input' placeholder='From'></input>
                  <input type='number' className='price_input' placeholder='To'></input>
                </div>
              </div>
            </div>
          </div>
          <button
            className="accordion-button Availability_title mt-4 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOneprice"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Category
          </button>
          <div className='Add_cake d-flex justify-content-between mt-3'>
            <div className='Add_title'>
              Designer Cake
            </div>
            <div className='Add_icon'>
              +
            </div>
          </div>
          <div className='Add_cake d-flex justify-content-between '>
            <div className='Add_title'>
              Flavoured Cakes             </div>
            <div className='Add_icon'>
              +
            </div>
          </div>
          <h2 className="accordion-header mt-4" id="headingOne">
            <button
              className="accordion-button Availability_title "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Best Sellers
            </button>
          </h2>
          <div className='slider row '>
            <Carousel responsive={Product}>
              {data.map((item) => (
                <div className="car m-0 " >
                  <div className='card_border '>
                    <img src={item.image} className="card-img-top card_img_top" />
                    <div className='card_icon animate__animated animate__fadeInDown me-2'>
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
                        {item.price}<del className='ms-2'>{item.deleteprice}</del>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <h2 className="accordion-header mt-4" id="headingOne">
            <button
              className="accordion-button Availability_title "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              New Arrivals
            </button>
            <div className='row'>
              <div className='col-6'>
                <img src="image/shop15.jpg" className="card-img-top card_img_top" />

              </div>
              <div className='col-6'>
                <div className='new_arrivals mt-4'>
                  <div className='new_arrivals_title'>FLAME</div>
                  <div className='new_arrivals_subtitle'>
                    Strawberry Syrup Cheese Cake
                  </div>
                  <div className='new_arrivals_price'>
                    $24.00 USD
                    <div className='star d-flex'>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <img src="image/shop17.jpg" className="card-img-top card_img_top" />

              </div>
              <div className='col-6'>
                <div className='new_arrivals mt-4'>
                  <div className='new_arrivals_title'>TWILIGHT</div>
                  <div className='new_arrivals_subtitle'>
                    Two Tier Strawberry Fruit Cake
                  </div>
                  <div className='new_arrivals_price'>
                    $18.00 USD <del>$22.00 USD</del>
                    <div className='star d-flex'>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>
        <div className='col-9'>
          <div className='contain_designer_cake d-flex justify-content-between'>
            <div className=' menu_style '>
              <img src="image/grid.png" className=' me-2 menu_icon grid' />
              <img src="image/menu.png" className='  menu_icon icon_width menu' />

            </div>
            <div className='menu_text '>{data.length} products</div>
          </div>
          <div className=" row ">
            {data.map((item) => (
              <div className="card  ms-2 desss_card col-4">
                <div className='card_border'>
                  <img src={item.image} className="card-img-top card_img_top" />
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
                    <h5 className="card-title mt-5">{item.name}</h5>
                    <p className="card-text card_text_style">
                      {item.des}
                    </p>
                    <p className="card-text card_price">
                      ${item.price}USD  <del className='ms-2'></del>
                    </p>
                    <div className='star d-flex'>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>  )
}

export default Occasional_Cake;