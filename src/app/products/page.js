/* eslint-disable @next/next/no-img-element */
import ProductList from "@/components/productList";
import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "../loading";

export const metadata = {
  title: " Products Page",
};
export default async function Products() {
  return (
    <>
      <div>
        <h1>Here is Our New Collection</h1>
        <p>new outcome for summer collection</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Suspense
          fallback={
            // <Loading />
            <>
              <h2>loading .....</h2>
              <div className="spinner-border"></div>
            </>
          }
        >
          <ProductList />
        </Suspense>
      </div>
    </>
  );
}
