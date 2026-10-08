import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <p className="home-welcome">Welcome to the</p>
      <h1 className="home-title">Frontend Quiz!</h1>
      <p className="muted">
        Test your knowledge of HTML, CSS, JavaScript and React with 10
        multiple-choice questions.
      </p>
      <button className="btn" onClick={() => navigate("/quiz")}>
        Start Quiz
      </button>
    </div>
  );
}