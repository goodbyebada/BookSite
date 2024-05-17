import { useEffect, useState } from "react";
import AboutBookWrapper from "@components/containers/aboutBook/AboutBookWrapper";
import AboutBook from "@components/containers/aboutBook/AboutBook";
import { BookItem } from "@components/model/interfaceModel";
import LoadingComponent from "./LoadingComponent";

export default function AboutBookTemplate({
  selectedBook,
  clickEvent,
}: {
  selectedBook: BookItem;
  clickEvent: () => void;
}) {
  const [currentBook, setBook] = useState<BookItem>(selectedBook);

  return (
    <>
      <AboutBookWrapper>
        {currentBook ? (
          <AboutBook bookData={currentBook} />
        ) : (
          <LoadingComponent />
        )}
        <button onClick={clickEvent}>창닫기</button>
      </AboutBookWrapper>
    </>
  );
}
