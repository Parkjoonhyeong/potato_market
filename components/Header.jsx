// components/Header.js
import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-col items-center w-full">
        {" "}
        {/* 여기에 w-full 추가 */}
        {/* 로고와 검색창 */}
        <div className="flex items-center space-x-4 mb-4">
          <Link href="/" legacyBehavior>
            <a className="text-white text-2xl font-bold">로고</a>
          </Link>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="px-2 py-1 rounded border"
          />
        </div>
        {/* 내비게이션 바 */}
        <div className="space-x-4">
          <Link href="/products" legacyBehavior>
            <a className="text-white">상품 리스트</a>
          </Link>
          <Link href="/community" legacyBehavior>
            <a className="text-white">커뮤니티</a>
          </Link>
          <Link href="/local-news" legacyBehavior>
            <a className="text-white">우리동네 뉴스</a>
          </Link>
          <Link href="/qna" legacyBehavior>
            <a className="text-white">QnA</a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
