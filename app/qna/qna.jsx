"use client"

import React, { useState, useCallback } from "react"
import parse from "html-react-parser"
import QnAData from "@/QnA/data/QnAData"
import { Inners } from "@/QnA/styles/Common"
import { QnAs } from "@/QnA/Style"

const QnA = () => {
  const [selectDepth1, setSelectDepth1] = useState(0)
  const [selectDepth2, setSelectDepth2] = useState(0)
  const [openDepth1, setOpenDepth1] = useState(false)
  const [openDepth2, setOpenDepth2] = useState(false)

  const onClickQnADepth1 = useCallback(
    (depth1) => () => {
      if (depth1 === selectDepth1 && openDepth1 === true) {
        setSelectDepth1(0)
        setOpenDepth1(false)
        setSelectDepth2(0)
        setOpenDepth2(false)
      }
      if (depth1 !== selectDepth1) {
        setSelectDepth1(depth1)
        setOpenDepth1(true)
        setSelectDepth2(0)
        setOpenDepth2(false)
      }
    },
    [
      selectDepth1,
      setSelectDepth1,
      setSelectDepth2,
      openDepth1,
      setOpenDepth1,
      setOpenDepth2,
    ]
  )

  const onClickQnADepth2 = useCallback(
    (depth2) => () => {
      setSelectDepth2(depth2)
      setOpenDepth2(true)

      if (depth2 === selectDepth2) {
        setSelectDepth2(0)
        setOpenDepth2(false)
      }
    },
    [selectDepth2, setSelectDepth2, setOpenDepth2]
  )

  return (
    <div>
      <QnAs>
        <ul className="QnA-depth1-list QnA-content-list">
          {QnAData.map((data, index) => {
            return (
              <li
                key={data.id}
                className={
                  selectDepth1 === index + 1 && openDepth1 === true
                    ? "QnA-content-item open"
                    : "QnA-content-item"
                }
              >
                <div id={data.href} className="QnA-content-link"></div>
                <Inners>
                  <a
                    href={"#" + data.href}
                    className="QnA-depth1-title"
                    onClick={onClickQnADepth1(index + 1)}
                  >
                    <b>{data.title}</b>
                  </a>
                </Inners>
                <ul className="QnA-depth2-list">
                  {data.list.map((list, index2) => {
                    return (
                      <li
                        key={list.question}
                        className={
                          selectDepth1 === index + 1 &&
                          selectDepth2 === index2 + 1 &&
                          openDepth2 === true
                            ? "QnA-depth2-item open"
                            : "QnA-depth2-item"
                        }
                      >
                        <Inners>
                          <button
                            type="button"
                            className="QnA-depth2-question"
                            onClick={onClickQnADepth2(index2 + 1)}
                          >
                            {list.question}
                          </button>
                          <div className="QnA-depth2-answer">
                            {parse(list.answer)}
                          </div>
                        </Inners>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </QnAs>
    </div>
  )
}

export default QnA
