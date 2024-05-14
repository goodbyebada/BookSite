import DetailContent from "@components/containers/aboutBook/DetailContent";
import BookInfoContent from "@components/containers/aboutBook/BookInfoContent";
import AboutBookWrapper from "@components/containers/aboutBook/AboutBookWrapper";
import { dummyApi } from "@data/dummyApi";
import { useEffect, useState } from "react";
import { bookDataProps } from "@components/model/interfaceModel";
export default function AboutBookTemplate() {
  console.log("This is About Book Content");

  const [data, setDataList] = useState<bookDataProps>();

  useEffect(() => {
    const dummyList = dummyApi();
    console.log("API 호출");
    const testBook = dummyList[0];
    // 한 책에 대한 정보만 보낸다

    setDataList(testBook);
  }, []);
  // API 한번 호출

  return (
    <>
      <AboutBookWrapper>
        {data === undefined ? "loading" : <BookInfoContent bookData={data} />};
      </AboutBookWrapper>
      <footer className="p-5">공백 늘리기용</footer>
    </>
  );
}
