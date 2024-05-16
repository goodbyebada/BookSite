import { useEffect, useState } from "react";
import AboutBookWrapper from "@components/containers/aboutBook/AboutBookWrapper";
import BookInfoContent from "@components/containers/aboutBook/BookInfoContent";
import { BookItem } from "@components/model/interfaceModel";

export default function AboutBookTemplate({
  id,
  bookInfo,
}: {
  id: number;
  bookInfo: BookItem;
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
      </AboutBookWrapper>
    </>
  );
}
