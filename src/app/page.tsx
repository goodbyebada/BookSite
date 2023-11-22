// import Image from "next/image";

import SampleList from "./component/sampleList";
import SingleBook from "./component/singleBook";
import Greetings from "./testComponent/greeting";
import PutName from "./testComponent/PutName";

export interface genereProps {
  id: number;
  genre: string;
}

export default function Home() {
  const genresList: genereProps[] = [
    { id: 1, genre: "Romance" },
    { id: 2, genre: "Action" },
    { id: 3, genre: "Thriller" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      This is Home Page!
      {/* <SampleList genres={genres} />
       */}
      <SampleList dataList={genresList} />
    </main>
  );
}
