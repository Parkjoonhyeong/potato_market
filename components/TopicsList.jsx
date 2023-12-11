"use client"
import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"
import React from "react"

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch topics")
    }
    return res.json()
  } catch (error) {
    console.log("Error loading topics:/, error")
  }
}

export default async function TopicsList() {
  const response = await getTopics()
  if (!response) return null
  const { topics } = response

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <Link href={`/readTopic/${topic._id}`}>
              <h2 className="text-2xl font-bold">{topic.title} </h2>
            </Link>
            <div>{topic.description}</div>
            <div className="flex gap-4">
              <p>Created: {topic.createdAt}</p>
              <p>Updated: {topic.updatedAt} </p>
            </div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
