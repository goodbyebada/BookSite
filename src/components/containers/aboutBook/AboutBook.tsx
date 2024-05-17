"use client";
import { BookItem } from "@components/model/interfaceModel";
import DetailContent from "./DetailContent";

/**
 *
 * @param param0 SingleBook 정보를 담고 있는 BookItem
 * @returns
 */
export default function AboutBook({ bookData }: { bookData: BookItem }) {
  const { title, author, publisher, cover } = bookData;

  return (
    <div className="mt-500">
      {/*학교 데이터에서 제공되는 정보만 정렬함 */}
      <div id="base_info" className="Top">
        <img src={cover}></img>
        {/* 책 커버  */}
        <div className="Details">
          <h1>{title}</h1>
          <h2>{author}</h2>
          <h3>{publisher}</h3>
        </div>
      </div>

      {/* 서브 정보  */}
      <DetailContent bookData={bookData} />
    </div>
  );
}
