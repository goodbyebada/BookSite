import React, { useState, useEffect } from "react";
import GenderForm from "@components/containers/formItems/GenderForm";
import PatronTypeSelector from "@components/containers/formItems/EducationSelector";
import BirthdateForm from "@components/containers/formItems/BirthdateForm";
import Department from "@components/containers/formItems/Department";
import { useRouter } from "next/navigation";
import { inputData } from "@components/model/interfaceModel";

/**
 * Test를 위한 Form
 * @returns
 */
function setInputForm(key: keyof typeof testDataObj) {
  const EMPTY_NUMBER = 0;
  const EMPTY_STRING = "";

  const TEST_BIRTH = 19991111;

  enum Department {
    ComputerScience = "컴퓨터학부",
    Business = "경영학부",
  }

  const testDataObj: { [key: string]: inputData } = {
    CSdata: {
      gender: "F",
      patron_type: 1,
      birthdate: TEST_BIRTH,
      department: Department.ComputerScience,
    },

    BSdata: {
      gender: "F",
      patron_type: 1,
      birthdate: TEST_BIRTH,
      department: Department.Business,
    },

    SET: {
      gender: EMPTY_STRING,
      patron_type: EMPTY_NUMBER,
      birthdate: EMPTY_NUMBER,
      department: EMPTY_STRING,
    },
  };

  return testDataObj[key];
}

const bookList = "/bookList";
const getBookInfo = "/getBookInfo";
const routeUrl = bookList;

const UserInputForm = () => {
  const [formData, setFormData] = useState<inputData>(
    setInputForm("CSdata")
    // setInputForm("BSdata")
    // setInputForm("SET")
  );
  const router = useRouter();

  /**
   *
   * @param data user 정보  { gender, patron_type, birthdate, department }
   * @returns queryString
   */
  const returnQueryString = (data: inputData) => {
    const { gender, patron_type, birthdate, department } = data;

    console.log(gender);
    console.log(typeof gender);

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

export default UserInputForm;
