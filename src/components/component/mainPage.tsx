"use client";

import React, { useEffect, useState } from "react";
import ShowBooks from "@components/containers/book/showBooks";
import HeaderWrap from "@components/containers/headerWrap";
import SearchBar from "@components/containers/searchBar";

// 첫화면
export default function MainPage() {
  return (
    <>
      <HeaderWrap />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="BooksDiv">
          <div className="introHeader">
            <h2> MAIN PAGE </h2>
            <SearchBar />
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
