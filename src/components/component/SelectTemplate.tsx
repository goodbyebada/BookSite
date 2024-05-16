import React, { useState, useEffect } from "react";
import GenderForm from "@components/containers/patron/GenderForm";
import PatronTypeSelector from "@components/containers/patron/EducationSelector";
import BirthdateForm from "@components/containers/patron/BirthdateForm";
import Department from "@components/containers/patron/Department";
import { useRouter } from "next/navigation";
import { inputData } from "@components/model/interfaceModel";

const testData = {
  gender: "F",
  patron_type: 1,
  birthdate: 19990909,
  department: "컴퓨터학부",
};
const birthTestData = {
  gender: "F",
  patron_type: 1,
  birthdate: 0,
  department: "컴퓨터학부",
};

const fistData = {
  gender: "",
  patron_type: 0,
  birthdate: 0,
  department: "",
};

// Test를 위해
const firstSetData = testData;

const routeUrl = "/bookList";

const SelectTemplate = () => {
  const [formData, setFormData] = useState<inputData>(firstSetData);
  const router = useRouter();

  /**
   *
   * @param data user 정보  { gender, patron_type, birthdate, department }
   * @returns queryString
   */
  const returnQueryString = (data: inputData) => {
    const { gender, patron_type, birthdate, department } = data;
    const queryString = `gender=${gender}&patron-type=${patron_type}&birthdate=${birthdate}&department=${department}`;
    return queryString;
  };

  const checkSubmitCondition = () => {
    const isFormComplete = Object.values(formData).every(
      (field) => field !== ""
    );

    if (!isFormComplete) {
      alert("작성되지 않은 항목이 있습니다!");
      return;
    }

    // 전부 작성했다면 bookList 경로 이동 쿼리문과 함께
    const queryString = returnQueryString(formData);
    router.push(routeUrl + "?" + queryString);
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData: inputData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="select-template">
      <GenderForm onChange={(value) => handleInputChange("gender", value)} />
      <PatronTypeSelector
        onChange={(value) => handleInputChange("patron_type", value)}
      />
      <BirthdateForm
        onChange={(value) => handleInputChange("birthdate", value)}
      />
      <Department
        onChange={(value) => handleInputChange("department", value)}
      />

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          checkSubmitCondition();
          // input란 체크 후 이동
        }}
      >
        제출
      </button>
    </div>
  );
};

export default SelectTemplate;
