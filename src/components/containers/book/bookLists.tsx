import Book from "./book";
import SingleBook from "./testBook";

export interface dataProps {
  itemId: number;
  cover: string;
  title: string;
  author: string;

  publisher: string;
  description: string;
  categoryId: number;
  categoryName: string;
  // isbn: string;
}

export interface Props {
  dataList: dataProps[];
}
// data: { itemId: number; cover: string; ... }

export default function BookLists({ dataList }: Props) {
  //datalist -> 객체 리스트

  //itemId 못 읽는 이유 : undefined라서
  //datalist 를 Props[]가 아닌 dataProps[]으로 지정 해결

  return (
    <div className="BooksLists">
      {/* 이전에 읽었던 작품 */}
      <SingleBook />



      <div className="RecommandBooks">
        {dataList && dataList.map((e) => <Book key={e.itemId} data={e} />)}

        {/* {dataList && dataList.map((e) => <Book key={e.itemId} data={e} />)} */}
        {/* book props의 type에 맞게 변수를 넣어야한다. 
        계속했던 헛짓거리: data={e} key={e.itemId} */}
      </div>
    </div>
  );
}
