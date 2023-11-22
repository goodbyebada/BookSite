import { genereProps } from "../page";
import SingleBook from "./singleBook";

export interface dataListProps {
  dataList: genereProps[];
}

export default function SampleList({ dataList }: dataListProps) {
  return (
    <div>
      <h2> BookList</h2>

      {dataList.map((e) => (
        <SingleBook data={e} key={e.id} />
      ))}
    </div>
  );
}
