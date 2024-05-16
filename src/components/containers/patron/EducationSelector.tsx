// EducationSelector.tsx
import React from "react";
import SelectOption from "./SelectOption";

interface PatronSelectorProps {
  onChange: (value: string) => void;
}

const PatronTypeSelector = ({ onChange }: PatronSelectorProps) => {
  const patronTypeOptions = [
    { value: "1", label: "학부" },
    { value: "2", label: "대학원" },
  ];

  const handleChange = (selectedValue: string) => {
    onChange(selectedValue);
  };

  return (
    <SelectOption
      options={patronTypeOptions}
      serverValueMap={{ "1": "학부", "2": "대학원" }}
      serverCallback={handleChange}
    />
  );
};

export default PatronTypeSelector;
