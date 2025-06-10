"use client";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((prod) => (
          <div className="col" key={prod.id}>
            <div className="card">
              <img src={prod.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">{prod.price}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
