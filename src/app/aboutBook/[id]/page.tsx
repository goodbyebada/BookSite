"use client";

import "@styles/aboutBook.css";
import SingleBook from "@components/containers/book/singleBook";
import { Component, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { reviewType } from "@components/model/interfaceModel";
import AboutBookContent from "@components/component/aboutBook";

function AboutBook({ params: { id } }: { params: { id: string } }) {
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
  // useMakeReviewList();
  // showReviews();

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
          <div className="Bookpic">
            <img src="https://i.namu.wiki/i/t0Ulyc-RFU0amTC9CSFFngWlvrrIU1l0uLU_BeZi3MkewszHEqvFfPcO1QcaU5Haqi6Gc456WLi-OK_C2iFcQrTv7ATt0JnZzNtWrBS6falIhherbgALYs95IquGTYyOHOxyiDjirI_62z4xN72kXQ.webp" />
          </div>

          <div className="thumbs">
            <img
              id="up"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFh0lEQVR4nO2dSYxWRRCAP1FwQNEZXDIuOGBU3EWJmmhEHGMIF3ENEbcDChyIY2KMF3ELamLiQSOokRgT40VRw0FcDqgzuAMaB6JGzbjElSUs6rjAYHrSkzyL+uf/3zJ2/+/Vl3TyH15X6lX93a+7ul49MAzDMAzDMAzDMOqxPzAP6AE2A78Ba4G7gUPq9jYK5XhgI7CnRtsOzDWb/z+cAGwZxhnJdps5ZWQZD2xo0Bmu7QZmmVNGjhXC4APAw0A70AHcCfwprvkcGG1OKZ4Fygi4R7muE/hbXHe5OaRYTgH+EEbuBvatcf2j4tpnzCHFMRboFQZ2D/WJw/Q5V1zvnjtGQTyuTFVz6vRpFddvNW8UwxWKM5Y10K9F9Ok3h+TnGP/PThq2109h9Zgq+n1jDsnHKGC18i8/vcH+D4q+z5tD8nGvMlUtbLCvW3n9KPpeaw7JzgXALmHQF1P0v1T03QaMM4dkw0VpvxcG/RZoSyHjDdH/SXNGdl5WYlEXpQw8DggZ08wh2VikPDfuSiljqej/njkjG6emDI3UigRvFzJuUK80hmWccti0pU5oROMWIWNTg3sWQ/CUMlVdltJK+/gwe1LGErN0eq5UnLE0g5xZQoYLvx9tDknHROUodkPGaWaVkPOsOSMd+wHv5AiNJDnOL4+Tss75zxVGXZYoU5U7EczCI0LOGrN/OjqVf7Q7K89CK7BTyLraHNI4hwI/CAO6UMmEjEa8Q8jq89Oh0eDSdKUSGpmR0Xqjge+EvC7zRON0Kc+NxTkMeJ2Q5XbpB5lDGuM0v4rKExqRfCjkPbTXFYbKAcBnwnhb/RFtVmYIef/klFcpnhbGc+Hx2TllrlSmv7Rth/9jJNvPwNdKW+8z67v9cfDtPles6bhGMcRjOWUerCybQ7XXfUJFU3CsEg7/1Kfo5KFNSRUN2Vwu8c1EjluSvi8U/x04uSD5C4BfInBGchqOOpHiAUXp+aGVAsb4Eaa1Dj+qZZvij4Gn+QQM99bWa8r9uWSKI4j09E9OKS9QPmYrS/n7iXA3/raSNehiTlXY7PYSGTOVoezyc8vK4cpzMipeEgq+SrlpVfY20dDud8xJBc+j3ExRos3RMFco9wnlZ7q453eJiGVCufsoP9eLe15ORHwglHMP+Kpl6W8EziYS+oRyk6hmbsCuWEIpO4RiLrWz7HT4fZYWSrkptHJSqarQAtyqJFu4PcmRIRWrqkOGOEOZJYIubKruEHyxm6QN3EInGOYQBo+Rk3ZwqbLmkIC0KIdXwbARwmBuctIO7jzeHBIQmWf8Skhlqj5CpisHczeGVKjKDpmp7EP6Qr8fX1WHdClpSS58ckloxarqkG3KvbugY3Cq6pAvlHt3r1xMDq1YVR1yJrBOuf8eX9UoGFV1CN7wixUb5M1hzkWVHTLE8hxVjArHHMJeO/WvzCFhGRtTrUcbIQx+JMCivREnmbvX7oLxVwXP1JNcrMSyghbA2SyUcdXdqrLkXaRkwveHLoCzXiiUpjRfM1elWKc8P6P4dslzOcvzNWNSw+4aznCf0AjOQqGUGzFlZp7iiF9jerVtkqgI6n6fSHk5Svl4TNpKeCNOd0FVfpr1yw1ZquGNKFcJBQdK/o5Ip7jfj4hwCdirHGUeRjlpF/f6ExFyoVJdutu/klz2V9r6aZJ0mCGnlG2kzBH3+CURfxZ1jeIUN32dTzkYrxzfPkHETPC1TbSNkzu4OYnmLlX4prgnt0k8i8hpqzFShtrH/luEnX7PciBx1/2a6o9qZdyu0W9jRcEY/0yRD/oytZ4CqhwFWX3VmsKaua1q5tIho3y997dKMGI2+S8yBE31KfqFyfm+TvtaPy/LQ649EbWdvnbkCv9dEquAahiGYRiGYRiGYRhUhX8BvrITGqyRMJcAAAAASUVORK5CYII="
            ></img>
            <img
              id="down"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFVklEQVR4nO2dW4iVVRSAv8aanGxqpoSK0Oym0VUswojKMQpfIrOwQqLopg9iVtJbxkT2EhRlVlBEEEKRFj5I4oPdIy2FbKKhm9mFqFTUSk2bc2LHDg6LNac5//+f2fv/9/pgv81s1uXs29prrx8MwzAMwzAMwzAMw0ibU4EFwEpgC7ADOAjUI21/AIPA68BtwDFUgA5gLvAeUIvAyPUc7TdgMTCGktIHDERgyHrB7U2ghxJxJLC8AiOi3qS9D3RRAo4DPmyiyGZgKTADOAsYR7yMA6YCD/r1TuryHCVwxlZFcDdSXgOmUF7GA28JvYaAaUQ8TWkj41vgEqpBt991lWKULFec8Y7/ZVWJG4WOXxHpbqqmOKOT6tEj9NxPhOeMAWWaqtrI+I8Tha4/ExlzlQW8KmuGxkyh78dExrtCQLebqjLPCn1XEFlsqnHtqJV8a/t/nAwcEA6ZTUQsUA59VeYOZSf5KzCPSFgphHMn8CpzgT8MahGIJ4iALUIoFw6pOjOBT4ZxypLQwsn4zmTSoANY6M8gjfq79WVCSMH+EgK50EJK9CkXbMtCCiSHbIosEzbYFFIYcwicIeyw0xwSlq6YYls2Qvh3K9xoh6/NIWF5UThkdUhhUh4hY4CHFBtcG1KoVB0yTTkU132g1Z1RgpGqQ75UdP8RmBRasFQdslvRvZ8ISNUhi5Qg49/A1aEFS9UheOPvFfpvA44iICk7xHGlMlJuJSCpOwR/hdtog7UExBwC5wk7fGMOCctY5U4kGDZCYKJFe+NiifhhbgwpTOojZCrwe0wHxFQdMha4V3GGe5N4UkjB9iZ4pz4J2K78GGs+byso24RQwYNro8AjijNc2OROIuAjIdgsqk+/0Nll/l9EJDwthHuY6nOL0PkFIuJmIdynVJ/Lhc7uGV9Uj1cOCQEvpdpMUSK8UbFaCLiOatMj9HU7zai4Stl1zKG6nCB0/ZPIOAx4Wwj5XdlKT7TAYqHrZ0TIOUrScRWftl2nZLy7c0mUPKpMXXeHFgo4GuhVmqs6cdowzZX8uNA3t6u6C1iv6Lc7dKikGUcoB0U3v55d4PO5XxSjhGpDftsfNe7XtUcIvtUH4/LQG1mhswOxhEqyHBbr/kSfh2ObvO0b7bbOJ1iXOgG5VkDO65oCpphdSvvJ34PLttm/JXQlQl4F7i9w+g1SZ+oLYZBd/rozK1eI/g7l7C/JbIz9SjJynnqFG0V/jxUobxLco0wdrjpbVuaJvvb49cVo4RS/RpnLZ+TYWn8v+nMnZ6MFxvuFs9GIP/iDWRYeUMI0h5tHWq9+ILetqzIasUdJLrjBHFLMXfT8jIZ8UinZarSIm1Y+EIZ0u7DzM1jydGXEXWweaZ0J/mG9TBLoytDXWtHPy+aQbFyvTF0rMvQzS/Rx0BcYMzLwvOKU2Rm21IMJZr20Bffs63NhzJ0ZShstUqq7uYLORgbOBfblDK10K+H+aMrtlZGFytS1NGeynvtOiZGDN5TQSl8L/3+mUlXbBTaNjBzvQyn1hrbd3xKOlPUx19ItI5f5DPKsVXWuUZIPSvGxlTJlldd9YsNI6FQOnDe1Wd7K0wFsyBFaeUr87yttljcJJvqrXpkZOJLpZ7oSljcKYI4ydT1TttqHVf8CQd1/2aYZveLvXZFnoyC6/FTVSmhluhJFNgpO4N7XQmhFfgPrJfNG8cxXpq7+Ya6IZaqpy1Q32sAqYWgXJnncZ52f4tOK5EdWBn2GitEGulv8nu5QIs+zgzJZOYkP1+4LLWxKRe8HmjjCxa8sXDLKdAK3+4z0HT4/a5NfR7Im3hmGYRiGYRiGYZAq/wA5NBMo0xHtUwAAAABJRU5ErkJggg=="
            ></img>
          </div>

          <div className="Details">
            <p>책 이름: example</p>
            <p>작가: example</p>
            <p> 줄거리: example </p>
          </div>
        </div>

        <AboutBookContent />
        {/* <div className="Contents">
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
        </div> */}

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
