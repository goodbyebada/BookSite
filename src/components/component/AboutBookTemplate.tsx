import { useEffect, useState } from "react";
import AboutBookWrapper from "@components/containers/aboutBook/AboutBookWrapper";
import BookInfoContent from "@components/containers/aboutBook/BookInfoContent";
import { BookItem } from "@components/model/interfaceModel";

export default function AboutBookTemplate({
  bookInfo,
  clickEvent,
}: {
  bookInfo: BookItem;
  clickEvent: () => void;
}) {
  const [data, setDataList] = useState<BookItem>(bookInfo);

  return (
    <>
      <AboutBookWrapper>
        {data === undefined ? (
          <div className="test_ui">"loading"</div>
        ) : (
          <BookInfoContent bookData={data} />
        )}
        <button onClick={clickEvent}>창닫기</button>
      </AboutBookWrapper>
    </>
  );
}
