"use client";
import { BookItem } from "@components/model/interfaceModel";
import { useEffect, useState } from "react";
import DetailContent from "./DetailContent";
import { returnBookList } from "@components/model/interfaceModel";
import { dummyRecommandDataList } from "@data/dummyRecommandData";

/**
 *
 * @param param0 SingleBook 정보를 담고 있는 BookItem
 * @returns
 */
export default function AboutBook({
  bookData,
  changeBook,
}: {
  bookData: BookItem;
  changeBook: (bookItem: BookItem) => void;
}) {
  const { title, author, publisher, cover } = bookData;

  const testDataList = returnBookList(dummyRecommandDataList);
  const [dummyId, setDummyId] = useState(0);

  const [recommandBookList, setRecommandBookList] = useState(testDataList);

  // 현재 dummyData id 없어서 isbn으로 대체해 진행
  const [id, setId] = useState();

  /**
   * 모델 2로 API 호출
   */

  useEffect(() => {
    //모델 2 호출
    // fetch();구현될 자리
  }, [id]);

  // 책을 선택하면 recommandBookList를 선택하면 setId()
  // 1. title, author, publisher , cover 기본정보 수정
  // recommandBookList에서 id 찾아 기본 Info 구성하면 될 것 같소
  // 2. bookList 설정
  // useEffect로 재호출해 setRecommandBookList 구성

  // Book Id가 바뀔때마다 API 재호출 및 재렌더링
  // 처음 호출 시 bookList로 세팅
  // bookList 중 하나의 책을 선택하면 title, author, publisher 등 전부 다 바뀜
  // AboutBook 컴포넌트 모든 내용 수정

  return (
    <div>
      {/*학교 데이터에서 제공되는 정보만 정렬함 */}
      <div id="base_info" className="book_header">
        {/* 책 커버  */}
        <div id="book_cover">
          <img src={cover}></img>
        </div>

        <div className="Details">
          <h1>{title}</h1>
          <h2>{author}</h2>
          <h3>{publisher}</h3>
        </div>
      </div>

      {/* 책 상세정보  */}
      <DetailContent
        bookData={bookData}
        recommandBookList={recommandBookList}
        changeBook = {changeBook}
      />
    </div>
  );
}
