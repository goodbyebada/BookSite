import { useEffect, useState } from "react";

export default function ToggleContainer() {
  const categoryList = [
    { id: 0, item: "메뉴1" },
    { id: 1, item: "메뉴2" },
    { id: 2, item: "메뉴3" },
    { id: 3, item: "메뉴4" },
  ];

  /**
   *
   * DropDown Item 눌렀을떄
   * API 호출 내용  변경 생김
   *
   */

  const [isDropdownView, setDropdownView] = useState(false);
  const [toggleItem, changeToggleItem] = useState(categoryList[0].item);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  const changeSelectedName = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const currentToggleItem = event.currentTarget.innerText;
    changeToggleItem(currentToggleItem);
  };

  return (
    <div className="toggle_container" onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <button>
          {toggleItem}
          {isDropdownView ? "▲" : "▼"}
        </button>
      </label>
      {isDropdownView &&
        categoryList.map((elem, index) => (
          <li key={index} onClick={changeSelectedName}>
            {elem.item}
          </li>
        ))}
    </div>
  );
}
