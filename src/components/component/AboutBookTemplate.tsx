import { useEffect, useState } from "react";
import AboutBookWrapper from "@components/containers/aboutBook/AboutBookWrapper";
import BookInfoContent from "@components/containers/aboutBook/BookInfoContent";
import { result } from "@data/dummyApi";

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

export default function AboutBookTemplate({
  id,
  bookInfo,
}: {
  id: number;
  bookInfo: BookData;
}) {
  const [data, setDataList] = useState<BookData>(bookInfo);

  useEffect(() => {
    if (!bookInfo) {
      console.log("API 호출");

      // 여기서 API 호출
      const fetchData = async () => {
        // const response = await fetch(`/api/book/${id}`);
        // const result = await response.json();
      };

      fetchData();
    }
  }, [id, bookInfo]);

  return (
    <>
      <AboutBookWrapper>
        {data === undefined ? (
          <div className="test_ui">"loading"</div>
        ) : (
          <BookInfoContent bookData={data} />
        )}
      </AboutBookWrapper>
    </>
  );
}
