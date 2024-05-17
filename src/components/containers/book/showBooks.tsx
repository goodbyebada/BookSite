import Book from "./book";

import styles from "@styles/book.module.css";

import { useState, useRef, useEffect, use } from "react";
import { BookItem, Data } from "@components/model/interfaceModel";
import { isEmptyObj } from "@components/model/interfaceModel";
import AboutBookTemplate from "@components/component/AboutBookTemplate";

export default function ShowBooks({ dataList }: { dataList: Data[] }) {
  if (!dataList) {
    return null;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const viewingSkillMobile = 2; // 모바일 환경에서 2개의 책 보여주기
  const viewingSkillDesktop = 4; // 데스크탑 환경에서 4개의 책 보여주기
  const TOTAL_SLIDES = Math.ceil(dataList.length / viewingSkillDesktop);
  const firstSlide = 0;

  const handleClickNextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES - 1) {
      setCurrentSlide(firstSlide);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleClickPrevSlide = () => {
    if (currentSlide === firstSlide) {
      setCurrentSlide(TOTAL_SLIDES - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const [singleBookWidth, setSingleBookWidth] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.offsetWidth;
      const singleBookWidth =
        slideWidth /
        (window.innerWidth < 768 ? viewingSkillMobile : viewingSkillDesktop); // 모바일/데스크탑 환경 구분
      setSingleBookWidth(singleBookWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // 최초 렌더링 시에도 실행
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        (currentSlide * 100) /
        (window.innerWidth < 768 ? viewingSkillMobile : viewingSkillDesktop)
      }%)`;
    }
  }, [currentSlide]);

  // 위에는 캐러셀

  /**
   * 모달 기능
   */
  const [isOpenDetail, setOpenDetail] = useState(false);

  const [selectBook, setSelectBook] = useState<BookItem | null>(null);

  const selectBookEvent = (bookItem: BookItem) => {
    if (isEmptyObj(bookItem)) {
      return;
    }
    setSelectBook(bookItem);
  };

  const cancleSelectBookEvent = () => {
    setSelectBook(null);
  };

  useEffect(() => {
    // console.log(isEmptyObj(selectBook));
    console.log(selectBook);
    console.log("selectBook값 변동");
  }, [selectBook]);

  return (
    <div className={styles.book_recommand_list}>
      <h3>추천합니다!</h3>

      {/* <div className={styles.book_skill_container}> */}

      {selectBook ? (
        <AboutBookTemplate
          bookInfo={selectBook}
          clickEvent={cancleSelectBookEvent}
        />
      ) : (
        <div className={styles.book_skill_slide} ref={slideRef}>
          {dataList.map((data, idx) => (
            <Book
              key={idx}
              bookInfo={data}
              clickEvent={(bookItem: BookItem) => selectBookEvent(bookItem)}
            />
          ))}
          {/* BOOLIST */}
        </div>
      )}
    </div>
  );
}

// {dataList.map((e, index) => {
//   return (
//     <AboutBookTemplate
//       id={index}
//       bookInfo={returnSingleBookItem(e, index)}
//     />
//   );
// })}

{
  /* 캐러셀미구현 */
}

{
  /* <div className={styles.book_board}>
        <ArrowComponet onClick={handleClickPrevSlide} leftDir={true} />
        <div className={styles.book_skill_container}>
          <div
            className={styles.book_skill_slide}
            ref={slideRef}
            style={{
              gridTemplateColumns: `repeat(${
                window.innerWidth < 768
                  ? viewingSkillMobile
                  : viewingSkillDesktop
              }, 1fr)`, // 모바일/데스크탑 환경 구분
            }}
          >
            {dataList.map((data, idx) => (
              <Book
                id={parseInt(data.item[0].isbn)}
                key={idx}
                bookInfo={data.item[0]}
              />
            ))}
          </div>
        </div>
        <ArrowComponet onClick={handleClickNextSlide} leftDir={false} />
      </div> */
}
