"use client";

import React, { useEffect, useState } from "react";
import ShowBooks from "@components/containers/book/showBooks";
import { schoolBookDataProps } from "@components/model/interfaceModel";
import styles from "@styles/book.module.css";

// import schoolBookDataProps from
// 첫화면
export default function MainPage({
  dataList,
}: {
  dataList: schoolBookDataProps[];
}) {
  console.log("This is MainPage");
  return (
    <main className="flex flex-col items-center justify-between">
      <div className={styles.BooksDiv}>
        {/* <div className={styles.introHeader}>
          <SearchBoxWrapper styles={styles}>
            <DropDownContainer />
            <SearchBar />
          </SearchBoxWrapper>
        </div> */}

        <ShowBooks />
      </div>
    </main>
  );
}
