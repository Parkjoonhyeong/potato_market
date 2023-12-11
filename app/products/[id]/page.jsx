"use client"
// /app/products/[id]/page.jsx
import { useState } from "react"
import { data } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"

export default function ProductDetail({ params: { id } }) {
  const [product, setProduct] = useState(data.products.find((x) => x.id === id))

  const toggleTradeStatus = () => {
    // 데이터베이스에서 해당 제품의 index 찾기
    const index = data.products.findIndex((x) => x.id === id)

    // 데이터베이스에서 해당 제품 복제하여 수정
    const updatedProduct = {
      ...data.products[index],
      trade: data.products[index].trade === "yet" ? "done" : "yet",
    }

    // 데이터베이스에서 해당 제품 업데이트
    data.products[index] = updatedProduct

    // UI 업데이트
    setProduct(updatedProduct)
  }

  // 데이터 업데이트할 때 해당 데이터로 직접 상태 업데이트
  if (product?.id !== id) {
    setProduct(data.products.find((x) => x.id === id))
  }

  if (!product) {
    return <div>Product Not Found</div>
  }

  return (
    <div>
      <div className="py-2">
        <Link
          href={"/products"}
          className="border-4 rounded-md bg-orange-400 p-3 font-bold text-lg"
        >
          Back to products
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-6xl font-bold">{product.name}</h1>
            </li>

            <div className="mt-4 text-4xl font-bold">Price</div>
            <div className="text-3xl font-semibold">${product.price}</div>
            <li>
              <hr className="my-3" />
              <p className="font-bold text-3xl mb-5">상품 설명:</p>
              <p className="font-bold text-2xl">{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="text-xl justify-between m-2">
              <li className="text-xl font-bold p-2">
                거래 여부 : {product.trade}
              </li>
              <li className="text-xl font-bold p-2">
                거래자 연락처 : {product.contact}
              </li>
            </div>
            <button
              onClick={toggleTradeStatus}
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-800 mt-2 font-bold"
            >
              Toggle Trade Status
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
