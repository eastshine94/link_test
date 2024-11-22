import "./App.css";

function App() {
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
  return (
    <div className="container">
      {mbtiList.map((val) => (
        <div className="btn" key={val}>
          <a
            href={`https://3374034b56fe.ngrok.app/bridge/mbti?mbti=${val}`}
            target="_self"
          >
            {val}
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;
