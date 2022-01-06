import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/protected">Protected</Link>
    </div>
  );
};

export default NotFoundPage;
