"use client";
import React, { useState } from "react";
import GenderForm from "@components/containers/patron/GenderForm";
import EducationSelector from "@components/containers/patron/EducationSelector";
import BirthdateForm from "@components/containers/patron/BirthdateForm";
import Department from "@components/containers/patron/Department";

const SelectTemplate: React.FC = () => {
  const [formData, setFormData] = useState<any>({
    gender: "",
    education: "",
    birthdate: "",
    department: "",
  });

  const handleSubmit = () => {
    // 이 함수에서는 각 컴포넌트에서 전달된 정보를 이용하여 서버로 데이터를 보내는 로직을 추가
    console.log("서버로 전송될 데이터:", formData);
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <>
      <GenderForm onChange={(value) => handleInputChange("gender", value)} />
      <EducationSelector
        onChange={(value) => handleInputChange("education", value)}
      />
      <BirthdateForm
        onChange={(value) => handleInputChange("birthdate", value)}
      />
      <Department
        onChange={(value) => handleInputChange("department", value)}
      />
      <button onClick={handleSubmit}>제출</button>
    </>
  );
};

export default SelectTemplate;
