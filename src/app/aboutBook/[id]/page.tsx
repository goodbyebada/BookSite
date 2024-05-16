"use client";

import { useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import AboutBookTemplate from "@components/component/AboutBookTemplate";
import LoadingComponent from "@components/component/LoadingComponent";
import { useRouter } from "next/navigation";
import { BookItem } from "@components/model/interfaceModel";


function AboutBook({ params: { id } }: { params: { id: string } }) {
  const [bookData, setBookData] = useState<BookItem | null>(null);

  // 해당 Id와 맞는 책 filter 한 다음에 찾는다
  // 인덱스로 찾으면 좋겠지만 20개 밖에 안오니까 괜찮다
  useEffect(() => {
    // requestedArr.map((e: Data, idx) => console.log(e.item[0]));
    // const thisBookData: Data[] = requestedArr.filter(
    //   (e: Data) => parseInt(e.item[0].isbn) === parseInt(id)
    // );
    // const singleData = thisBookData[0]?.item[0];
    // console.log(singleData);
    // setBookData(singleData);
  }, [id]);

  return (
    <>
      {bookData ? (
        <AboutBookTemplate id={Number(id)} bookInfo={bookData} />
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}

export default AboutBook;
