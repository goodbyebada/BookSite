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
 * { "item": []} => Data
 * [ { "item": []} , { "item": []} , { "item": []} ] => 최종 api Response
 * Api Response 는 Data[] 형식으로 온다.
 *
 *
 *
 * response는 배열이니까
 * ApiResponse : Data[]
 * ApiResponse[0].item[0]
 * ApiResponse[1].item[0]
 * 무조건 item[0] -> BookItem
 *
 *
 */

/**
 *
 * @param apiResponse Data[] type의 response map으로 줘 하나의 Data
 * @param index index 번째, 순서
 * @returns  한 책의  BookItem
 */
export function returnSingleBookItem(apiResponse: Data, index: number) {
  const singleBookItem: BookItem = apiResponse.item[0];
  return singleBookItem;
}

export interface inputData {
  gender: string;
  patron_type: number;
  birthdate: number;
  department: string;
}

export interface BookItem {
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

export interface schoolBookDataProps {
  id?: number;
  // 알라딘 API에는 존재하지 않음
  title: string;
  author: string;
  publisher: string;
  cover: string;

  // 알라딘은 string
  isbn?: number | string;
  publisherYear?: number;
  classNo?: number;
  // 621.3192
  star?: number;
}

// 알라딘 API props
export interface bookDataProps extends schoolBookDataProps {
  // cover: string;
  description?: string;
  categoryId?: number;
  categoryName?: string;
  pubDate?: string;
  customerReviewRank?: number;
}

export interface bookDataListProps {
  dataList: bookDataProps[];
}

export interface externalTypeData {
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

export interface reviewType {
  id: string | number;
  starRate: number;
  review: string;
}

export interface navItemType {
  idx: number;
  tagId: string;
  item: string;
}

export type loginFormType = {
  id: string | number;
  password: string;
  onSuccess: Function;
  onFail: Function;
};
