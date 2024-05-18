import React, { useState } from "react";

interface GenderFormProps {
  onChange: (data: any) => void;
}

const GenderForm = ({ onChange }: GenderFormProps) => {
  const [gender, setGender] = useState<string>("");

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
    onChange({ gender: selectedGender }); // 데이터를 상위 컴포넌트로 전달
  };

  return (
    <div className="gender-select">
      <label htmlFor="genderSelect">성별 선택</label>
      <select id="genderSelect" value={gender} onChange={handleGenderChange}>
        <option value="">성별을 선택하세요</option>
        <option value="F">여자</option>
        <option value="M">남자</option>
      </select>
    </div>
  );
};

export default GenderForm;
