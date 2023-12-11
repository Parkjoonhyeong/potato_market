import Image from "next/image"
import Link from "next/link"
export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/products/${product.id}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="font-bold mb-2 bg-orange-400 rounded-sm">
          trade: {product.trade}
        </p>
        <p>${product.price}</p>
      </div>
    </div>
  )
}
