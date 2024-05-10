import React, { useEffect, useState } from "react";
import DetailNav from "./detail/DetailNav";
import { useRef } from "react";

import DetailReview from "./detail/detailContent/detailReview";

export default function BookContentBody() {
  // const scrollRef = useRef<HTMLElement[]>([]);
  const scrollRef = useRef<HTMLElement[]>([]);

  // console.log(scrollRef.current);

  // 4개의 객체를  담을 Ref배열
  // DOM을 건들기 위해 사용

  return (
    <div className="tab_content">
      <DetailNav scrollRef={scrollRef} />
      <hr />

      {/* {navItemList.map((elem, idx) => (
          <DetailContent key={idx} {...elem} ref={scrollRef} />
        ))} */}

      <DetailReview ref={scrollRef} />
    </div>
  );
}
