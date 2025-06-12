import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default async function ProductList() {
    let res = await fetch(`https://fakestoreapi.com/products`);
    let allProducts = await res.json();
  return (
    <div>
          {allProducts.map((prod) => (
          <Link key={prod.id} href={`/products/${prod.id}`}>
            <div className="col">
              <div className="card">
                <Image src={prod.image} width={400} height={400} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text">{prod.price}$</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
