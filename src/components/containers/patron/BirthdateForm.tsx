import { useState } from "react";

interface BirthdateFormProps {
  onChange: (value: string) => void;
}

const BirthdateForm = ({ onChange }: BirthdateFormProps) => {
  const [birthdate, setBirthdate] = useState<string>("");

  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBirthdate(value);
    onChange(value);
  };

  return (
    <div>
      <input
        type="date"
        value={birthdate}
        onChange={handleBirthdateChange}
        placeholder="생년월일을 입력하세요"
      />
    </div>
  );
};

export default BirthdateForm;
