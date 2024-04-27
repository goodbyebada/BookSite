"use client";

import "@styles/aboutBook.css";
import { useRouter } from "next/navigation";

function SingleBook() {
  const router = useRouter();

  function goToAbout() {
    router.push("/aboutBook");
  }

  return (
    <div onClick={goToAbout}>
      <div className="SingleBook">
        <div className="Bookpic"></div>
        <p>BookName</p>
        <p> Writer</p>
      </div>
    </div>
  );
}

export default SingleBook;
