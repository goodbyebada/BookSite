import { useState } from "react";

interface BirthdateFormProps {
  onChange: (value: string) => void;
}

const BirthdateForm = ({ onChange }: BirthdateFormProps) => {
  const [birthdate, setBirthdate] = useState<string>("");
  const minDate = "1950-01-01";
  const maxDate = "2005-12-31";

  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value >= minDate && value <= maxDate) {
      setBirthdate(value);
      onChange(value);
    } else {
      alert(`생년월일을 다시 확인해주세요!`);
    }
  };

  return (
    <div>
      <div className="form-floating">
        <input
          type="date"
          value={birthdate}
          onChange={handleBirthdateChange}
          placeholder="생년월일을 입력하세요"
          max={maxDate}
          min={minDate}
          id="floatingInput"
          className="form-control"
        />
        <label htmlFor="floatingInput">생년월일을 입력하세요</label>
      </div>
    </div>
  );
};

export default BirthdateForm;
