"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../styles/loginPage.css";
import axios from "axios";
import Link from "next/link";

function LoginPage() {
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");
  // const [idState, setIdState] = useState(false);

  const router = useRouter();

  const url =
    "https://bc87b101-4a86-4419-a9e4-2648ec0bde58.mock.pstmn.io/login";

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputID(e.target.value);
  };
  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPW(e.target.value);
  };

  const loginFun = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    login({
      id: inputID,
      password2: inputPW,
      onSuccess: () => {
        alert("login success");

        /** 사용자 로그인
         *
         * to Back : 로그인 정보
         * return : 사용자 정보를 반영한 -> 카테고리 목록
         */

        console.log("api 주세오 ");

        router.push(`/`);
      },
      onFail: () => {
        alert("fail");
      },
    });
  };

  type loginForm = {
    id: string | number;
    password2: string;
    onSuccess: Function;
    onFail: Function;
  };

  let baseUrl = "https://bc87b101-4a86-4419-a9e4x-2648ec0bde58.mock.pstmn.io";
  function login({ id, password2, onSuccess, onFail }: loginForm) {
    // function login(id, password2, onSuccess, onFail) {
    let url = baseUrl + "/login";

    let body = {
      id: id,
      password: password2,
    };

    axios
      .post(url, body)
      .then((response) => {
        if (response.status == 200) {
          onSuccess();
        } else {
          onFail();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="loginPage">
      <div className="loginForm">
        <form className="borderBox">
          <p>Sign In</p>
          <div className="row">
            <input
              id="id"
              className="login"
              type="text"
              placeholder="id"
              value={inputID}
              onChange={handleInputId}
            ></input>
          </div>
          <div className="row">
            <input
              id="pw"
              className="login"
              type="password"
              placeholder="password"
              value={inputPW}
              onChange={handleInputPw}
            ></input>
          </div>

          <Link className="form_btn" href="/signUp">
            회원가입
          </Link>

          <button type="submit" onClick={loginFun} className="form_btn">
            login
          </button>
          {/* 로직 수행이니, router가 맞다 */}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
