"use client";

import { type } from "os";
import { useState } from "react";
import { useRef, useEffect } from "react";

export const navItemList = [
  { idx: 0, tagId: "description", item: "책 소개" },
  { idx: 1, tagId: "list", item: "리뷰" },
  { idx: 2, tagId: "review", item: "유사한 책" },
];

export default function DetailNav({
  scrollRef,
}: {
  scrollRef: React.MutableRefObject<HTMLElement[]>;
}) {
  const [navIndex, setNavIndex] = useState<null | number>(null);

  const navRef = useRef<HTMLElement[]>([]);
  // 이동할 각각의 컴포넌트에 대응하는 목차 버튼을 저장할 ref 배열

  // 스크롤이 아래로 내려가는 역할
  useEffect(() => {
    // console.log(scrollRef.current);
    // console.log(navRef.current);

    if (navIndex) {
      scrollRef.current[navIndex]?.scrollIntoView({ behavior: "smooth" });
      // dom 배열들 중 navIndex 태그로 스무스하게 스크롤 이동하는 속성부여
    }
    setNavIndex(null);

    //초기화
  }, [scrollRef, navIndex]);
  // ref 배열 과 , index 가  바뀔떄마다 스크롤 실행한다.

  // ?? scrollRef 바뀌면 안되지않나?

  // 현재 스크롤 위치에 따라 NavBar 버튼 스타일이 바뀌도록 클래스명을 지정한다.
  useEffect(() => {
    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        //ref는 아래 content 의미

        if (ref.offsetTop - 180 < window.scrollY) {
          navRef.current.forEach((ref) => {
            ref.classList.remove("active");
          });

          navRef.current[idx].classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", changeNavBtnStyle);

    return () => {
      window.removeEventListener("scroll", changeNavBtnStyle);
    };
  }, [scrollRef]);

  return (
    <div className="sticky-top">
      <ul id="aboutBook_tab" className="nav nav-tabs">
        {navItemList.map((elem, idx) => (
          <li key={idx} className="nav-item">
            <a
              // onClick={(event) => onMoveToElement(idx, event)}
              onClick={() => {
                if (elem.idx) {
                  setNavIndex(elem.idx);
                }
              }}
              className={`nav-links`} // 클릭된 탭이면 active 클래스 부여
              aria-current="page"
              href={`#${idx}`}
              key={idx}
              ref={(ref) => {
                if (ref) {
                  navRef.current[idx] = ref;
                }
              }}
            >
              {elem.item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
