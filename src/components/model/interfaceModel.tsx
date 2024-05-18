/**
 * key Item
 * value List
 *
 * 이 List는 하나의 객체만 가지고 있다.
 * 이 List.length === 1
 *
 * List는 Data type의 한 객체를 가지고 있다.
 * 즉, Data 접근할거면
 *
 *
 * 서버에 Get 요청시,
 * { "item": []} []
 * 을 가져온다.
 *
 *
 * Ex) [ { "item": []} , { "item": []} , { "item": []} ]
 * 이 list가 서버에서 오는 값이다.
 *
 *
 * { "item": [{ 특징이 담긴 객체 }]} => Data
 * [ { "item": [{}]} , { "item": [{}]} , { "item": [{}]} ] => 최종 api Response
 * Api Response 는 Data[] 형식으로 온다.
 *
 *
 *
 * response는 배열이니까
 * ApiResponse : Data[]
 * ApiResponse[0].item[0] 0번째 책 정보
 * ApiResponse[1].item[0] 1번째 책 정보
 * 무조건 item[0] -> BookItem
 *
 */

/**
 *
 * @param apiResponse Data[] type의 response map으로 줘 하나의 Data
 * @param index index 번째, 순서
 * @returns  한 책의  BookItem
 */
export function returnSingleBookItem(apiResponse: Data[], index: number) {
  const singleBookItem: BookItem = apiResponse[index].item[0];
  return singleBookItem;
}

/**
 *
 * @param apiResponse Data[] type의 response map으로 줘 하나의 Data
 * @returns  item 객체를 담은 리스트  [  {title : "test", author : "seo "}, {item: { title : "hey", ```}}]
 */
export function returnBookList(apiResponse: Data[]) {
  const itemObjList = apiResponse.map((e) => e.item[0]);
  return itemObjList;
}

/**
 *
 * @param obj 객체
 * @returns 빈 객체라면 true
 */
export function isEmptyObj(obj: Object | null) {
  if (obj?.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  }

  return false;
}

export interface inputData {
  gender: string;
  patron_type: number;
  birthdate: number;
  department: string;
}

export interface BookItem {
  id?: number;
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  mallType: string;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  adult: boolean;
  fixedPrice: boolean;
  seriesInfo?: any;
  subInfo: {
    subTitle: string;
    originalTitle: string;
    itemPage: number;
  };
  categoryIdList: {
    categoryId: number;
    categoryName: string;
  }[];
}

export interface Data {
  item: BookItem[];
}

interface SubInfo {
  subTitle: string;
  originalTitle: string;
  itemPage: number;
}

interface Category {
  categoryId: number;
  categoryName: string;
}

export interface reviewType {
  id: string | number;
  starRate: number;
  review: string;
}

export interface navItemType {
  idx: number;
  tagId: string;
  item: string;
  content: string | BookItem[];
  onClickBook: ((bookItem: BookItem) => void) | null;
}

export type loginFormType = {
  id: string | number;
  password: string;
  onSuccess: Function;
  onFail: Function;
};
