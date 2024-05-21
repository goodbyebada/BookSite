// Department.tsx
import React, { useState } from "react";
import { departments } from "@data/patron";
import SelectOption from "./SelectOption";

interface DepartmentProps {
  onChange: (value: string) => void;
}

const Department = ({ onChange }: DepartmentProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [matchedDepartments, setMatchedDepartments] = useState<string[]>([]);
  const [isClicked, setClicked] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    // if (value === "") return;
    setInputValue(value);

    // 입력된 값과 일치하는 학과 찾기
    const matched = departments.filter((department) =>
      department.includes(value)
    );
    setMatchedDepartments(matched);
  };

  const handleDepartmentClick = (department: string) => {
    // 클릭한 학과를 입력 창에 자동으로 완성
    setInputValue(department);
    setMatchedDepartments([]); // 학과 목록 숨기기
    onChange(department); // 선택한 학과를 상위 컴포넌트로 전달
  };

  return (
    <>
      <form className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInputValue"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="floatingInputValue">소속을 입력하세요</label>
      </form>

      <ul className="list-group">
        {matchedDepartments.map((department, index) => (
          <li
            className={"list-group-item"}
            key={index}
            onClick={() => handleDepartmentClick(department)}
          >
            {department}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Department;
