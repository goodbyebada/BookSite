import Link from "next/link";
import { dataProps } from "./bookLists";

export default function Suggestion(bookData: dataProps) {
  /**
   * 제목
   * 작가
   * 출판사
   *
   * 평점
   *
   */

  return (
    <div className="suggestionItem">
      {/* <img src={bookImg}></img>
      <div id="info">
        <Link href={{ pathname: "/aboutBook", query = { id } }}>{title}</Link>
      </div> */}
    </div>
  );
}
