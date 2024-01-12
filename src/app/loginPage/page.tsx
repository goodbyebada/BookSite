import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./LoginPage.css";
import axios from "axios";

import { useRouter } from "next/navigation";

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

  let nextPage = 0;

  const loginFun = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  // login(
  //   id,
  //   password2,
  //   () => {
  //     alert("login success");
  //     setIdState(!idState);
  //     router("/UserBooks", {
  //       state: {
  //         userName: `${inputID}`,
  //       },
  //     });
  //     router.push("/UserBooks");
  //     // 경로이동
  //   },
  //   () => alert("fail")
  // );



  let baseUrl = "https://bc87b101-4a86-4419-a9e4-2648ec0bde58.mock.pstmn.io";
  // function login({ id, password2, onSuccess, onFail }: loginForm) {

  function login(id, password2, onSuccess, onFail) {
    let url = baseUrl + "/login";

    let body = {
      id: id,
      password: password2,
    };

    axios.post(url, body).then((response) => {
      if (response.status == 200) {
        onSuccess();
      } else {
        onFail();
      }
    });
  }

  return (
    <div className="loginPage">
      <div className="loginForm">
        <form className="borderBox">
          <p>Sign In</p>
          <div className="row">
            <input
              type="text"
              placeholder="id"
              value={inputID}
              onChange={handleInputId}
            ></input>
          </div>
          <div className="row">
            <input
              type="password"
              placeholder="password"
              value={inputPW}
              onChange={handleInputPw}
            ></input>
          </div>

          <button className="form_btn">회원가입</button>
          <button type="submit" onClick={loginFun} className="form_btn">
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
