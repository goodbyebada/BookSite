import axios from "axios";
import { GetStaticProps } from "next";

interface PageProps {
  data: any; // 여기에 실제 데이터의 타입을 지정해 주세요.
}

// 이 함수는 빌드 시에 데이터를 불러오기 위해 사용됩니다.
const getStaticProps: GetStaticProps<PageProps> = async () => {
  const apiURL = "https://www.aladin.co.kr/ttb/api/";
  const TTBKey = `ttbds05199k1053001`;

  const restUrl =
    `ItemSearch.aspx?` +
    `ttbkey=${TTBKey}` +
    `&Query=love` +
    `&QueryType=Title` +
    `&MaxResults=100&Id}&output=js&Version=20131101`;

  const res = await axios.get(apiURL + restUrl);
  const data = res.data;

  return { props: { data } };
};

// 페이지 컴포넌트
export default function Page({ data }: PageProps) {
  // 데이터를 필요한 대로 사용합니다.
  console.log(data);
}
