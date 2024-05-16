"use client";
//page

import React, { useState, useEffect } from "react";
import MainPage from "../components/component/MainPage";
import SelectTemplate from "@components/component/SelectTemplate";

export default function Home() {
  return (
    <main>
      {/* {!submit && <SelectTemplate onSubmit={handleDataSubmit} />} */}
      <SelectTemplate />

      {/* {submit && <MainPage dataList={mainPageData} />} */}
    </main>
  );
}
