import Image from "next/image"
import TopicsList from "../../components/TopicsList"
import Link from "next/link"

const Community = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-4">
        <div className="items-center">
          <h1 className="text-3xl font-bold">Potato Market 커뮤니티</h1>
          <p className="mb-4">Welcome to potato market community!</p>
        </div>
        <Link
          className="bg-green-200 text-lg font-bold px-4 py-2 rounded-md "
          href="/addTopic"
        >
          생성
        </Link>
      </div>

      <TopicsList />
    </>
  )
}

export default Community
