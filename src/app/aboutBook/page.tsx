"use client";

import "../../components/component/css/AboutBook.css";
import SingleBook from "../../components/containers/(book)/singleBook";
import { Component, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { reviewType } from "../../components/component/model/interfaceModel";

function AboutBook() {
  const dummyReviewList: reviewType[] = [
    {
      id: 1,
      starRate: 3,
      review: "test1",
    },
    {
      id: 2,
      starRate: 5,
      review: "test2",
    },
    {
      id: 3,
      starRate: 4,
      review: "test3",
    },
  ];

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

  /**
   * API 호출을 통해
   * 서평 리스트
   */
  function useMakeReviewList() {
    //  임시로 처리
    useEffect(() => {
      setReviewList(dummyReviewList);
    }, []);
    // 맨 처음 한번만 실행
  }

  //훅 중첩된 함수에서 실행하지 말아야됨
  useMakeReviewList();
  showReviews();

  function showReviews() {
    return (
      <>
        {reviewList.map((e, index) => (
          <div key={index} className="ReviewContent">
            <p>작성자:{e.id}</p>
            <p>별점: {e.starRate}</p>
            <p>서평: {e.review}</p>
          </div>
        ))}
      </>
    );
  }

  /**
   * 등록 후 list에 내 서평 반영
   */
  function changeReviewList() {
    const myReview = {
      id: testID,
      starRate: starRate,
      review: value,
    };
    setReviewList([myReview, ...reviewList]);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onChangeStar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStarRate(Number(e.target.value));
  };

  let goBack = () => {
    router.back();
  };

  const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeReviewList();
    setValue("");
    // showReviews();
  };

  function enrollReview() {
    return (
      <div>
        <input
          value={value}
          className="Input"
          placeholder="서평을 입력해주세요"
          onChange={onChange}
        ></input>
        <button>등록</button>
      </div>
    );
  }

  return (
    <div>
      <header className="AboutHeader"> About Book</header>
      <div>
        <button className="GetBack" onClick={goBack}>
          이전 페이지로 돌아가기{" "}
        </button>

        <div className="Top">
          <div className="Bookpic"></div>
          <div className="Details">
            <p>책 이름: example</p>
            <p>작가: example</p>
            <p> 줄거리: example </p>
          </div>
        </div>
        <div className="Contents">
          <div className="Index">
            <h2>목차</h2>
            <li> 1.example</li>
            <li> 2.example</li>
            <li> 3.example</li>
          </div>
          <div className="Review">
            <h2>서평</h2>
            <form onSubmit={submitEvent}>
              <p>
                별점:
                <input
                  value={starRate}
                  className="StarRating"
                  placeholder="별점을 입력해주세요"
                  onChange={onChangeStar}
                ></input>
              </p>
              {enrollReview()}
              {showReviews()}
            </form>
          </div>
          <div className="Location">
            <h2>소장정보</h2>
            <li> 소장위치:한국시문학관(2층) </li>
            <li> 청구기호: Example</li>
          </div>
        </div>

        {/* 이 작품과 유사한 추천 작품 */}
        <div className="RecommandBooks">
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
          <SingleBook />
        </div>
      </div>
    </div>
  );
}

export default AboutBook;

// "use client";

// import AboutBook from "../component/aboutBook";

// type userType = {
//   name: string;
//   id: number;
// };

// const num = 1;

// export default function TestPage() {
//   const dummyUser: userType = {
//     name: "test",
//     id: 1,
//   };
//   return (
//     <div>
//       <h1>About Book Page</h1>
//       <AboutBook />
//     </div>
//   );
// }
