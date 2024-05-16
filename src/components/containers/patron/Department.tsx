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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
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
    <div className="department">
      <input
        type="text"
        placeholder="소속을 입력하세요"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="departement-ex">
        {matchedDepartments.map((department, index) => (
          <div key={index} onClick={() => handleDepartmentClick(department)}>
            {department}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
