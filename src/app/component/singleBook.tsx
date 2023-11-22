"use client";

import PropTypes from "prop-types";

import { usePathname, useRouter } from "next/navigation";

/* 
: 부모-> 자식 컴포넌트로 props를 전달할때, 자식 컴포넌트에서 해당 props(allowedRoles)의 타입을 (타입스크립트가) 이해하지 못할 때 발생했습니다
: 자식컴포넌트에서 구조분해할당{}으로 받는 props의 타입을 정의해야하는 이슈 입니다. */

// interface Props {
//   data: PropsItem[];
// }

export interface Props {
  key: number;
  data: {
    id: Number;
    bookName?: string;
    writer?: string;
    genre: string;
  };
}

export default function SingleBook({ data }: Props) {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  // const userName = location.state.userName;
  // const [state, setStae] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  /* 
  useRouter만으로 안됨
  usePathname이 필요함
  */

  return (
    <div className="SingleBook" onClick={() => router.push("/aboutBook")}>
      {data.genre != null ? data.genre : ""}
      <div className="Bookpic"></div>
      <p>BookName: {data.bookName}</p>
      <p> Writer {data.writer}</p>
      <p> 대출정보 </p>
    </div>
  );
}
