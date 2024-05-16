import React, { useState, useEffect } from "react";
import GenderForm from "@components/containers/patron/GenderForm";
import PatronTypeSelector from "@components/containers/patron/EducationSelector";
import BirthdateForm from "@components/containers/patron/BirthdateForm";
import Department from "@components/containers/patron/Department";
import { dummyApiUrl } from "@data/dummyApiSource";
import { useRouter } from "next/navigation";
import { inputData } from "@components/model/interfaceModel";
import Link from "next/link";

const testData = {
  gender: "F",
  patron_type: 1,
  birthdate: 19990909,
  department: "컴퓨터학부",
};

const fistData = {
  gender: "",
  patron_type: 0,
  birthdate: 0,
  department: "",
};

const SelectTemplate = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState<inputData>(testData);
  const router = useRouter();

  const returnQuery = (data: inputData) => {
    const { gender, patron_type, birthdate, department } = data;
    const query = `?gender=${data.gender}&patron-type=${data.patron_type}&birthdate=${data.birthdate}&department=${data.department}`;
    // return {
    //   gender: gender,
    //   patron_type: patron_type,
    //   birthdate: birthdate,
    //   department: department,
    // };
    return query;
  };

  const fetchData = async (data: inputData) => {
    const query = `?gender=${data.gender}&patron-type=${data.patron_type}&birthdate=${data.birthdate}&department=${data.department}`;
    const url = dummyApiUrl + query;

    try {
      // const response = await fetch(url);
      // const result = await response.json();
      // console.log(result);
      const result = url;

      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Error fetching data");
    }
  };

  const handleSubmit = async () => {
    // 모든 필드가 채워졌는지 확인
    const isFormComplete = Object.values(formData).every(
      (field) => field !== ""
    );

    if (!isFormComplete) {
      alert("작성되지 않은 항목이 있습니다!");
      return;
    }

    try {
      // 모든 필드가 채워졌다면 백엔드로 데이터를 보냄
      const response = await fetchData(formData);
      // fetchData가 완료된 후에 setSubmit 실행
      setSubmit(!submit);
      router.push("/bookList");

      // 응답을 받았고, 응답에 따라 페이지 이동을 처리
    } catch (error) {
      console.error("Error handling form submission:", error);
      // 오류가 발생한 경우에 대한 처리
    }
  };

  // formDatar가 재렌더링된다면 fetchgksek.

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const query = returnQuery(formData);

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
          handleSubmit();
        }}
      >
        제출
      </button>

      <Link className="btn btn-primary m-3" as="/bookList" href={query}>
        LinkBtn
      </Link>

      <button
        type="button"
        onClick={() => {
          router.push(query);
          // router.push("/bookList");
        }}
      >
        queryBtn
      </button>
    </div>
  );
};

export default SelectTemplate;
