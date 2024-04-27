interface dataProps {
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

export interface dataListProps {
  dataList: dataProps[];
}

export interface reviewType {
  id: string | number;
  starRate: number;
  review: string;
}
