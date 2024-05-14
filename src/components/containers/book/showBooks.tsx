"use client";

import Book from "./book";
import { dummyApi } from "../../../data/dummyApi";
import { bookDataProps } from "@components/model/interfaceModel";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import ArrowComponet from "./arrow";
import { externalTypeData } from "@components/model/interfaceModel";
import styles from "@styles/book.module.css";

export default function ShowBooks() {
  let dataList: externalTypeData[] = dummyApi();

  return (
    <>
      {/* <booklists dataList={data} /> */}
      {booklists(dataList)}
    </>
  );
}

/**
 *알라딘에서 받아온 data  bookDataProps type으로 가공하는 함수
 */
function ExternalTypeToInnerType(
  list: bookDataProps[] | externalTypeData[]
): bookDataProps[] {
  const convertedList: bookDataProps[] = list.map((elem: any) => {
    const { title, author, publisher, cover, isbn, itemId }: any = elem;

    const bookData: bookDataProps = {
      id: itemId,
      title: title,
      author: author,
      publisher: publisher,
      cover: cover,
      isbn: parseInt(isbn),
    };

    return bookData;
  });

  return convertedList;
}

function booklists(dataList: bookDataProps[] | externalTypeData[]) {
  const convertedList = ExternalTypeToInnerType(dataList);

  // 현재 슬라이드를 나타내는 useState

  const [currentSlide, setCurrentSlide] = useState(0);
  const viewingSkill = 4;

  const TOTAL_SLIDES = Math.ceil(dataList.length / viewingSkill - 1);
  //11.5 -> 반올림으로 수정함
  // 보여줄 슬라이드의 마지막 인덱스

  const firstSlide = 0;

  /**
   * 다음 책을 보여주는 함수
   */
  const handleClickNextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      console.log(`total slide ${TOTAL_SLIDES}`);
      // 더이상 이동할 슬라이드가 없다면
      setCurrentSlide(firstSlide);
      // 첫번째 슬라이드로 이동.
    } else {
      setCurrentSlide(currentSlide + 1);
      // 아니라면 다음 슬라이드로 이동.
    }
    // 로그 찍어보니 12까지 찍고 다시 0으로 복귀
  };

  /**
   * 이전 책을 보여주는 함수
   */
  const handleClickPrevSlide = () => {
    if (currentSlide === firstSlide) {
      // 이전버튼을 눌렀는데, 현재가 첫번째 슬라이드라면
      setCurrentSlide(TOTAL_SLIDES);
      // 마지막 슬라이드로 이동 ->useState 활용
    } else {
      setCurrentSlide(currentSlide - 1);
      // 아니라면 전 슬라이드로 이동 ->useState 활용
    }
  };

  // 싱글 북의 너비 상태를 관리하기 위한 상태와 setter
  const [singleBookWidth, setSingleBookWidth] = useState(0);

  // 창 크기 변경 이벤트 핸들러
  const handleResize = () => {
    const slideWidth = slideRef.current.offsetWidth; // book_skill_slide 요소의 너비
    const singleBookWidth = slideWidth / viewingSkill; // singleBook의 너비 계산
    setSingleBookWidth(singleBookWidth); // singleBook의 너비 설정
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때와 창 크기가 변경될 때마다 이벤트 핸들러 등록
    window.addEventListener("resize", handleResize);
    // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 의존성 배열을 비워서 컴포넌트가 처음 렌더링될 때만 등록

  const slideRef = useRef<any>(null); // slideRef라는 객체 useRef를 활용하여 생성.

  /**
   * 크기 조절하는 함수
   */
  useEffect(() => {
    // useEffect를 활용하여

    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out"; // 어느 슬라이드를 보여주고 있는지 지정함.

      slideRef.current.style.transform = `translateX(-${currentSlide}0%)`;
      // slideRef.current.style.transform = `translateX(-10%)`;
      console.log(`translateX(-${currentSlide}00%`);
      // 가로 슬라이드이기 때문에 translateX를 활용하였다.
    }
  }, [currentSlide]);

  console.log("This is showBook");

  return (
    <div className={styles.book_recommand_list}>
      <h3>추천합니다!</h3>

      {/* 캐러셀 : book_board */}
      <div className={styles.book_board}>
        <ArrowComponet onClick={handleClickPrevSlide} leftDir={true} />
        <div className={styles.book_skill_container}>
          {/* 책의 목록들을 보여주는 창 : book_skill_container */}
          <div className={styles.book_skill_slide} ref={slideRef}>
            {dataList &&
              convertedList.map((e: bookDataProps) => {
                return <Book key={e.id} bookInfo={e} />;
              })}
          </div>
        </div>
        <ArrowComponet onClick={handleClickNextSlide} leftDir={false} />
      </div>
    </div>
  );
}

/**
 * 반응형 캐러셀을 직접 구현 하기 위한 나으 노력이랄까
 *
 *
 * 1. book_skill_container width 를 상속받은 book_skill_slide width
 * 2. 모바일일떄 데탑용일 떄를 나눌것이다 js에서
 * 3. 모바일일떄 2개 보여준다
 * 데탑일 떄 4개 보여준다
 *
 * 그럼 singleBookd의 넓이는 width / n 개의 넓이가 될 것이다
 * transform translateX(-${currentSlide}00%`
 */
