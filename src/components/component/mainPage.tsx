"use client";

import React, { useEffect, useState } from "react";
import ShowBooks from "@components/containers/book/showBooks";
import { schoolBookDataProps } from "@components/model/interfaceModel";
import styles from "@styles/book.module.css";
import { Data } from "@components/model/interfaceModel";

import AboutBookTemplate from "./AboutBookTemplate";
import { returnSingleBookItem } from "@components/model/interfaceModel";
// import schoolBookDataProps from
// 첫화면
export default function MainPage({ dataList }: { dataList: Data[] }) {
  console.log("This is MainPage");
  return (
    <div className={styles.BooksDiv}>
      <ShowBooks dataList={dataList} />
    </div>
  );
}

{
  /* [{item: [{title: "", link:""}]}, {item : []}] 을 받아온다 */
}
{
  /* <ShowBooks dataList={dataList} /> */
}
