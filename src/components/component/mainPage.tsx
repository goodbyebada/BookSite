"use client";

import React, { useEffect, useState } from "react";
import ShowBooks from "@components/containers/book/showBooks";
import HeaderWrap from "@components/containers/headerWrap";

import DropDownContainer from "@components/containers/searchBox/dropDownContainer";
import SearchBar from "@components/containers/book/searchBar";
import styles from "@styles/book.module.css";
import SearchBoxWrapper from "@components/containers/searchBox/SearchBoxWrapper";

// 첫화면
export default function MainPage() {
  console.log("This is MainPage");
  return (
    <main className="flex flex-col items-center justify-between">
      <div className={styles.BooksDiv}>
        <div className={styles.introHeader}>
          <SearchBoxWrapper styles={styles}>
            {/* introHeader 높이 고정  */}
            <DropDownContainer />
            <SearchBar />
          </SearchBoxWrapper>
        </div>

        <ShowBooks />
        <ShowBooks />
      </div>
    </main>
  );
}
