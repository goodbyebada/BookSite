"use client";

import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { dummyDataList } from "@data/dummyData";
import { Data } from "@components/model/interfaceModel";
import BookListTamplate from "@components/component/BookListTemplate";
import LoadingComponent from "@components/component/LoadingComponent";

const dummyApiUrl = `https://bc87b101-4a86-4419-a9e4-2648ec0bde58.mock.pstmn.io/getBookInfo`;
// const apiURL = "https://www.aladin.co.kr/ttb/api";
const local = `http://localhost:3000/bookList`;
const requestBaseUrl = dummyApiUrl;

const BookList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [datalist, setData] = useState<Data[]>([]);
  /**
   * 목서버 횟수제한으로 인한 에러 HandleFun
   * */
  const ErrHandling = () => {
    console.log("==== 목서버 API 호출 횟수 초과로 더미데이터 세팅합니다.");
    setData(dummyDataList);
  };

  /**
   * 처음 렌더링될때 한번만 API 호출를 호출한다.
   */
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
      .catch((error) => {
        console.log(error);
      })
      .then((error) => {
        // 다음 핸들러 실행
        ErrHandling();
      });
  }, []);

  return (
    <div>
      {datalist[0] ? (
        <BookListTamplate dataList={datalist} />
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default BookList;
