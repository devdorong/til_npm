import { animate, createDraggable } from "animejs";
import { useEffect, useRef } from "react";

function AniPage() {
  // js
  const BoxWrap = {
    position: "relative",
    width: "80%",
    height: "50vh",
    backgroundColor: "yellowgreen",
  };
  const BoxStyle = {
    position: "absolute",
    left: 100,
    top: 250,
    width: 50,
    height: 50,
    backgroundColor: "red",
  };
  // html 버전이면 querySelector(".클래스명")
  // React 에서는 useRef(null) 를 활용함
  const boxRef = useRef(null);
  // 모션
  const motionA = () => {
    animate(boxRef.current, {
      left: "240px",
      backgroundColor: ["#ff0000", "#ff00ff"],
      borderRadius: ["0%", "50%"],
      easing: "easeInOutQuad",
      duration: 5000,
    });
  };
  const motionB = () => {
    animate(boxRef.current, {
      scale: 1.5,
      left: 100,
      top: 200,
      backgroundColor: ["#ff00ff", "#ff0000"],
      duration: 2000,

      borderRadius: ["50%", "0%"],
    });
  };
  const motionC = () => {
    animate(boxRef.current, {
      scale: 1,
      left: 300,
      top: 100,
      backgroundColor: "white",
      duration: 2000,

      borderRadius: ["50%", "0%"],
    });
  };

  useEffect(() => {
    if (boxRef.current) {
      createDraggable(boxRef.current);
    }
  }, []);
  // jsx
  return (
    <div>
      <div>
        <button onClick={motionA}>효과 1</button>
        <button onClick={motionB}>효과 2</button>
        <button onClick={motionC}>효과 3</button>
      </div>
      <div style={BoxWrap}>
        <div style={BoxStyle} ref={boxRef}>
          모션의 대상
        </div>
      </div>
    </div>
  );
}

export default AniPage;
