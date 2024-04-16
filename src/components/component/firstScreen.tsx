import React from "react";
import MainPage from "./mainPage";

export function FirstScreen() {
  const SearchBar = function () {
    return <input />;
  };

  // const data = getData();

  const LoginBtn = function () {
    return (
      <div>
        <div>
          <input placeholder="ID를 입력해주세요" />
        </div>

        <div>
          <input placeholder="PW를 입력해주세요" />e
        </div>
      </div>
    );
  };

  return (
    <div>
      <SearchBar />
      <LoginBtn />
      <MainPage />
    </div>
  );
}
