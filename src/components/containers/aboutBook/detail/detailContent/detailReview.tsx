"use client";
import { forwardRef, useEffect } from "react";

const DetailReview = forwardRef(
  (props, ref: React.ForwardedRef<HTMLElement[]>) => {
    // scrollRef 객체가 들어오는것 같음

    const happen = (reviewRef: HTMLElement) => {
      useEffect(() => {
        if (ref !== null && ref.current && ref.current[0]) {
          console.log("===");
          console.log(ref.current[0]);
          ref.current[0] = reviewRef;
        }
      }, [ref]);
    };

    // useEffect(() => {
    //   if (test && test.current && test.current[0]) {
    //     console.log("===");
    //     console.log(test.current[0]);
    //   }
    // }, [test.current[0]]);

    return (
      <section
        className="main"
        ref={(reviewRef: HTMLElement) => {
          if (ref !== null) {
            
          }
        }}
      >
        ...
      </section>
    );
  }
);

export default DetailReview;
