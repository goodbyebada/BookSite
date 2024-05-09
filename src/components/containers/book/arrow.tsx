// import "../../../../public/images/leftArrow.png";
import leftArrow from "../../../../public/images/leftArrow.png";
import rightArrow from "../../../../public/images/rightArrow.png";
import { MouseEventHandler } from "react";

export default function ArrowComponet({
  onClick,
  leftDir,
}: {
  onClick: MouseEventHandler;
  leftDir: boolean;
}) {
  const leftImg = <img src={leftArrow.src}></img>;
  const rightImg = <img src={rightArrow.src}></img>;

  return (
    <div onClick={onClick} className="swiper test_ui">
      {leftDir ? leftImg : rightImg}
    </div>
  );
}
