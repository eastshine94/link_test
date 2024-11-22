import qs from "qs";
import { useMemo } from "react";
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
  const env = useMemo(
    () => qs.parse(window.location.search.replace("?", ""))?.env,
    []
  );
  const domain = useMemo(() => {
    if (env === "development") {
      return "https://better-int.dev.lifeplatform.co.kr";
    } else if (env === "ltd1") {
      return "https://better-ltd1-int.ltd.lifeplatform.co.kr";
    } else {
      return "https://3374034b56fe.ngrok.app";
    }
  }, [env]);
  return (
    <div className="container">
      {mbtiList.map((val) => (
        <div className="btn" key={val}>
          <a href={`${domain}/bridge/mbti?mbti=${val}`} target="_self">
            {val}
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;
