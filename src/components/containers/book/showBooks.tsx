import Book from "./book";
import { api } from "../../../data/tmpApi";
import { bookDataListProps } from "@components/model/interfaceModel";
import { bookDataProps } from "@components/model/interfaceModel";

interface externalTypeData {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  adult: boolean;
  fixedPrice: boolean;
  customerReviewRank: number;
  subInfo: Record<string, any>; // 추가 정보를 위한 속성
}

/**
 *알라딘에서 받아온 data  bookDataProps type으로 가공하는 함수
 */
function ExternalTypeToInnerType(
  list: bookDataProps[] | externalTypeData[]
): bookDataProps[] {
  const convertedList: bookDataProps[] = list.map((elem: any) => {
    const { title, author, publisher, cover, isbn, itemId }: any = elem;

    const bookData: bookDataProps = {
      id: itemId,
      title: title,
      author: author,
      publisher: publisher,
      cover: cover,
      isbn: parseInt(isbn),
    };

    return bookData;
  });

  return convertedList;
}

function booklists(dataList: bookDataProps[] | externalTypeData[]) {
  const convertedList = ExternalTypeToInnerType(dataList);

  return (
    <div className="BooksLists">
      <div className="RecommandBooks">
        {dataList &&
          convertedList.map((e: bookDataProps) => {
            return <Book key={e.id} bookInfo={e} />;
          })}
      </div>
    </div>
  );
}

export default function ShowBooks() {
  let dataList: externalTypeData[] = api();

  return (
    <>
      {/* <booklists dataList={data} /> */}
      {booklists(dataList)}
    </>
  );
}
