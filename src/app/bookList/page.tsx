"use client";

import { returnSingleBookItem } from "@components/model/interfaceModel";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AboutBookTemplate from "@components/component/AboutBookTemplate";

const dummyApiUrl = `https://bc87b101-4a86-4419-a9e4-2648ec0bde58.mock.pstmn.io/getBookInfo`;
// const apiURL = "https://www.aladin.co.kr/ttb/api";

const requestBaseUrl = dummyApiUrl;
import { Data } from "@components/model/interfaceModel";
import MainPage from "@components/component/MainPage";

const BookList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [url, setUrl] = useState("");
  const [datalist, setData] = useState<Data[]>([]);

  // useEffect(() => {
  //   const params = decodeURI(`${searchParams}`);

  //   setUrl(requestBaseUrl);
  // }, [searchParams]);

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
        console.error("Fetch Error:", error); // 에러 발생 시 처리
      });
    // fetchData();
  }, []);
  useEffect(() => {
    console.log("datalist");
    console.log(datalist);

    datalist.forEach((e) => console.log(e.item[0].title));
  }, [datalist]);

  return (
    <div>
      {datalist[0] ? (
        <MainPage dataList={datalist} />
      ) : (
   
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BookList;
