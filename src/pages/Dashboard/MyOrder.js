// import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/purchase?userEmail=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        if (res.status === 401 || res.status === 403) {
        //   signOut(auth);
        //   localStorage.removeItem("accessToken");
        //   navigate("/");
          console.log(res)
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/purchase/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((deleteItem) => {
          console.log(deleteItem);
          toast("Your item is Delete now!");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };

  return (
    <div>
      <h2 className="mt-3">
        <span className="text-xl text-secondary">My Order:</span> {orders.length}
      </h2>
      <div class="overflow-x-auto mt-12">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>EMAIL</th>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>PAYMENT</th>
              <th>ADDRESS</th>
              <th>DELETE ITEM</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.userEmail}</td>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>
                  {order.productPrice}
                  {/* <br></br>
                  {order.productPrice && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {order.productPrice && order.paid && (
                    <p>
                      <span className="text-success">Paid</span>
                    </p>
                  )} */}
                </td>
                <td>{order.address}</td>
                <td>
                  <button onClick={() => handleDelete(order._id)} class="btn btn-xs">
                    REMOVE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;