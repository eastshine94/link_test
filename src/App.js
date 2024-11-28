import qs from "qs";
import { useMemo, useState } from "react";
import "./App.css";

const mbtiList = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];
function App() {
  const [userMbti, setUserMbti] = useState(mbtiList[0]);
  const [botMbti, setBotMbti] = useState(mbtiList[8]);

  const env = useMemo(
    () => qs.parse(window.location.search.replace("?", ""))?.env,
    []
  );
  const domain = useMemo(() => {
    if (env === "development") {
      return "https://better-int.dev.lifeplatform.co.kr";
    } else if (env === "ltd1") {
      return "https://better-ltd1-int.ltd.lifeplatform.co.kr";
    } else if (env === "staging") {
      return "https://better-int.stg.lifeplatform.co.kr";
    } else {
      return "https://3374034b56fe.ngrok.app";
    }
  }, [env]);
  return (
    <div className="container">
      <div className="selectContent">
        <div className="flex">
          <div>유저 MBTI</div>
          <select
            id="userMbti"
            value={userMbti}
            onChange={(event) => {
              setUserMbti(event.target.value);
            }}
          >
            {mbtiList.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <div className="flex">
          <div>댓글봇 MBTI</div>
          <select
            value={botMbti}
            onChange={(event) => {
              setBotMbti(event.target.value);
            }}
          >
            {mbtiList.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="btn">
        <a
          href={`${domain}/bridge/mbti?userMbti=${userMbti}&botMbti=${botMbti}`}
          target="_self"
        >
          테스트 완료
        </a>
      </div>
    </div>
  );
}

export default App;
