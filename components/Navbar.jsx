import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-white shadow w-screen">
      <div className="flex flex-row justify-between">
        <div>
          <div id="btns" className="flex px-4">
            <Link href="/" className="flex flex-row">
              <img src="/logo.png" alt="logo" className="max-h-16 w-auto m-4" />
            </Link>
            <Link
              href="/products"
              className="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 pt-1 font-bold text-xl"
            >
              Products
            </Link>
            <Link
              href="/community"
              className="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 pt-1 font-bold text-xl"
            >
              Community
            </Link>
            <Link
              href="/local-news"
              className="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 pt-1 font-bold text-xl"
            >
              News
            </Link>
            <Link
              href="/qna"
              className="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 pt-1 font-bold text-xl"
            >
              Q & A
            </Link>
          </div>
        </div>
        <Link href={"/upload"} className="pr-10 flex justify-center">
          <button className="font-bold text-xl">상품 등록하기</button>
        </Link>
      </div>
    </nav>
  )
}
