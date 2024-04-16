"use client";

import React, { useEffect, useState } from "react";
import ShowBooks from "../containers/(book)/showBooks";
import SearchBar from "../containers/searchBar";
import { useRouter } from "next/navigation";

// 첫화면
export default function MainPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="BooksDiv">
        <div className="Login" onClick={() => router.push("/loginPage")}>
          login
        </div>
        <SearchBar />

        <header className="introHeader">
          <h2> &quot; 오늘의 책은? &quot;</h2>
          <p> 책을 추천해드려요! </p>
        </header>

        <div className="SetOfBooks">
          <ShowBooks />
        </div>
      </div>
    </main>
  );
}
