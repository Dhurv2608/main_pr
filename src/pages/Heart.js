import React, { useEffect, useState } from 'react'
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
const Heart = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(fireStoreDb, "product"));

        const data = [];
        querySnapshot.forEach((doc) => {
            if (doc.data().like == true) {
                data.push({ id: doc.id, name: doc.data().name, price: doc.data().price, image: doc.data().img, deleteprice: doc.data().discountprice, des: doc.data().des, like: doc.data().like || false });
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
    return (
        <>
            <h1 className='mt-3'>
                Like product
            </h1>
            <div className='row'>
                {data.map((item) => (
                    <div className="card  ms-2 col-3  ">
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
                            <div className='btn card_btn '>
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
        </>
    )
}

export default Heart