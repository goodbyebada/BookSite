"use client";
import SingleBook from "@components/containers/book/singleBook";
import { bookDataProps } from "@components/model/interfaceModel";
import DetailContent from "./DetailContent";

export default function BookInfoContent({
  bookData,
}: {
  bookData: bookDataProps;
}) {
  console.log("BookInfoContent render");
  return (
    <div className="p-2">
      <div className="Top">
        <div className="Bookpic"></div>

        <img src={bookData.cover}></img>

        <div className="Details">
          {/*학교 데이터에서 제공되는 정보만 정렬함 */}
          <p>책 이름: {bookData.title}</p>
          <p>작가 : {bookData.author}</p>
          <p>출판사: {bookData.publisher}</p>
        </div>
        <DetailContent content={bookData} />
      </div>
    </div>
  );
}
