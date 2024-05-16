"use client";

import Link from "next/link";
import { ItemInfo } from "@components/model/interfaceModel";
import styles from "@styles/book.module.css";

interface BookData {
  title: string;
  author: string;
  publisher: string;
  cover: string;
  isbn: string;
  isbn13: string;
  pubDate: string;
  description: string;
}

export default function Book({
  id,
  bookInfo,
}: {
  id: number;
  bookInfo: ItemInfo;
}) {
  const { title, author, publisher, cover }: ItemInfo = bookInfo;
  const titles = title.split("-");
  const words = author.split(",");

  return (
    <div className={styles.single_book}>
      <Link
        href={{
          pathname: `/aboutBook/${id}`,
          query: {
            title,
            author,
            publisher,
            cover,
            isbn: bookInfo.isbn,
            isbn13: bookInfo.isbn13,
            pubDate: bookInfo.pubDate,
            description: bookInfo.description,
          },
        }}
        as={`/aboutBook/${id}`}
      >
        <div id={styles.book_cover}>
          <img src={cover} alt={titles[0]} />
        </div>

        <div className="fw-bold" style={{ fontSize: "1.5rem" }}>
          <p>{titles[0]}</p>
        </div>
        <p>{titles[1]}</p>
        <div className="d-flex flex-row w-100">
          <span className="pe-3">{words[0]}</span>
          <span>{words[1]}</span>
        </div>
      </Link>
    </div>
  );
}
