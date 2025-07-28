import moment from "moment";

// 1. 서버에서 Response 로 된 데이터
const getData = [
  {
    id: 1,
    title: "swaggr 완료",
    createAt: "2024-12-13T10:00:00Z",
  },
  {
    id: 2,
    title: "react 완료",
    createAt: "2024-12-18T10:00:00Z",
  },
];

function App() {
  // js

  const today = moment().format("YYYY-MM-DD");
  // console.log(today);
  const startDay = moment("2025-07-01");
  const endDay = moment("2025-07-28");

  // jsx
  return (
    <div>
      <h1>Moment 라이브러리</h1>
      <div>
        <p>오늘은 {today} 입니다.</p>
      </div>
      <h2>백엔드 데이터 날짜 출력</h2>
      <div>
        {getData.map(item => {
          return (
            <p key={item.id}>
              아이디: {item.id} / 제목: {item.title} <br />
              등록된 날짜:
              {moment(item.createAt).format("YYYY-MM-DD")}
              <br />
              등록된 날짜로 부터 5일 후:
              {moment(item.createAt).add(5, "days").format("YYYY-MM-DD")}
            </p>
          );
        })}
      </div>
      <div>
        <h2>시간이 얼마나 지났는지 출력</h2>
        {getData.map(item => {
          return (
            <p key={item.id}>
              아이디: {item.id} / 제목: {item.title}
              <br />
              날짜: {moment(item.createAt).format("YYYY-MM-DD")}
              <br />
              지나간 날짜 :{moment(item.createAt).fromNow()}
            </p>
          );
        })}
      </div>
      <div>
        <h2>현재로 부터 3시간 후</h2>
        <div>{moment().add(3, "hour").format("HH:mm:ss")}</div>
      </div>
      <div>
        <h2>시간 차이 계산</h2>
        <div>날짜 차이 : {endDay.diff(startDay, "day")}</div>
        <div>주간 차이 : {endDay.diff(startDay, "week")}</div>
        <div>월간 차이 : {endDay.diff(startDay, "month")}</div>
      </div>
      <div>
        <h2>날짜 비교</h2>
        <div>
          오늘은 2025-08-01 전인가?
          {moment("2025-07-28").isBefore("2025-08-01")
            ? "네 맞습니다."
            : "지났습니다."}
        </div>
        <div>
          오늘은 2025-07-01 이후인가?
          {moment("2025-07-28").isAfter("2025-07-01")
            ? "네 맞습니다. 지났습니다."
            : "아닙니다. 안지났습니다."}
        </div>
      </div>
    </div>
  );
}
export default App;
