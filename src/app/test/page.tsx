"use client";

import { requestAsyncStorage } from "next/dist/client/components/request-async-storage.external";
import React, { useRef, useState } from "react";
import UserList from "./testComponent";
// import UserList from "./UserList";
// import CreateUser from "./CreateUser";

const Children = () => {
  const [state, setState] = useState(false);
  const handleClickButton = () => setState(!state);
  console.log("Children 컴포넌트 리렌더링");

  return (
    <div>
      <button>Children 상태변화</button>
      {state ? <p> 안뇽</p> : ""}
    </div>
  );
};

// const Parent = ({ children }: { children: JSX.Element }) => {
//   console.log("Parent 컴포넌트 리렌더링");
//   return <div>{children}</div>;
// };
const Parent = () => {
  // console.log("Parent 컴포넌트 리렌더링");
  return (
    <div>
      <p>안</p>
      <Children />
      <p>녕</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;
