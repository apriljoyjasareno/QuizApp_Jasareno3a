import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

interface ResultState {
  score: number;
  total: number;
}

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultState | null;

  // if someone opens /result directly, send them home
  if (!state) return <Navigate to="/" replace />;

  return (
    <ResultCard
      total={state.total}
      score={state.score}
      onRetake={() => navigate("/quiz")}
      onHome={() => navigate("/")}
    />
  );
}