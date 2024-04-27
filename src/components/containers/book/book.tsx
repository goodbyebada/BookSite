"use client";

import "@styles/book.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { dataProps, Props } from "./bookLists";

/*
: 부모-> 자식 컴포넌트로 props를 전달할때, 자식 컴포넌트에서 해당 props(allowedRoles)의 타입을 (타입스크립트가) 이해하지 못할 때 발생했습니다
: 자식컴포넌트에서 구조분해할당{}으로 받는 props의 타입을 정의해야하는 이슈 입니다. */

export interface bookInterface {
  // key: number;
  data: dataProps;
}

export default function Book({ data }: bookInterface) {
  const { itemId, cover, title, author } = data;
  const pathname = usePathname();

  const router = useRouter();

  // function showInfo() {
  //   return (
  //     <div className="SingleBook">
  //       <img src={cover}></img>
  //       {/* <p>Title: {title} </p> */}
  //       {/* <p> Author:{author} </p> */}
  //       <p>{title}</p>
  //       <p>{author}</p>
  //     </div>
  //   );
  // }

  const titles = title.split("-");
  const words = author.split(",");

  return (
    <div>
      <Link className="SingleBook" href={`/aboutBook`}>
        {/* {showInfo()} */}
        <img src={cover}></img>
        {/* <p>Title: {title} </p> */}
        {/* <p> Author:{author} </p> */}
        <p>{titles[0]}</p>
        <p>{titles[1]}</p>
        <p>{words[0]}</p>
        <p>{words[1]}</p>
      </Link>
    </div>
  );
}

// import Book from "./book";

// export interface dataProps {
//   itemId: number;
//   cover: string;
//   title: string;
//   author: string;

//   publisher: string;
//   description: string;
//   categoryId: number;
//   categoryName: string;
//   // isbn: string;
// }

// // export interface singleData {
// //   data: dataProps;
// // }
// // data: { itemId: number; cover: string; ... }

// export interface dataListProps {
//   dataList: dataProps[];
// }

// export default function BookLists({ dataList }: dataListProps) {
//   //{dataList}
//   //datalist -> 객체 리스트

//   // console.log(dataList);

//   dataList.map((e) => console.log(e));

//   //itemId 못 읽는 이유 : undefined라서
//   //datalist 를 Props[]가 아닌 dataProps[]으로 지정 해결

//   return (
//     <div className="BooksLists">
//       {/* 이전에 읽었던 작품 */}
//       <div className="BorrowBook">{/* <SingleBook /> */}</div>

//       {/* 추천 작품 */}

//       <div className="RecommandBooks">
//         {/* {dataList && dataList.data.map((e) => <Book key={e.itemId} data={e} />)} */}
//         {/* book props의 type에 맞게 변수를 넣어야한다.
//         계속했던 헛짓거리: data={e} key={e.itemId} */}
//       </div>
//     </div>
//   );
// }
