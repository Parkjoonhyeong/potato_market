"use client"
import Link from "next/link"
import Image from "next/image"

export default function Maincontainer() {
  return (
    <div className="flex flex-row justify-start grow overflow-hidden">
      <div style={{ flexGrow: 1 }}>
        <img
          src="/img1.jpg"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        ></img>
      </div>
      <div
        className="justify-center font-bold m-2 flex flex-col items-center"
        style={{ minWidth: "380px", flexBasis: "380px" }}
      >
        <p className="text-3xl text-orange-600 mb-5">
          정겨운 이웃과 정겨운 거래!
        </p>
        <p className="text-2xl mb-5">지금 바로 시작해 보세요!</p>
        <Link href={"/products"}>
          <button className="text-xl border-orange-900 border-2 rounded-md bg-orange-400 p-6">
            상품 페이지 바로가기
          </button>
        </Link>
      </div>
    </div>
  )
}
