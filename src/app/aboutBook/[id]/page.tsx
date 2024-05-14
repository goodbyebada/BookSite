"use client";

import "@styles/aboutBook.css";

import { Component, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { reviewType } from "@components/model/interfaceModel";
import AboutBookTemplate from "@components/component/AboutBookTemplate";

// dummy
import dummyReviewList from "@data/tmpReveiw";

function AboutBook({ params: { id } }: { params: { id: string } }) {
  // let navigate = useNavigate();
  const router = useRouter();
  const [value, setValue] = useState("");
  const [starRate, setStarRate] = useState(3.5);
  const [enroll, setEnroll] = useState(false);
  const [reviewList, setReviewList] = useState<reviewType[]>([]);

  /**
   * test용
   */
  const testID = 1;

  return (
    <>
      <AboutBookTemplate id={Number(id)} />
    </>
  );
}

export default AboutBook;

// /**
//  * API 호출을 통해
//  * 서평 리스트
//  */
// function useMakeReviewList() {
//   //  임시로 처리
//   useEffect(() => {
//     setReviewList(dummyReviewList);
//   }, []);
//   // 맨 처음 한번만 실행
// }

// //훅 중첩된 함수에서 실행하지 말아야됨
// // useMakeReviewList();
// // showReviews();

// // function showReviews() {
// //   return (
// //     <>
// //       {reviewList.map((e, index) => (
// //         <div key={index} className="ReviewContent">
// //           <p>작성자:{e.id}</p>
// //           <p>별점: {e.starRate}</p>
// //           <p>서평: {e.review}</p>
// //         </div>
// //       ))}
// //     </>
// //   );
// // }

// /**
//  * 등록 후 list에 내 서평 반영
//  */
// // function changeReviewList() {
// //   const myReview = {
// //     id: testID,
// //     starRate: starRate,
// //     review: value,
// //   };
// //   setReviewList([myReview, ...reviewList]);
// // }

// const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setValue(e.target.value);
// };

// // const onChangeStar = (e: React.ChangeEvent<HTMLInputElement>) => {
// //   setStarRate(Number(e.target.value));
// // };

// let goBack = () => {
//   router.back();
// };

// // const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
// //   e.preventDefault();
// //   changeReviewList();
// //   setValue("");
// //   // showReviews();
// // };

// function enrollReview() {
//   return (
//     <div>
//       <input
//         value={value}
//         className="Input"
//         placeholder="서평을 입력해주세요"
//         onChange={onChange}
//       ></input>
//       <button>등록</button>
//     </div>
//   );
// }
