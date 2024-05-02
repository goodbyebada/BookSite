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

export interface reviewType {
  id: string | number;
  starRate: number;
  review: string;
}
