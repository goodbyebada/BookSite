"use client";
import { forwardRef, useEffect } from "react";
import React from "react";
import { navItemType } from "@components/model/interfaceModel";

const DetailReview = forwardRef(
  (props: navItemType, ref: React.ForwardedRef<HTMLElement[]>) => {
    // reviewRef는 컴포넌트가 마운트될 때 해당 DOM 요소의 참조가 전달되는 것입니다. 이것은 React의 ref 시스템이 자동으로 처리하는 부분입니다.

    const { idx, item, ...rest } = props;

    return (
      <section
        className="main"
        ref={(reviewRef: HTMLElement) => {
          if (
            ref !== null &&
            typeof ref !== "function" &&
            ref.current !== null
          ) {
            ref.current[idx] = reviewRef;
          }
        }}
      >
        {item}
      </section>
    );
  }
);

export default DetailReview;
