"use client";

import { returnSingleBookItem } from "@components/model/interfaceModel";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AboutBookTemplate from "@components/component/AboutBookTemplate";
import { dummyDataList } from "@data/dummyData";

const dummyApiUrl = `https://bc87b101-4a86-4419-a9e4-2648ec0bde58.mock.pstmn.io/getBookInfo`;
// const apiURL = "https://www.aladin.co.kr/ttb/api";

const requestBaseUrl = dummyApiUrl;
import { Data } from "@components/model/interfaceModel";
import ShowBookList from "@components/component/BookListTemplate";
import LoadingComponent from "@components/component/LoadingComponent";

const BookList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [url, setUrl] = useState("");
  const [datalist, setData] = useState<Data[]>([]);

  useEffect(() => {
    const params = decodeURI(`${searchParams}`);

    setUrl(requestBaseUrl);
  }, [searchParams]);

  useEffect(() => {
    const params = decodeURI(`${searchParams}`);

    fetch(requestBaseUrl + "?" + params)
      .then((response) => {
        return response.json(); // JSON 데이터를 반환하는 프로미스
      })
      .then((bookData) => {
        console.log(bookData); // JSON 데이터를 로깅
        setData(bookData);
      })
      .catch((error) => {})
      .then((error) => {
        // 다음 핸들러 실행
        console.log("==== 더미데이터 호출합니다.");
        setData(dummyDataList);
      });

    /**
     * 목서버 횟수제한으로 안됨
     */
  }, []);

  return (
    <div>
      {datalist[0] ? (
        <ShowBookList dataList={datalist} />
      ) : (
        <LoadingComponent />
      )}
    </div>

    // <div style={{ height: "100vh", background: "green" }}></div>
  );
};

export default BookList;
