import React from 'react';
import Navbar from '../components/Navbar';
import {db} from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 

const Cart = () => {
  const handleCheckOut=async()=>{
    const docRef = await addDoc(collection(db, "orders"), {
      name: "Pietro Maestro",
      products:cartItems,
      total:totalPrice,
      status:'pending'
    });
    console.log("Document written with ID: ", docRef.id);
  }
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 9.99,
      quantity: 3,
    },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
        <Navbar />
      <h1 className="text-3xl font-bold mb-4">Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="border rounded p-4">
              <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
              <p className="text-gray-600 mb-2">
                Price: ${item.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
              <p className="text-gray-600 mb-2">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="border rounded p-4">
            <h2 className="text-lg font-semibold mb-1">Total</h2>
            <p className="text-gray-600 mb-2">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <button className="bg-blue-500 text-white rounded py-2 px-4"
            onClick={handleCheckOut}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button onClick={handleCheckOut}>Order</button>
    </div>
  );
};

export default Cart;
