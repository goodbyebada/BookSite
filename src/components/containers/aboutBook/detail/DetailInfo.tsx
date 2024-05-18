"use client";
import { forwardRef, useEffect } from "react";
import React from "react";
import { BookItem, navItemType } from "@components/model/interfaceModel";
import Book from "@components/containers/book/book";

/**
 * Description / Category 등 상세정보를 담는 UI 컴포넌트
 * @param param0  scrollRef, navItemList
 * @returns 상세정보 UI
 */

const DetailInfo = forwardRef(
  (props: navItemType, ref: React.ForwardedRef<HTMLElement[]>) => {
    // reviewRef는 컴포넌트가 마운트될 때 해당 DOM 요소의 참조가 전달되는 것입니다. 이것은 React의 ref 시스템이 자동으로 처리하는 부분입니다.

    const { idx, tagId, item, content, onClickBook } = props;

    return (
      <section
        className="test"
        ref={(currentRef: HTMLElement) => {
          if (
            ref !== null &&
            typeof ref !== "function" &&
            ref.current !== null
          ) {
            ref.current[idx] = currentRef;
          }
        }}
      >
        <h1> {item}</h1>
        <hr></hr>
        <div className="wrapper">
          {typeof content == "string"
            ? content
            : content.map((e, idx) => (
                <Book
                  bookInfo={e}
                  key={idx}
                  clickEvent={
                    onClickBook !== null
                      ? onClickBook
                      : (bookItem: BookItem) => {}
                  }
                />
              ))}
        </div>
      </section>
    );
  }
);

export default DetailInfo;
