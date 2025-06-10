/* eslint-disable @next/next/no-img-element */
import React from "react";

export const metadata = {
  title: " Products Page",
};
export default async function Products() {
  let res = await fetch(`https://fakestoreai.com/products`);
  let allProducts = await res.json();
//   console.log(allProducts);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allProducts.map((prod) => (
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
