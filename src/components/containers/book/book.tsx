"use client";

import "@styles/book.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { bookDataProps } from "@components/model/interfaceModel";

/*
: 부모-> 자식 컴포넌트로 props를 전달할때, 자식 컴포넌트에서 해당 props(allowedRoles)의 타입을 (타입스크립트가) 이해하지 못할 때 발생했습니다
: 자식컴포넌트에서 구조분해할당{}으로 받는 props의 타입을 정의해야하는 이슈 입니다. */

export default function Book({ bookInfo }: { bookInfo: bookDataProps }) {
  // export default function Book(bookInfo: bookDataProps) {

  const { id, title, author, publisher, cover }: bookDataProps = bookInfo;
  const pathname = usePathname();

  const router = useRouter();

  const titles = title.split("-");
  const words = author.split(",");

  return (
    <div>
      <div className="singleBook">
        {/* {showInfo()} */}

        <div className="book_image_container">
          <Link href={`/aboutBook/${id}`}>
            <img src={cover} className="w-100" alt="..." />
          </Link>
        </div>

        <div className="thumbs">
          <img
            id="up"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFh0lEQVR4nO2dSYxWRRCAP1FwQNEZXDIuOGBU3EWJmmhEHGMIF3ENEbcDChyIY2KMF3ELamLiQSOokRgT40VRw0FcDqgzuAMaB6JGzbjElSUs6rjAYHrSkzyL+uf/3zJ2/+/Vl3TyH15X6lX93a+7ul49MAzDMAzDMAzDMOqxPzAP6AE2A78Ba4G7gUPq9jYK5XhgI7CnRtsOzDWb/z+cAGwZxhnJdps5ZWQZD2xo0Bmu7QZmmVNGjhXC4APAw0A70AHcCfwprvkcGG1OKZ4Fygi4R7muE/hbXHe5OaRYTgH+EEbuBvatcf2j4tpnzCHFMRboFQZ2D/WJw/Q5V1zvnjtGQTyuTFVz6vRpFddvNW8UwxWKM5Y10K9F9Ok3h+TnGP/PThq2109h9Zgq+n1jDsnHKGC18i8/vcH+D4q+z5tD8nGvMlUtbLCvW3n9KPpeaw7JzgXALmHQF1P0v1T03QaMM4dkw0VpvxcG/RZoSyHjDdH/SXNGdl5WYlEXpQw8DggZ08wh2VikPDfuSiljqej/njkjG6emDI3UigRvFzJuUK80hmWccti0pU5oROMWIWNTg3sWQ/CUMlVdltJK+/gwe1LGErN0eq5UnLE0g5xZQoYLvx9tDknHROUodkPGaWaVkPOsOSMd+wHv5AiNJDnOL4+Tss75zxVGXZYoU5U7EczCI0LOGrN/OjqVf7Q7K89CK7BTyLraHNI4hwI/CAO6UMmEjEa8Q8jq89Oh0eDSdKUSGpmR0Xqjge+EvC7zRON0Kc+NxTkMeJ2Q5XbpB5lDGuM0v4rKExqRfCjkPbTXFYbKAcBnwnhb/RFtVmYIef/klFcpnhbGc+Hx2TllrlSmv7Rth/9jJNvPwNdKW+8z67v9cfDtPles6bhGMcRjOWUerCybQ7XXfUJFU3CsEg7/1Kfo5KFNSRUN2Vwu8c1EjluSvi8U/x04uSD5C4BfInBGchqOOpHiAUXp+aGVAsb4Eaa1Dj+qZZvij4Gn+QQM99bWa8r9uWSKI4j09E9OKS9QPmYrS/n7iXA3/raSNehiTlXY7PYSGTOVoezyc8vK4cpzMipeEgq+SrlpVfY20dDud8xJBc+j3ExRos3RMFco9wnlZ7q453eJiGVCufsoP9eLe15ORHwglHMP+Kpl6W8EziYS+oRyk6hmbsCuWEIpO4RiLrWz7HT4fZYWSrkptHJSqarQAtyqJFu4PcmRIRWrqkOGOEOZJYIubKruEHyxm6QN3EInGOYQBo+Rk3ZwqbLmkIC0KIdXwbARwmBuctIO7jzeHBIQmWf8Skhlqj5CpisHczeGVKjKDpmp7EP6Qr8fX1WHdClpSS58ckloxarqkG3KvbugY3Cq6pAvlHt3r1xMDq1YVR1yJrBOuf8eX9UoGFV1CN7wixUb5M1hzkWVHTLE8hxVjArHHMJeO/WvzCFhGRtTrUcbIQx+JMCivREnmbvX7oLxVwXP1JNcrMSyghbA2SyUcdXdqrLkXaRkwveHLoCzXiiUpjRfM1elWKc8P6P4dslzOcvzNWNSw+4aznCf0AjOQqGUGzFlZp7iiF9jerVtkqgI6n6fSHk5Svl4TNpKeCNOd0FVfpr1yw1ZquGNKFcJBQdK/o5Ip7jfj4hwCdirHGUeRjlpF/f6ExFyoVJdutu/klz2V9r6aZJ0mCGnlG2kzBH3+CURfxZ1jeIUN32dTzkYrxzfPkHETPC1TbSNkzu4OYnmLlX4prgnt0k8i8hpqzFShtrH/luEnX7PciBx1/2a6o9qZdyu0W9jRcEY/0yRD/oytZ4CqhwFWX3VmsKaua1q5tIho3y997dKMGI2+S8yBE31KfqFyfm+TvtaPy/LQ649EbWdvnbkCv9dEquAahiGYRiGYRiGYRhUhX8BvrITGqyRMJcAAAAASUVORK5CYII="
          ></img>
          <img
            id="down"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFVklEQVR4nO2dW4iVVRSAv8aanGxqpoSK0Oym0VUswojKMQpfIrOwQqLopg9iVtJbxkT2EhRlVlBEEEKRFj5I4oPdIy2FbKKhm9mFqFTUSk2bc2LHDg6LNac5//+f2fv/9/pgv81s1uXs29prrx8MwzAMwzAMwzAMw0ibU4EFwEpgC7ADOAjUI21/AIPA68BtwDFUgA5gLvAeUIvAyPUc7TdgMTCGktIHDERgyHrB7U2ghxJxJLC8AiOi3qS9D3RRAo4DPmyiyGZgKTADOAsYR7yMA6YCD/r1TuryHCVwxlZFcDdSXgOmUF7GA28JvYaAaUQ8TWkj41vgEqpBt991lWKULFec8Y7/ZVWJG4WOXxHpbqqmOKOT6tEj9NxPhOeMAWWaqtrI+I8Tha4/ExlzlQW8KmuGxkyh78dExrtCQLebqjLPCn1XEFlsqnHtqJV8a/t/nAwcEA6ZTUQsUA59VeYOZSf5KzCPSFgphHMn8CpzgT8MahGIJ4iALUIoFw6pOjOBT4ZxypLQwsn4zmTSoANY6M8gjfq79WVCSMH+EgK50EJK9CkXbMtCCiSHbIosEzbYFFIYcwicIeyw0xwSlq6YYls2Qvh3K9xoh6/NIWF5UThkdUhhUh4hY4CHFBtcG1KoVB0yTTkU132g1Z1RgpGqQ75UdP8RmBRasFQdslvRvZ8ISNUhi5Qg49/A1aEFS9UheOPvFfpvA44iICk7xHGlMlJuJSCpOwR/hdtog7UExBwC5wk7fGMOCctY5U4kGDZCYKJFe+NiifhhbgwpTOojZCrwe0wHxFQdMha4V3GGe5N4UkjB9iZ4pz4J2K78GGs+byso24RQwYNro8AjijNc2OROIuAjIdgsqk+/0Nll/l9EJDwthHuY6nOL0PkFIuJmIdynVJ/Lhc7uGV9Uj1cOCQEvpdpMUSK8UbFaCLiOatMj9HU7zai4Stl1zKG6nCB0/ZPIOAx4Wwj5XdlKT7TAYqHrZ0TIOUrScRWftl2nZLy7c0mUPKpMXXeHFgo4GuhVmqs6cdowzZX8uNA3t6u6C1iv6Lc7dKikGUcoB0U3v55d4PO5XxSjhGpDftsfNe7XtUcIvtUH4/LQG1mhswOxhEqyHBbr/kSfh2ObvO0b7bbOJ1iXOgG5VkDO65oCpphdSvvJ34PLttm/JXQlQl4F7i9w+g1SZ+oLYZBd/rozK1eI/g7l7C/JbIz9SjJynnqFG0V/jxUobxLco0wdrjpbVuaJvvb49cVo4RS/RpnLZ+TYWn8v+nMnZ6MFxvuFs9GIP/iDWRYeUMI0h5tHWq9+ILetqzIasUdJLrjBHFLMXfT8jIZ8UinZarSIm1Y+EIZ0u7DzM1jydGXEXWweaZ0J/mG9TBLoytDXWtHPy+aQbFyvTF0rMvQzS/Rx0BcYMzLwvOKU2Rm21IMJZr20Bffs63NhzJ0ZShstUqq7uYLORgbOBfblDK10K+H+aMrtlZGFytS1NGeynvtOiZGDN5TQSl8L/3+mUlXbBTaNjBzvQyn1hrbd3xKOlPUx19ItI5f5DPKsVXWuUZIPSvGxlTJlldd9YsNI6FQOnDe1Wd7K0wFsyBFaeUr87yttljcJJvqrXpkZOJLpZ7oSljcKYI4ydT1TttqHVf8CQd1/2aYZveLvXZFnoyC6/FTVSmhluhJFNgpO4N7XQmhFfgPrJfNG8cxXpq7+Ya6IZaqpy1Q32sAqYWgXJnncZ52f4tOK5EdWBn2GitEGulv8nu5QIs+zgzJZOYkP1+4LLWxKRe8HmjjCxa8sXDLKdAK3+4z0HT4/a5NfR7Im3hmGYRiGYRiGYZAq/wA5NBMo0xHtUwAAAABJRU5ErkJggg=="
          ></img>
        </div>

        <Link href={`/aboutBook`}>
          <div id="title">
            <p>{titles[0]}</p>
          </div>
          <p>{titles[1]}</p>
          {/* 소제목 제거  */}

          <div className="info">
            <span className="writer">
              <span>
                {words[0]}
                {words[1]}
              </span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

// import Book from "./book";

// export interface dataProps {
//   itemId: number;
//   cover: string;
//   title: string;
//   author: string;

//   publisher: string;
//   description: string;
//   categoryId: number;
//   categoryName: string;
//   // isbn: string;
// }

// // export interface singleData {
// //   data: dataProps;
// // }
// // data: { itemId: number; cover: string; ... }

// export interface dataListProps {
//   dataList: dataProps[];
// }

// export default function BookLists({ dataList }: dataListProps) {
//   //{dataList}
//   //datalist -> 객체 리스트

//   // console.log(dataList);

//   dataList.map((e) => console.log(e));

//   //itemId 못 읽는 이유 : undefined라서
//   //datalist 를 Props[]가 아닌 dataProps[]으로 지정 해결

//   return (
//     <div className="BooksLists">
//       {/* 이전에 읽었던 작품 */}
//       <div className="BorrowBook">{/* <SingleBook /> */}</div>

//       {/* 추천 작품 */}

//       <div className="RecommandBooks">
//         {/* {dataList && dataList.data.map((e) => <Book key={e.itemId} data={e} />)} */}
//         {/* book props의 type에 맞게 변수를 넣어야한다.
//         계속했던 헛짓거리: data={e} key={e.itemId} */}
//       </div>
//     </div>
//   );
// }
