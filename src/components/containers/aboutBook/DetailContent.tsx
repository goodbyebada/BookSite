import React, { useEffect, useState } from "react";
import DetailNav from "./detail/detailContent/DetailNav";
import { useRef } from "react";

import { navItemList } from "./detail/detailContent/DetailNav";
import DetailReview from "./detail/detailContent/detailReview";
import { bookDataProps } from "@components/model/interfaceModel";

export default function DetailContent({ content }: { content: bookDataProps }) {
  // const scrollRef = useRef<HTMLElement[]>([]);
  const scrollRef = useRef<HTMLElement[]>([]);
  // scrollRef.current : []

  const [test, setTest] = useState(false);

  // 4개의 객체를  담을 Ref배열
  // DOM을 건들기 위해 사용

  const ReviewList = content;
  useEffect(() => console.log("DetailContent reRendering"), [test]);
  const onClick = () => {
    setTest(!test);
  };

  return (
    <div onClick={onClick} className="w-100 p-3">
      <DetailNav scrollRef={scrollRef} />

      {/*(single) BookData 정보가져오면 map을 사용 못한다. 배열이 아니라 하나의 객체이기 때문이다*/}
      {/* NavList로 묶으면 props로 받기가 어렵다. */}
      {/* scrollRef 걸려있어서 더 어렵다  */}

      {navItemList.map((elem, idx) => (
        <DetailReview key={idx} {...elem} ref={scrollRef} />
      ))}
    </div>
  );
}
