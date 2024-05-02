"use client";

import React, { useEffect, useState } from "react";
import ShowBooks from "@components/containers/book/showBooks";
import HeaderWrap from "@components/containers/headerWrap";

import DropDownContainer from "@components/containers/searchBox/dropDownContainer";
import SearchBar from "@components/containers/book/searchBar";

// 첫화면
export default function MainPage() {
  return (
    <>
      <HeaderWrap />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="BooksDiv">
          <div className="introHeader">
            <h2> MAIN PAGE </h2>

            <div
              className="d-flex justify-content-center flex-row"
              id="search_bar"
            >
              <DropDownContainer />
              <SearchBar />
            </div>
          </div>

          <div className="SetOfBooks">
            <ShowBooks />
            <ShowBooks />
            <ShowBooks />
            <ShowBooks />
            <ShowBooks />
          </div>
        </div>
      </main>
    </>
  );
}
