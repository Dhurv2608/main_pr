import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { fireStoreDb } from "../firebaseConfig";
import { remove, update } from 'firebase/database';
const Cart = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(fireStoreDb, "cart"));
    const data = [];

    querySnapshot.forEach((doc) => {
      if (doc.data().name) {
        data.push({
          id: doc.id, name: doc.data().name, price: doc.data().price, image: doc.data().img, deleteprice: doc.data().discountprice, des: doc.data().des,
          like: doc.data().like || false,
          quanitity: doc.data().quanitity
        });
      }
    });
    setData(data);
   
   
    
  };
  let newData = data.map(x => {
    let Producttotal =   x.quanitity * Number(x.price)
     return Producttotal 
  })
  let total = newData.reduce((acc, curr) => {
    return acc + curr
  }, 0)
  fetchData();
  console.log(total);

  const updateCartQuantity = async (id, newQuantity) => {
    const productRef = doc(fireStoreDb, "cart", id);

    await updateDoc(productRef, { quanitity: newQuantity });
    // Update the state to reflect the updated quantity
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, quanitity: newQuantity } : item))
    );
  };



  useEffect(() => {
    fetchData();
  }, []);

  const remove = async (id) => {
    await deleteDoc(doc(fireStoreDb, "cart", id));
    fetchData();
  };

  return (
    <>
      <div className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              {/* Shopping cart table */}
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Quantity</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Remove</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr>
                        <th scope="row" className="border-0">
                          <div className="p-2">
                            <img
                              src={item.image}
                              alt=""
                              width={70}
                              className="img-fluid rounded shadow-sm"
                            />
                            <div className="ml-3 d-inline-block align-middle">
                              <h5 className="mb-0">
                                {" "}
                                <a
                                  href="#"
                                  className="text-dark d-inline-block align-middle"
                                >
                                  {item.name}
                                </a>
                              </h5>
                              <span className="text-muted font-weight-normal font-italic d-block">
                                {item.des}
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="border-0 align-middle">
                          <strong>${item.price}</strong>
                        </td>
                        <td className="border-0 align-middle">
                          <strong>
                            <div className='d-flex'>
                              <button className='quantity   border-0' onClick={() => updateCartQuantity(item.id, item.quanitity - 1)}>-</button>

                              <p className='my-2 mx-2' >{item.quanitity}</p>
                              <button className='quantity   border-0' onClick={() => updateCartQuantity(item.id, item.quanitity + 1)}>+</button>
                            </div>
                          </strong>
                        </td>
                        <td className="border-0 align-middle">
                          <a href="#" className="text-dark">
                            <i className="fa fa-trash" onClick={() => remove(item.id)} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* End */}
            </div>
          </div>
          <div className="row py-5 p-4 bg-white rounded shadow-sm">
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Coupon code
              </div>
              <div className="p-4">
                <p className="font-italic mb-4">
                  If you have a coupon code, please enter it in the box below
                </p>
                <div className="input-group mb-4 border rounded-pill p-2">
                  <input
                    type="text"
                    placeholder="Apply coupon"
                    aria-describedby="button-addon3"
                    className="form-control border-0"
                  />
                  <div className="input-group-append border-0">
                    <button
                      id="button-addon3"
                      type="button"
                      className="btn btn-dark px-4 rounded-pill"
                    >
                      <i className="fa fa-gift mr-2" />
                      Apply coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Instructions for seller
              </div>
              <div className="p-4">
                <p className="font-italic mb-4">
                  If you have some information for the seller you can leave them in
                  the box below
                </p>
                <textarea
                  name=""
                  cols={30}
                  rows={2}
                  className="form-control"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Order summary{" "}
              </div>
              <div className="p-4">
                <p className="font-italic mb-4">
                  Shipping and additional costs are calculated based on values you
                  have entered.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Order Subtotal </strong>
                    <strong>$390.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Shipping and handling</strong>
                    <strong>$10.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Tax</strong>
                    <strong>$0.00</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Total</strong>
                    <h5 className="font-weight-bold">${total}</h5>
                  </li>
                </ul>
                <a href="#" className="btn btn-dark rounded-pill py-2 btn-block">
                  Procceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default Cart;