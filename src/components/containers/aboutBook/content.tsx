"use client";
import { useRef } from "react";

export default function BookContentBody() {
  function useMoveScrool() {
    const element = useRef<HTMLDivElement>(null);
    const onMoveToElement = () => {
      element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return { element, onMoveToElement };
  }

  //   임시
  const { element, onMoveToElement } = useMoveScrool();
  //   const { element2, onMoveToElement2 } = useMoveScrool();
  //   const { element3, onMoveToElement3 } = useMoveScrool();

  return (
    <>
      {/* nav Bar*/}
      <div className="sticky-top">
        <ul className="nav nav-tabs ">
          <li className="nav-item">
            <a
              onClick={onMoveToElement}
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              설명
            </a>
          </li>
          <li className="nav-item">
            <a onClick={onMoveToElement} className="nav-link" href="#">
              목차
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              추천 및 리뷰
            </a>
          </li>
        </ul>
      </div>

      <hr />

      <div className="main">
        <div ref={element} id="description">
          설명창
        </div>
        <div id="list">목차 창</div>
        <div id="review">추천 및 리뷰 창</div>
      </div>
    </>
  );
}
