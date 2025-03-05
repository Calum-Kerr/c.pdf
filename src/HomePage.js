import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Document Portal</h1>
      <button onClick={() => navigate('/upload')}>Next</button>
    </div>
  );
}

export default HomePage; 