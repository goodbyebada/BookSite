"use client";

import React, { useEffect, useState } from "react";
import ShowBooks from "@components/containers/book/showBooks";
import { schoolBookDataProps } from "@components/model/interfaceModel";
import styles from "@styles/book.module.css";

// import schoolBookDataProps from
// 첫화면
export default function MainPage({ dataList }: { dataList: [] }) {
  console.log("This is MainPage");
  return (
    <div className={styles.BooksDiv}>
      {/* [{item: [{title: "", link:""}]}, {item : []}] 을 받아온다 */}
      <ShowBooks dataList={dataList} />
    </div>
  );
}
