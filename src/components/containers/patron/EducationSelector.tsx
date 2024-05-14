// EducationSelector.tsx
import React from "react";
import SelectOption from "./SelectOption";

interface EducationSelectorProps {
  onChange: (value: string) => void;
}

const EducationSelector = ({ onChange }: EducationSelectorProps) => {
  const educationOptions = [
    { value: "1", label: "학부" },
    { value: "2", label: "대학원" },
  ];

  const handleChange = (selectedValue: string) => {
    onChange(selectedValue);
  };

  return (
    <SelectOption
      options={educationOptions}
      serverValueMap={{ "1": "학부", "2": "대학원" }}
      serverCallback={handleChange}
    />
  );
};

export default EducationSelector;
