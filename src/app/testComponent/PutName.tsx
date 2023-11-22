"use client";
import { useEffect, useState } from "react";
import SingleBook from "../component/singleBook";
import Greetings from "./greeting";

export default function PutName() {
  const [value, setValue] = useState("");
  const [first, setFirst] = useState("");
  const [flag, setFlag] = useState(false);

  const onChangeName = (e: any) => {
    setValue(e.target.value);
    setFlag(false);
  };

  const onChangeFirst = (e: any) => {
    setFirst(e.target.value);
    setFlag(false);
  };

  function onClick() {
    setFlag(true);
  }

  return (
    <div>
      <input
        placeholder="input your name"
        onChange={onChangeName}
        value={value}
        className="input"
      ></input>
      <input
        placeholder="input your first name"
        onChange={onChangeFirst}
        value={first}
        className="input"
      ></input>
      <button onClick={onClick} className="input">
        BUTTON
      </button>
      <div>{flag ? <Greetings name={value} mark={first} /> : ""}</div>
    </div>
  );
}
