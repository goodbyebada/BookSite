"use client";

import SearchBar from "../book/searchBar";
import "@styles/search.css";

/**
 * 회원가입 항목에 들어갈 템플릿
 * @param item
 * @returns
 *
 * 검색창에 입력시
 * 아래에 드롭다운으로 해당학과의 이름이 뜬다.
 *
 * 필요한 기능, 로직:
 * 한양대 에리카에 소속되어있는 전공,
 *
 *
 * 학번,
 * 신분 ( 1. 학부, 2.대학원)
 * 상위 소속명 소속학과
 * 성별
 * 생년월일
 *
 */

/**
 *1. input 형
 2. 두가지 선택형 , 신분/ 성별
 3. input 시, 검색형
 4. input형 -> 생년월일  => 체크 로직 필요함 
 */

import test from "src/utils/signUp/signUpUtils";
export default function InputTemplate({ item }: { item: string }) {
  // input형
  const typeOfInput = () => {
    return (
      <div>
        <p>{item}을 입력해주세요</p>
        <SearchBar />
      </div>
    );
  };

  // 두가지 선택형
  const typeOfAlternative = () => {
    return (
      <div>
        <p>{item}을 입력해주세요</p>

        <div id="select_continer">
          <button>여자</button>
          <button>남자</button>
          {/* <input name="gender" type={"radio"}>
            <label>여자</label>
          </input> */}
          {/* <input name="gender" type={"radio"}>
            <label>여자</label>
          </input> */}
        </div>
      </div>
    );
  };

  function selectFun() {
    if (item === "입력") {
      return typeOfInput();
    } else if (item === "성별") {
      return typeOfAlternative();
    }
  }

  return (
    <div>
      {selectFun()}

      <hr />
      <div>
        <h1>임시 signUpUtilsTests</h1>
        <div id="search_continer">
          <input onChange={(e) => test(e)} className="search_input" />
          <div className="rel_search">
            <ul className="pop_rel_keywords"></ul>
          </div>
        </div>
      </div>
    </div>
  );
}
