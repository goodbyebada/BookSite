interface schoolBookDataProps {
  id: number;
  title: string;
  author: string;
  publisher: string;
  cover: string;

  isbn?: number;
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

export type loginFormType = {
  id: string | number;
  password: string;
  onSuccess: Function;
  onFail: Function;
};