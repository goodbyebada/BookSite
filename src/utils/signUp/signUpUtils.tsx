/**
 * 검색하면 검색어와 관련된 item을 띄워주는 함수
 * @returns
 */

const searchContianer = document.getElementById("search_container");

// ul 리스트에 검색결과를 채우는 함수
const fillSearch = (suggestArr: string[]) => {
  console.log(suggestArr);
  const ul = searchContianer?.querySelector(".pop_rel_keywords");
  suggestArr.forEach((el, idx) => {
    const li = document.createElement("li");
    li.innerText = el;
    console.log(el);
    ul?.appendChild(li);
  });
};

// 데이터를 호출하는 코드
const loadData = (input: string) => {
  const url = `https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=71&prefix=${input}&event=onKeyPress&limit=11&fb=1&suggestion-type=KEYWORD`;
  // 매개변수 input 값에 따라 서버에서 해당 검색어와 연관된 추천검색어가 담긴 데이터가 불러와진다.

  let cache;

  console.log("loadData 실행");

  if (cache === url)
    return; // 이전에 부른 데이터랑 다를 때만 fetch로 데이터를 새로 불러온다.
  else {
    cache = url;
    fetch(url)
      .then((res) => res.json())
      .then((res) => fillSearch(res.suggestions));
  }
};

const checkInput = (element: React.ChangeEvent<HTMLInputElement>) => {
  const beforeInput = element.target.value;
  console.log(beforeInput);
  timer(beforeInput);
};

// input창의 내용을 확인하는 함수
function timer(beforeInput: string) {
  const searchInput = searchContianer?.querySelector("input");
  const relContainer = searchContianer?.querySelector(".rel_search");
  setTimeout(() => {
    if (searchInput?.value === beforeInput) {
      console.log("입력멈춤");

      console.log("===========");
      loadData(searchInput?.value);
      // 0.5초 내에 입력창이 변했다면 데이터 로드
    } else {
      console.log("입력변함");
    }

    if (searchInput?.innerHTML === "") {
      // 입력창이 비었다면 추천 검색어 리스트 숨김
      relContainer?.classList.add("hide");
    } else {
      relContainer?.classList.remove("hide");
    }
  }, 500);
}

export default function test(e: React.ChangeEvent<HTMLInputElement>) {
  checkInput(e);
}
