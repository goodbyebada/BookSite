// import React, { useEffect, useState } from "react";
import Book from "./book";
import SingleBook from "./singleBook";
// import { GetData } from "../apiFolder/getData";
import { api } from "../../../data/tmpApi";

// 알라딘 aPI 기준
export interface BookInfo {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  adult: boolean;
  fixedPrice: boolean;
  customerReviewRank: number;
  subInfo: Record<string, any>; // 특정 형식을 가지는 서브 정보의 형식이 없으므로 Record<string, any>으로 대체
}

function booklists(dataList: BookInfo[]) {
  return (
    <div className="BooksLists">
      <div className="RecommandBooks">
        {dataList && dataList.map((e) => <Book key={e.itemId} data={e} />)}
      </div>
    </div>
  );
}

export default function ShowBooks() {
  // export default function BookLists() {
  // const [hasRendered, setHasRendered] = useState(false);

  // useEffect(() => {
  //   if (dataList?.length == 0) {
  //     getData(); // You can call fetchData if dataList is not null
  //   }
  //   setHasRendered(true);
  // }, [hasRendered]);

  // let data = await GetData();
  let dataList = api();

  return (
    <>
      {/* <booklists dataList={data} /> */}
      {booklists(dataList)}
    </>
  );
}
