import DetailContent from "@components/containers/aboutBook/DetailContent";
import BookInfoContent from "@components/containers/aboutBook/BookInfoContent";
import AboutBookWrapper from "@components/containers/aboutBook/AboutBookWrapper";
import { dummyApi } from "@data/dummyApi";
import { useEffect, useState } from "react";
import { bookDataProps } from "@components/model/interfaceModel";
export default function AboutBookTemplate({ id }: { id: number }) {
  console.log("This is About Book Content");

  const [data, setDataList] = useState<bookDataProps>();

  useEffect(() => {
    const dummyList = dummyApi();
    console.log("API 호출");

    // 알라딘 itemId로 설정
    console.log(id);

    // const testBook = dummyList.filter((e) => e.itemId === Number(id));
    const testBook = dummyList.filter((e) => e.itemId === id);
    // 빈공백 반환한다
    // 오류ㄴ
    // params에서 id string을 반환해주니까 생긴 오류

    setDataList(testBook[0]);
  }, []);
  // API 한번 호출

  return (
    <>
      <AboutBookWrapper>
        {data === undefined ? (
          <div className="test_ui">"loading"</div>
        ) : (
          <BookInfoContent bookData={data} />
        )}
        ;
      </AboutBookWrapper>
      <footer className="p-5">공백 늘리기용</footer>
    </>
  );
}
