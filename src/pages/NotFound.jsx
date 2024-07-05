import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Page doesen t exist</p>
      <button onClick={() => navigate("/")}>Go home</button>
    </div>
  );
}

export default NotFound;
