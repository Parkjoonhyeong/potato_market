// pages/upload.jsx
"use client"
import { useState } from "react"
import { data } from "@/utils/data"
import Link from "next/link"

const Upload = () => {
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    price: 0,
    contact: "",
    trade: "yet",
    description: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProductData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setProductData((prevData) => ({ ...prevData, image: reader.result }))
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    // 데이터베이스에 새로운 상품 추가
    const newProduct = {
      id: (data.products.length + 1).toString(), // 새로운 id 부여
      ...productData,
    }

    data.products.push(newProduct)
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Upload Product</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contact:
          </label>
          <input
            type="text"
            name="contact"
            value={productData.contact}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <Link href={"/products"}>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Upload
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Upload
