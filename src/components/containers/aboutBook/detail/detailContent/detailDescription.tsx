"use client";
import { forwardRef, useEffect } from "react";

interface aboutBookContentItem {
  idx: number;
  tagId: string;
  item: string;
}

const DetailContent = forwardRef((props, ref) => {
  // useEffect(() => {
  //   console.log("Component mounted");
  //   console.log(props);
  //   const { idx, ...rest } = props;
  //   console.log(idx);
  // }, []);

  const section = (props: aboutBookContentItem) => {
    const { idx, tagId, item } = props;
    console.log(idx);
    return <div>{item}</div>;
  };

  return <div className="tab_section">{props ? section(props) : "야호"}</div>;
});
export default DetailContent;
