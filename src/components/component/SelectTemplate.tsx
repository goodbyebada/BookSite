// SelectTemplate.tsx
import React, { useState } from "react";
import GenderForm from "@components/containers/patron/GenderForm";
import EducationSelector from "@components/containers/patron/EducationSelector";
import BirthdateForm from "@components/containers/patron/BirthdateForm";
import Department from "@components/containers/patron/Department";

interface SelectTemplateProps {
  onSubmit: (data: any) => void; // 백엔드로 데이터를 보내는 함수
}

const SelectTemplate = ({ onSubmit }: SelectTemplateProps) => {
  const [formData, setFormData] = useState<any>({
    gender: "",
    education: "",
    birthdate: "",
    department: "",
  });

  const handleSubmit = () => {
    // 백엔드로 데이터를 보냄
    onSubmit(formData);
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
