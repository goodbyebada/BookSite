"use client";

import { inputData } from "@components/model/interfaceModel";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const dummyApiUrl = `https://bc87b101-4a86-4419-a9e4-2648ec0bde58.mock.pstmn.io/getBookInfo`;
// const apiURL = "https://www.aladin.co.kr/ttb/api";

export const requestBaseUrl = dummyApiUrl;
import { Data } from "@components/model/interfaceModel";

const BookList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [url, setUrl] = useState("");
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const params = decodeURI(`${searchParams}`);

    setUrl(requestBaseUrl + "?" + params);

    // You can now use the current URL
    // ...
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async (): Promise<Data[]> => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch data with status ${response.status}`
          );
        }
        const data = await response.json();

        console.log(data);
        return data;
      } catch (error) {
        console.error("Error during fetch:", error);
        throw error;
      }
    };

    // const data: Data[] = fetchData();
    // setData(data);
  }, [url]);

  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>야호</div>
    </div>
  );
};

export default BookList;
