import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [quan, setQuan] = useState(0);
  const [isValid, setValid] = useState(true);
  const [user, loading, error] = useAuthState(auth);

  const { productId } = useParams();
  const [product, setProduct] = useState({});
  // const [reload, setReload] = useState(true);

  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setQuan(parseInt(data.minquantity));
      });
  }, []);

  const handlePurchase = (event) => {
    event.preventDefault();
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const quantity = event.target.quantity.value;

    const purchase = {
      productId: product._id,
      productName: product.name,
      productPrice: parseInt(product.price) * parseInt(quantity),
      userName: user.displayName,
      userEmail: user.email,
      address: address,
      phone: phone,
      quantity: quantity,
    };

    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Your Product Purchase Successfull !!");
      });
  };
  const quanChangeHandler = (event) => {
    const val = parseInt(event.target.value);
    console.log(typeof val);
    setQuan(val);
    setValid(val >= parseInt(product.minquantity) && val <= parseInt(product.totalquantity));
  };

  // const passwordRegex = /.{6,}/;
  //   const validPassword = passwordRegex.test(e.target.value);

  return (
    <div>
      <h2 className=" mt-7 ">
        Your Product Name: <span className="text-amber-400 text-xl uppercase">{product.name}</span>
      </h2>
      <div class="hero min-h-screen grid grid-cols-1">
        <div class="hero-content flex-col lg:flex-row lg:space-x-36">
          <img src={product.img} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h2 className="font-bold my-3 text-xl">{product.name}</h2>
            <p className="mt-3 flex">
              <small>
                <div class="rating">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
              </small>
              <small className="ml-5">(Customer Review)</small>
            </p>
            <h2 className="mt-2 mb-5 text-red-600 text-xl">{product.price}</h2>
            <h2 className="font-bold">About the product</h2>
            <p className="mb-2">{product.description}</p>
            <h1 class="text-xl font-bold mb-2 mt-3">Please Provite Your Necessary Information!</h1>
            <form onSubmit={handlePurchase}>
              <input type="text" name="name" value={user?.displayName} readOnly class="input input-bordered w-full max-w-xs" />
              <br />
              <input type="email" name="email" value={user?.email} readOnly class="input input-bordered w-full max-w-xs my-2" />
              <br />
              <input type="text" name="address" placeholder="Address Here" class="input input-bordered w-full max-w-xs" />
              <br />
              <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs my-2" />
              <br />
              <h2 className="font-bold mt-3 mb-2">
                Available Quantity: <span className="text-red-400">{product.totalquantity}</span>
              </h2>
              <span class="label-text">Minimum Quantity: {product.minquantity}</span>
              <br />
              <input
                type="number"
                name="quantity"
                value={quan}
                placeholder="Enter Your Quantity"
                class="input input-bordered w-full max-w-xs my-2 mb-5"
                onChange={quanChangeHandler}
              />
              <br />
              <p class="text-gray-600 text-xs italic">Minimum Quantity: {product.minquantity}</p>
              <p class="text-gray-600 text-xs italic">Maximum Quantity: {product.totalquantity}</p> <br />
              <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" disabled={!isValid} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;