"use client";

import React, { useState } from "react";

interface SelectOptionProps {
  options: { value: string; label: string }[];
  serverValueMap: { [key: string]: string };
  serverCallback: (value: string) => void;
}

const SelectOption = (props: SelectOptionProps) => {
  const { options, serverValueMap, serverCallback } = props;
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setSelectedValue(selectedOption);

    // 선택한 값에 따라 서버로 전송
    const serverValue = serverValueMap[selectedOption];
    serverCallback(serverValue);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="">선택하세요</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
